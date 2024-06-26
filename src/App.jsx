// Dependancies
import React from 'react'
import { Routes, Route } from 'react-router-dom'

// Components
import Navbar from '../components/Navbar/Navbar'

// Pages
import Home from '../Pages/Home/Home'

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
    </>
  )
}

export default App