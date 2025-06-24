import React from 'react'
import Logo from '../../assets/logo.png'
import '/src/styles/global.css'


const Navbar = () => {
  return (
    <div className='bg-deepPurple'>
      <nav className='flex justify-between items-center mx-20'>
        <div>
          <img src={Logo} alt="laundry logo" className='w-28 h-20' />
        </div>
        <div >
          <a href="" className='nav-link'>Home</a>
          <a href="" className='nav-link'>About</a>
          <a href="" className='nav-link'>Services</a>
          <a href="" className='nav-link'>Order</a>
          <a href="" className='nav-link'>Testimonials</a>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
