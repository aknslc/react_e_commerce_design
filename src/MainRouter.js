import React from 'react'
import { Routes, Route } from 'react-router-dom'

// pages
import Home from './pages/Home'


const MainRouter = () => {
    return (

        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>


    )
}

export default MainRouter