import React from "react";

function Header(props) {

  return (
    <div className="header-container d-flex align-items-center">
      <div>
        <button
          className="border-0 bg-white"
        >
          <img src="/assets/common/back.svg" alt="Back" />
        </button>
      </div>
      <div className="w-100 text-center">
        <p className="mb-0">
          Payment(₹
          30)
        </p>
      </div>
      {/* <div>
        <button
          onClick={() => {
            props.setIsProceed(false)
          }}
          className="border-0 bg-white"
        >
          <img src="/assets/common/back.svg" alt="Back" />
        </button>
      </div>
      <div className="w-100 text-center">
        <p className="mb-0">
          Payment({props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.services[0].service.currencySymbol) : props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products.length > 0 ? String.fromCharCode(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.products[0].product.currencySymbol): ""}{Number(props.gotCartList && props.gotCartList.data.cart && props.gotCartList.data.cart.grandTotal)})
        </p>
      </div> */}
    </div>
  );
}

export default Header;
