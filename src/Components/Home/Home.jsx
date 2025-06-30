import React from 'react'
import '/src/styles/global.css'
import Image from '../../assets/image.jpg'

const Home = () => {
  return (
    <div id='home' className='scroll-mt-20 relative h-96 bg-contain sm:h-screen sm:bg-cover' style={{ backgroundImage: `url(${Image})` }}>
      <div className='absolute inset-0 bg-gradient-to-b from-deepPurple/80 to-transparent'>
      <div className='mx-5 my-14 sm:mx-24 sm:my-40 text-white leading-8'>
        <h1 className='text-3xl sm:text-6xl font-bold'>Sparkleen Laundry</h1>
        <h2 className='text-2xl sm:text-4xl font-semibold mt-1 mb-1'>Fast. Affordable. Spotless.</h2>
        <p className='text-lg my-2  sm:text-xl font-thin sm:my-4 sm:w-3/5 text-justify'>We take laundry off your to-do list so you can focus on what <br /> matters. <br />Serving homes and businesses with trusted care and quick <br /> turnaround.  </p>
        <button className='mt-5 bg-deepPurple font-semibold px-4 py-2 rounded-xl'><a href="#order">Book Now</a></button>
      </div>
      </div>
    </div>
  )
}

export default Home
