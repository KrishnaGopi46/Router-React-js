import React from 'react'
import {BrowserRouter,Routes,Route,Navigate} from"react-router-dom"
import Home from './Home'
import Login from './Login'
import Profile from './Profile'

const Routing = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/profile' element={<Profile/>}></Route>
            {/* <Route path='*' element={<h1>page not fount</h1>}></Route> */}
            <Route path='*' element={<Navigate to="/home"></Navigate>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routing