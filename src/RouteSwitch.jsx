import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/shop/" element={<Home />} />
        <Route path="/shop/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;