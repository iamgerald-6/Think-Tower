import React from 'react'
import Book5 from '../assets/book5.jpg';
import {CiHeart} from 'react-icons/ci';
import {CiShoppingCart} from 'react-icons/ci';
import {FaStar, FaTimes} from 'react-icons/fa';
import {FaStarHalf} from 'react-icons/fa';



function Opencontainer() {

  return (
    <div className='container-sm position-relative'>
      <div className='row border border-3 border-dark boxshadow row-edit justify-content-around'>
        <div className='col-md-4'>
          <img className='img-fluid' src={Book5}  alt='expand book'/>
        </div>
       

       <div className='col-md-7'>
          <h3 className='fw-bold Lead display-5'>The Picture of Dorian Gray</h3>
          <h4 className='lead'> By Oscar Wilde</h4>
          <hr></hr>
          <p className='fs-5'>The novel follows young Dorian Gray, a beautiful man who wishes to remain forever young.
             When his wish is granted, he finds himself torn between virtue and vice, 
             at first not realizing that his choice will come at a price.
          </p>
          <div className='star-icons'>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
            </div>
          <div className='mt-2'>
            <h5>&#x20B5;60.00</h5>
          </div>
          
          
        <div className='col-md-4 mt-2'>
          < CiHeart className='me-3' size={35}/> 
          <CiShoppingCart size ={35}/>
        </div>

        <div className='col-md-1 position-absolute top-0 end-0 px-5 ms-5'>
         <FaTimes/>
       </div>

       
       </div>
      </div>
    </div>
  )
}

export default Opencontainer