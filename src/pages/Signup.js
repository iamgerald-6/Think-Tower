import React from 'react';
import Thinklog from '../assets/Thinktower.jpeg';
import {Link}  from 'react-router-dom';



export default function Signup() {
    return (
      <div className='container-md '>
          <div className='row  row-log justify-content-end'>
              <div className='col-md-6'>
                  <img className='image-fluid ps-5 mb-5 image-logo' src={Thinklog} alt='Think Tower' />
                  <h3 className='fs-5  ps-3 my-4 text-start' >Fill the form below to register...</h3>
              </div>
          </div>
          <div className='row row-log justify-content-end'>
                  <div className='col-md-6'>
                      
                      <form>
                          <label htmlFor='email'>Name</label>
                          <input className='form-control border-info border-color border border-1.5 mt-2' type='text' id='Name' placeholder='Enter Name...' required/>

                          <label htmlFor='Address' className='mt-4'>Address</label>
                          <input className='form-control border-info border-color border border-1.5 mt-2' type='text' id='Address' placeholder='Enter Address...' required/>

                          <label htmlFor='Phone Number' className='mt-4'>Phone Number</label>
                          <input className='form-control border-info border-color border border-1.5 mt-2' type='number' id='Phone Number' placeholder='Enter Phone Number...' required maxLength={12}/>

                          <label htmlFor='Email' className='mt-4'>Email</label>
                          <input className='form-control border-info border-color border border-1.5 mt-2' type='email' id='Email' placeholder='Enter Email...' required/>
                          
                          <div className='d-flex justify-content-between'>
                            <div className='col-md-5' >
                                <label htmlFor='Password' className='mt-4'>Password</label>
                                <input className='form-control border-info border-color border border-1.5 mt-2' type='password' id='Password' placeholder='Enter Password...' required maxLength={8}/>
                            </div>
                            <div className='col-md-5'>
                                <label htmlFor=' Confirm Password' className='mt-4'>Retype</label>
                                <input className='form-control border-info border-color border border-1.5  mb-3 mt-2' type='password' id='Confirm Password' placeholder='Enter Password...' required maxLength={8}/>
                            </div>
                          </div>     
                        
                          
                          <div className='d-grid col-12 mx-auto'>
                          <Link className='log-in btn mt-4'>Signup</Link>
                          </div>
                          <div>
                              <label className='label-2 mt-4 d-flex justify-content-center'>Have an account?<Link to='/login'>Login</Link></label>
                          </div>
                      </form>
                      
                  </div>
          </div>
        
      </div>
    )
  }