import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "./style/common/style.css";
import "./style/salon/style.css"
import "./style/cart/style.css"
import "./style/payment/style.css"
import "./style/login/style.css"
import "./style/orderdetails/style.css";
import "./style/bookingorder/style.css";

import "./style/responsive/style.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
