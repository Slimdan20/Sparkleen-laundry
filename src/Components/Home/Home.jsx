import React from 'react'
import '/src/styles/global.css'
import Image from '../../assets/image.jpg'

const Home = () => {
  return (
    <div className='relative h-screen bg-cover' style={{ backgroundImage: `url(${Image})` }}>
      <div className='absolute inset-0 bg-gradient-to-b from-deepPurple/80 to-transparent'>
      <div className='mx-24 my-40 text-white leading-8'>
        <h1 className='text-6xl font-bold'>Sparkleen Laundry</h1>
        <h2 className='text-4xl font-semibold mt-1 mb-1'>Fast. Affordable. Spotless.</h2>
        <p className='text-xl font-thin my-4 w-3/5 text-justify'>We take laundry off your to-do list so you can focus on what <br /> matters. <br />Serving homes and businesses with trusted care and quick <br /> turnaround.  </p>
        <button className='mt-5 bg-deepPurple font-semibold px-4 py-2 rounded-xl'>Book Now</button>
      </div>
      </div>
    </div>
  )
}

export default Home
