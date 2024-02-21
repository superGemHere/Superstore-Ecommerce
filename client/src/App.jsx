import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'

import Home from './components/main/Home/Home.jsx'
import Product from './components/main/Product/Product.jsx'
import Products from './components/main/Products/Products.jsx'

function App() {

  return (
    <>
      <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/products/:id" element={<Products />} />

      </Routes>

    </>
  )
}

export default App
