import React from 'react'
import Header from './/components/Header'
import {Outlet} from 'react-router-dom';
import SecondHead from './components/SecondHead';
import Footer from './components/Footer';

export default function Layout() {
  return (
    <div>
        <Header/>
        <SecondHead/>
        <Outlet/>
        <Footer/>
    </div>
  )
}
