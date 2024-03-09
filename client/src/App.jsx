import { useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./components/main/Home/Home.jsx";
import Product from "./components/main/Product/Product.jsx";
import Products from "./components/main/Products/Products.jsx";

import {CurrencyProvider}  from "./context/CurrencyProvider.jsx";

import Navbar from "./components/outlet/Navbar/Navbar.jsx";
import Footer from "./components/outlet/Footer/Footer.jsx";

import "./app.scss";

function App() {
  return (
    <div className="app">
      <CurrencyProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/products/:id" element={<Products />} />
        </Routes>

        <Footer />
      </CurrencyProvider>
    </div>
  );
}

export default App;
