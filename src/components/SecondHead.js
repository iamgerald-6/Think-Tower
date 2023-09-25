import React from 'react';
import {Link} from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import '../styles/book.css';

export default function SecondHead() {
  return (
<div>
<nav className="navbar">
  <div className="container-fluid">
    <ul className='me-2 mt-3'>
    <li className="nav-item dropdown me-2 mynav-item">
          <Link className=" fw-bold nav-link pt-1 mycategories" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="#">Christian literature</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Religous</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">History</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Personal Development</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Business</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="#">Politcal</Link></li>
          </ul>
    </li>
    </ul>
    <form className="d-flex justify-content-center flex-grow-1 bg-color border" role="search">
      <input className="form-control me-2 bg-color border-0" type="search" placeholder="Search books here" aria-label="Search"/><CiSearch className='cifont me-2 mt-2'size="1.5em"></CiSearch>
    </form>
  </div>
</nav>
</div>
  )
}
