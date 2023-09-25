import React from 'react'
import Book1 from '../assets/book1.jpg';
import Book2 from '../assets/book2.jpg';
import Book3 from '../assets/book3.jpg';
import Book4 from '../assets/book4.jpg';
import Book5 from '../assets/book5.jpg';
import {FaStar} from 'react-icons/fa';
import {FaStarHalf} from 'react-icons/fa'



function Bestsellers(props) {
  return (
    <div className='container-fluid'>
        <h2 className='display-5 fw-bold mt-5'>{props.name}</h2>
        <div className='row my-3 justify-content-around mybg'>
          <div className='col-md-2'>
            <img className='img-fluid mt-2' src={Book1} alt='book'/>
            <h6 className='pt-3 text-center fontsize-book'>Harry Potter and the Cursed Child</h6>
            <div className='star-icons ms-4 '>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
            </div>
            <h6 className='book-name text-center my-1'>J.K Rowling</h6>
            <h6 className='price-name text-center my-1'>GHS60.00</h6>
            
            
          </div>
          <div className='col-md-2 text-center'>
            <img className='img-fluid mt-2' src={Book2} alt='book2'/>
            <h6 className='pt-3 text-center fontsize-book'>The Psychology of Money</h6>
            <div className='star-icons ms-4'>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
            </div>
            <h6 className='book-name text-center my-1'>Morgan Housel</h6>
            <h6 className='price-name text-center my-1'>GHS50.00</h6>
            
          </div>
          <div className='col-md-2 text-center'>
          <img className='img-fluid mt-2' src={Book3} alt='book3'/>
          <h6 className='pt-3 text-center fontsize-book'>How Innovation Works</h6>
            <div className='star-icons ms-4'>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
            </div>
            <h6 className='book-name text-center my-1'>Matt Ridley</h6>
            <h6 className='price-name text-center my-1'>GHS60.00</h6>

            
          </div>
          <div className='col-md-2 text-center'>
          <img className='img-fluid mt-2' src={Book4} alt='book4'/>
          <h6 className='pt-3 text-center fontsize-book'>The Company of One</h6>
            <div className='star-icons ms-4'>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
            </div>
            <h6 className='book-name text-center my-1'>Paul Jarvis</h6>
            <h6 className='price-name text-center my-1'>GHS60.00</h6>
            
          </div>
          <div className='col-md-2 text-center'>
            <img className='img-fluid mt-2' src={Book5} alt='book5'/>
            <h6 className='pt-3 text-center fontsize-book'>The Picture of Dorian Gray</h6>
             <div className='star-icons ms-4'>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStar className='star mx-1' size={20} color={'#d4af37'}/>
               <FaStarHalf className='star mx-1' size={20} color={'#d4af37'}/>
              </div>
            <h6 className='book-name text-center my-1'>Oscar Wilde</h6>
            <h6 className='price-name text-center my-1'>GHS60.00</h6>
            
          </div>

        </div>
    </div>
    
  )
}

export default Bestsellers