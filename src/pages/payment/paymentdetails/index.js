import React from "react";

function PaymentDetails(props) {
  return (
    <div className="payment-details-container bg-white">
      <div className="title-container text-center">
        <p className="mb-0">Payment Details</p>
      </div>
      <div className="subtotal d-flex justify-content-between align-items-center">
        <p className="mb-0">Subtotal (inclusive tax):</p>
        <p className="mb-0">₹30</p>
      </div>
      <div className="discount d-flex justify-content-between align-items-center">
        <p className="mb-0">Discount:</p>
        <p className="mb-0">₹
          30</p>
      </div>
      <div className="coupon-discount d-flex justify-content-between align-items-center">
        <p className="mb-0">Coupon Discount:</p>
        <p className="mb-0">
          - ₹
          30
        </p>
      </div>
      <div className="grand-total d-flex justify-content-between align-items-center">
        <p className="mb-0">Grand Total:</p>
        <p className="mb-0">
          ₹
          30
        </p>
      </div>
      {/* <div className="title-container text-center">
        <p className="mb-0">Payment Details</p>
      </div>
      <div className="subtotal d-flex justify-content-between align-items-center">
        <p className="mb-0">Subtotal (inclusive tax):</p>
        <p className="mb-0">{props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products[0].product.currencySymbol) : ""}{props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.total}</p>
      </div>
      <div className="discount d-flex justify-content-between align-items-center">
        <p className="mb-0">Discount:</p>
        <p className="mb-0">{props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products[0].product.currencySymbol) : ""}{props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.discount}</p>
      </div>
      <div className="coupon-discount d-flex justify-content-between align-items-center">
        <p className="mb-0">Coupon Discount:</p>
        <p className="mb-0">
          - {props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products[0].product.currencySymbol) : ""}{props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.couponDiscount}
        </p>
      </div>
      <div className="grand-total d-flex justify-content-between align-items-center">
        <p className="mb-0">Grand Total:</p>
        <p className="mb-0">
          {props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products[0].product.currencySymbol) : ""}{Number(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.grandTotal)}
        </p>
      </div> */}
    </div>
  );
}

export default PaymentDetails