import React from 'react';

import '../styles/book.css';
import Reading from '../assets/Readingbook.jpg';
import Bestsellers from '../components/Bestsellers';

//  {/* CiHeart */}
//         {/* CiShoppingCart */}
//         {/* CiUser */}
//         {/* FaGripVertical */}
//         {/* FaListUl */}
        // CiSearch

export default function Home() {
  return (
    <>
        <div className='container-fluid myhome-bg' >
            <div className='row justify-content-between align-items-center'>
                <div className='col-md-5'>
                    <h2 className='fw-bold display-5'>What books are you looking for?</h2>
                    <p className='text-start myfont-size1'>Get your Christian literature and bibles, personal development books, biographies and historical books, business and political books at an affordable price.</p>
                    <button className='btn btn-color mt-4 text-black fw-bold'>Browse Books</button>
                </div>
                <div className='col-lg-6 me-4'>
                    <div className='blob'><img className='img-fluid' src={Reading} alt='Reading'/></div>
                </div>
                
            </div>
        </div>
         <Bestsellers name='Best Sellers...'/>
         <Bestsellers name='Recommended For You...'/>
         <Bestsellers name='Featured For You...'/>
    </>
  )
}
