import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useUserId from "../../../customhooks/getuserid";

import usePostData from "../../../customhooks/postdata";

function Proceed(props) {

  const [userId, userError] = useUserId();

  const navigate = useNavigate()

  const [ordered, orderError, order] = usePostData();

  const proceed = () => {

    if (userId) {
      let isProductOutOfStock = false;
      let isProductInActive = false;
      let isServiceInActive = false;
      let isSalonAcceptOrder = true

      if (props.gotCartList.data.cart.products.length > 0) {
        props.gotCartList.data.cart.products.forEach((item) => {
          if (item.count > item.product.currentStock) {
            isProductOutOfStock = true;
            props.setIsPopUp(true)
            props.setPopUpMessage((prev) => prev + "Sorry! You can't proceed because product is outofStock")
          }
        })
      }

      if (props.gotCartList.data.cart.products.length > 0) {
        props.gotCartList.data.cart.products.forEach((item) => {
          if (item.product.status != 1) {
            isProductInActive = true
            props.setIsPopUp(true)
            props.setPopUpMessage((prev) => prev + ", Product is not available")
          }
        })
      }

      if (props.gotCartList.data.cart.services.length > 0) {
        props.gotCartList.data.cart.services.forEach((item) => {
          if (item.service.status != 1) {
            isServiceInActive = true
            props.setIsPopUp(true)
            props.setPopUpMessage((prev) => prev + ", Service is not available")
          }
        })
      }

      if (!props.gotCartList.data.cart.salon.isAcceptingOrder) {
        isSalonAcceptOrder = false
        props.setIsPopUp(true)
        props.setPopUpMessage((prev) => prev + ", Salon is not available.")
      }

      if (!isProductOutOfStock && !isProductInActive && !isServiceInActive && isSalonAcceptOrder) {
        order({
          url: `${process.env.REACT_APP_API_URL}/app/order`,
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: {
            qrCode: true
          },
        });
      }
    }

    if (userError) {
      navigate("/login")
    }

  };

  useEffect(() => {
    if (ordered!=null && ordered!=undefined && ordered!="") {
      navigate("/bookingsorders")
    }
  }, [ordered])

  return (
    <div className="proceed-container d-flex justify-content-between align-items-center">
      <div>
        <p className="grand-total">Grand Total</p>
        <p className="price mb-0">
          {
            props.gotCartList ? <>{props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList.data.cart.products[0].product.currencySymbol) : ""}{Number(props.gotCartList.data.cart.grandTotal)}</> : props.gotGenericCart ? <>{props.gotGenericCart.data.genericCart.services.length > 0 ? String.fromCharCode(props.gotGenericCart.data.genericCart.services[0].service.currencySymbol) : props.gotGenericCart.data.genericCart.products.length > 0 ? String.fromCharCode(props.gotGenericCart.data.genericCart.products[0].product.currencySymbol) : ""}{Number(props.gotGenericCart.data.genericCart.grandTotal)}</> : ""
          }
        </p>
      </div>
      <div className="proceed">
        <button
          onClick={() => {
            proceed();
          }}
          className="border-0 d-flex justify-content-center align-items-center"
        >
          <span>Proceed</span>
          <img src="/assets/common/white_right.svg" alt="Right" />
        </button>
      </div>
    </div>
  );
}

export default Proceed;
