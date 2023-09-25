import React, { useState } from 'react'
import {FaSquareInstagram,FaSquareFacebook,FaSquareWhatsapp} from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import '../styles/book.css'
import {FaEnvelope} from 'react-icons/fa6'


 function Footer() {
    const [scrollcon, setScrollcon] = useState(false)

    const setFixed = ()=> {
        if (window.scrollY >= 496 && window.scrollY <= 1800){
            setScrollcon(true)
        }else  {
            setScrollcon(false)
        }
    }
   window.addEventListener('scroll',setFixed)
  

  return (
    <>
    <div className='container-fluid'>
        <div className='row justify-content-center footerrow1 mt-5 py-5'>
            <div className='col-md-3'>
                <h5 className='fw-bold fs-1 lead'>Subscribe!</h5>
                <h6 className='suscribe-text mt-3'>Subscribe to our Newsletter to stay updated</h6>
                
            </div>
            <div className='col-md-4 g-5'>
                <div className='input-container'>
                    <input type='email' className='py-1 ps-4'  placeholder='Enter Email..'/>
                    <FaEnvelope className='email-icon'color='grey'/>
                    <Link className='btn ms-3 fw-bold mysubsbtn'>Subscribe</Link>
                </div>
                
                
            </div>
        </div>
        <div className='row py-5  justify-content-around footerrow2'>
            <div className='col-md-3'>
                    <h5 className='fw-bold text-center fs-5'>Address:</h5>
                    <h6 className='fw-light text-center fs-6'>No.6 Wawa Avenue, adjacent Densu Point  </h6>
            </div>
        
            <div className='col-md-3'>
                <div className='d-flex flex-column mb-3'>
                    <h5 className='fw-bold text-center fs-5'>Contact:</h5>
                    <h6 className='fw-light text-center fs-6'>Tel: 0530110193</h6>
                    <h6 className='fw-light text-center fs-6'>Email: asbiawudu@gmail.com </h6>
                </div>
                    
            </div>

            <div className='col-md-3 '>
                    <h5 className='fw-bold text-center fs-5'>Social Media:</h5>
                    <div className='d-flex justify-content-center my-3 d-link'>
                        <Link className='link' to={'https://www.instagram.com/'}><FaSquareInstagram  className='social-icons mx-2 ' size={25} color={'#c80f6b'}/></Link>
                        <Link className='link' to={'https://www.facebook.com.'}><FaSquareFacebook className='social-icons mx-2' size={25} color={'#395498'}/></Link>
                        <Link className='link' to={'https://wa.me/+233543969487?text=urlencodedtext'}><FaSquareWhatsapp className='social-icons mx-2' size={25} color={'#2eb743'}/></Link>
                    </div>
            </div>
            
        </div>
        
    </div>
    <div className='fixed-bottom'>
        <div className={scrollcon ? 'onscrollcontainer active':'onscrollcontainer'}>
            <Link className='btn fw-bold myfixedbtn'> Browse Books</Link>
        </div>
    </div>
</>
  )
}


export default Footer