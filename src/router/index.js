import React from 'react'

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Salon from '../pages/salon';
import Cart from '../pages/cart';
import Payment from '../pages/payment';
import Mobile from '../pages/login';
import BookingsOrders from '../pages/bookingorder';
import OrderDetails from '../pages/orderdetails';

function Router() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/qrcode/salon/:salonNameId" element={<Salon />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Mobile />} />

          <Route path="/bookingsorders" element={<BookingsOrders />} />
          <Route path="/orderdetails/:orderId" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router