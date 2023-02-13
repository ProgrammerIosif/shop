import React from "react";
import { useState } from "react";
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";

const RouteSwitch = () => {
  
  const [cart, setCart] = useState(loadFromLocalStorage);

  function loadFromLocalStorage() {
    try {
      const serializedState = localStorage.getItem('cart');
      if (serializedState === null) return {};
      return JSON.parse(serializedState)
    } catch (err) {
      console.log(err)  
      return undefined;
    }
  }

  function saveToLocalStorage() {
    try {
      const serializedState = JSON.stringify(cart)
      localStorage.setItem('cart', serializedState)
    } catch (err) {
      console.log(err)
    }
  }

  const onUpdateCart = (idx) => {
    let newCart = cart;
    newCart[idx] = cart[idx] === undefined ? 1 : cart[idx]+1;
    setCart(newCart);
    console.log(cart);
    saveToLocalStorage(cart);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop handleUpdate={onUpdateCart}/>} />
        <Route path="/cart" element={<Cart addedProducts={cart}/>} />
      </Routes>
    </Router>
  );
};

export default RouteSwitch;