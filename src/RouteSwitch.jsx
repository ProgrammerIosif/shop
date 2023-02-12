import React from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/shop/" element={<Home />} />
        <Route path="/shop/shop" element={<Shop />} />
        <Route path="/shop/cart" element={<Cart />} />
      </Routes>
    </HashRouter>
  );
};

export default RouteSwitch;