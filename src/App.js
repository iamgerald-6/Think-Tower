import React from 'react'
import Layout from './Layout';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Opencontainer from './pages/Opencontainer';
import Login from './pages/Login';
import Signup from './pages/Signup';


export default function App() {
  return (
    <div>
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index='/' element ={<Home/>}/>
                <Route path ='opencon' element = {<Opencontainer/>}/>
              
                <Route path='login' element={<Login/>}/>
                <Route path='signup' element ={<Signup/>}/>
                
                  

                

              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
