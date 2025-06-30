import React from 'react'
import Logo from '../../assets/logo.png'
import '/src/styles/global.css'
import Menu from '../../assets/menu-wider.png'
import { useState } from 'react'


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className='bg-deepPurple sticky top-0 z-50'>
      <nav className='flex justify-between items-center mx-2 py-2 sm:mx-6 lg:mx-20 sm:py-0'>
        <div>
          <img src={Logo} alt="laundry logo" className='w-16 h-14 sm:w-28 sm:h-20' />
        </div>

          <div className='sm:hidden' onClick={() => setMenuOpen(!menuOpen)}>
            <img src={Menu} alt="" className='w-14 h-12' />
          </div>

        <div className='hidden sm:flex'>
          <a href="#home" className='nav-link'>Home</a>
          <a href="#services" className='nav-link'>Services</a>
          <a href="#order" className='nav-link'>Order</a>
          <a href="#about" className='nav-link'>About</a>
          <a href="#footer" className='nav-link'>Contact</a>
        </div>

      </nav>

      {/* Nav Links - Mobile */}
      {menuOpen && (
        <div className={`sm:hidden flex flex-col ml-5 pb-3 bg-deepPurple gap-4 }`}>
          <a href="#home" className="nav-link" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" className="nav-link" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#order" className="nav-link" onClick={() => setMenuOpen(false)}>Order</a>
          <a href="#about" className="nav-link" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#footer" className="nav-link" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}


    </div>
  )
}

export default Navbar
