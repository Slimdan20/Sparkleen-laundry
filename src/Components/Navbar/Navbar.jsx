import React from 'react'
import Logo from '../../assets/logo.png'
import '/src/styles/global.css'


const Navbar = () => {
  return (
    <div className='bg-deepPurple sticky top-0 z-50'>
      <nav className='flex justify-between items-center mx-20'>
        <div>
          <img src={Logo} alt="laundry logo" className='w-28 h-20' />
        </div>
        <div >
          <a href="#home" className='nav-link'>Home</a>
          <a href="#services" className='nav-link'>Services</a>
          <a href="#order" className='nav-link'>Order</a>
          <a href="#about" className='nav-link'>About</a>
          <a href="" className='nav-link'>Testimonials</a>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
