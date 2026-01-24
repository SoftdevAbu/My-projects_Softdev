// src/App.js
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/category/:name" element={<CategoryPage addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
}

export default App;
