import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


const Order = () => {
  const navigate = useNavigate();
  const usage = [
    'Fill out the order form with your details and prefered pickup date.',
    'Our team will contact you to confirm the order and schedule a pickup time.',
    'We will pick up your laundry at the scheduled time and take it to our facility for cleaning.',
    'Once your laundry is cleaned, we will deliver it back to you at the agreed time.',
    'Enjoy your fresh, clean laundry without the hassle!'
    ]
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevInterval)=>(prevInterval + 1) % usage.length)
    },5000)
    return ()=> clearInterval(interval); }, [])

    return (
    <div id='order' className='scroll-mt-20 bg-deepPurple'>
      <div className='mx-5 sm:mx-24 pt-24 flex justify-between'>
    <div className='text-white basis-3/5 '>
      <h1 className='py-4 text-3xl font-semibold'>Place an Order</h1>
      <p className='text-lg font-thin py-4 w-5/6 leading-8 text-justify'>At sparkleen, we understand how demanding your schedule can be. That's why we are committed to making laundry effortless, fast and affordable. Whether for homes or businesses, we offer pickup, professional cleaning, and doorstep delivery all handled with care.</p>
      <button className='mt-5 mb-28 bg-lavender text-black font-semibold px-4 py-2 rounded-xl' onClick={() => navigate('/form')}>Order Now</button>
    </div>
    <div className='text-white basis-2/5'>
      <h1 className='text-3xl font-semibold py-10'>How it works</h1>
       <p className='bg-lavender rounded-md text-black w-72 p-5 italic text-xl'>"{usage[index]}"</p>
    </div>
    </div>
    </div>
  )
}

export default Order
