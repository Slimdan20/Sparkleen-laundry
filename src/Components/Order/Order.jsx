import React from 'react'

const Order = () => {
  return (
    <div className='bg-deepPurple flex justify-between align-bottom'>
    <div className='text-white mx-24 basis-3/5 '>
      <h1 className='py-4 text-3xl font-semibold'>Place an Order</h1>
      <p className='text-xl font-thin py-4 w-1/2 leading-8 text-justify'>At sparkleen, we understand how demanding your schedule can be. That's why we are committed to making laundry effortless, fast and affordable. Whether for homes or businesses, we offer pickup, professional cleaning, and doorstep delivery all handled with care.</p>
      <button className='mt-5 bg-lavender text-black mb-6 font-semibold px-4 py-2 rounded-xl'>Order Now</button>
    </div>
    <div className='text-white basis-2/5'>
      <h1 className='text-xl'>How it works</h1>
       <p></p>
    </div>
    </div>
  )
}

export default Order
