import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import Home from './components/main/Home/Home.jsx';
import Product from './components/main/Product/Product.jsx';
import Products from './components/main/Products/Products.jsx';

import Navbar from './components/outlet/Navbar/Navbar.jsx';
import Footer from './components/outlet/Footer/Footer.jsx';

import './app.scss'

function App() {

  return (
    <div  className= "app">
    <Navbar />

      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products/:id" element={<Products />} />

      </Routes>

    <Footer />
    </div>
  )
}

export default App
