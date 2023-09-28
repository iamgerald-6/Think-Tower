import React from 'react';
import Thinklog from '../assets/Thinktower.jpeg';
import {Link}  from 'react-router-dom';


export default function Login() {
  return (
    <div className='container-md '>
        <div className='row  row-log justify-content-end'>
            <div className='col-md-6'>
                <img className='image-fluid ps-5 mb-5 image-logo' src={Thinklog} alt='Think Tower' />
                <h3 className='fs-4  ps-3 my-4 text-start' >Login to continue....</h3>
            </div>
        </div>
        <div className='row row-log justify-content-end'>
                <div className='col-md-6'>
                    
                    <form>
                        <label htmlFor='email'>Email</label>
                        <input className='form-control border-info border-color border border-1.5 mt-2' type='email' id='email' placeholder='Enter Email...' required/>
                        <label htmlFor='password' className='mt-4'>Password</label>
                        <input className='form-control border-info border-color border border-1.5 mt-2' type='password' id='password' placeholder='Enter Password...' required maxLength={8}/>
                        <Link className='forgot-p d-flex justify-content-end'>forgot password?</Link>
                        <div className='d-grid col-12 mx-auto'>
                        <Link className='log-in btn mt-4'>Login</Link>
                        </div>
                        <div>
                            <label className='label-2 mt-4 d-flex justify-content-center'>Don't have an account?<Link to='/signup'>Signup</Link></label>
                        </div>
                    </form>
                    
                </div>
        </div>
      
    </div>
  )
}
