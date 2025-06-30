import React from 'react'
import '/src/styles/global.css'
import Image from '../../assets/image.jpg'

const Home = () => {
  return (
    <div id='home' className='w-full h-88 bg-center bg-no-repeatscroll-mt-20 relative sm:h-screen bg-cover' style={{ backgroundImage: `url(${Image})` }}>
      <div className='absolute inset-0 bg-gradient-to-b from-deepPurple/80 to-transparent'>
      <div className='mx-5 mt-36 sm:mx-24 sm:my-40 text-white'>
        <h1 className='text-3xl mb-2 sm:text-6xl sm:mb-0 font-bold'>Sparkleen Laundry</h1>
        <h2 className='text-xl sm:text-4xl font-semibold mt-1 mb-1'>Fast. Affordable. Spotless.</h2>
        <p className='special mt-2 sm:mt-4'>We take laundry off your to-do list so you can focus on what matters.</p> 
        <p className='special mt-1 sm:mt-1'>Serving homes and businesses with trusted care and quick turnaround.  </p>
        <button className='mt-5 bg-deepPurple font-semibold px-4 py-2 rounded-xl'><a href="#order">Book Now</a></button>
      </div>
      </div>
    </div>
  )
}

export default Home
