import React from 'react'
import Logo from '../../assets/logo.png'
import '/src/styles/global.css'


const Navbar = () => {
  return (
    <div className='bg-deepPurple sticky top-0 z-50'>
      <nav className='flex justify-between items-center mx-2 py-2 sm:mx-20 sm:py-0'>
        <div>
          <img src={Logo} alt="laundry logo" className='w-16 h-14 sm:w-28 sm:h-20' />
        </div>
        <div className='hidden sm:flex'>
          <a href="#home" className='nav-link'>Home</a>
          <a href="#services" className='nav-link'>Services</a>
          <a href="#order" className='nav-link'>Order</a>
          <a href="#about" className='nav-link'>About</a>
          <a href="#footer" className='nav-link'>Contact</a>

        </div>
        
      </nav>
    </div>
  )
}

export default Navbar
