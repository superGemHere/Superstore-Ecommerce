import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'

import './App.css'

import Home from './components/Home/Home.jsx'

function App() {

  return (
    <>
      <Routes>

      <Route path="/" element={<Home />} />

      </Routes>

    </>
  )
}

export default App
