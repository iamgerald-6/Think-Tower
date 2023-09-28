import React, { useState } from 'react'
import {Link}  from 'react-router-dom';
import '../styles/book.css';
import Thinklogo from '../assets/Thinktower.jpeg';


export default function Header() {

const [navbar, setNavbar] = useState(false);

const setFixed = () => {
  if (window.scrollY <= 1800 && window.scrollY >= 30){
      setNavbar(false)
  }else {
    setNavbar(true)
  }
}

window.addEventListener('scroll',setFixed)

  return (
<nav className={`navbar navbar-expand-lg bg-body-tetiary mynav ${navbar ? 'navbar active' : 'navbar'}`} >
   <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img className='ms-2 img-1' src={Thinklogo} alt='ThinkTowerlogo' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbar">
      <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 nyul">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="#">Contacts</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/opencon">Books</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to='login'>Login/Register</Link>
        </li>
      </ul>
      <div className='d-flex justify-content-center align-items-center gap-3'>
        <h1>login</h1>
      </div>
    </div>
  </div>
 </nav>


  )
}
