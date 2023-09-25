import React from 'react'
import Layout from './Layout';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';


export default function App() {
  return (
    <div>
         <BrowserRouter>
            <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index='/' element ={<Home/>}/>
                

                

              </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}
