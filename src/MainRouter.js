import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Login from './pages/Auth/Login/Login'
import Register from './pages/Auth/Register/Register'
import SingleProduct from './pages/ProductDetail/ProductDetail'
import Cart from './pages/Cart/Cart'
import Favorites from './pages/Favorites/Favorites'


const MainRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/products/:id' element={<SingleProduct />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
        </Routes>


    )
}

export default MainRouter