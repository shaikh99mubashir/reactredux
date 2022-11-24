import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './user/Home'
import Login from './user/Login'

const Routing = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='home' element={<Home />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Routing