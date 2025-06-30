import React from 'react'
import Basket from '../../assets/basket.png'
import Shirt from '../../assets/t-shirt.png'
import Truck from '../../assets/truck.png'

const Services = () => {
  return (
    <div id='services' className='bg-lavender scroll-mt-16 sm-scroll-mt-20'>
      <div className='mx-5 sm:mx-12 lg:mx-24 pt-10'>
        <h1 className='py-4 text-3xl font-semibold'>Our Services</h1>
        <div className='grid gap-3 sm:flex sm:justify-between'>
          <div className='bg-deepPurple rounded-xl text-white basis-88 text-center'>
            <img src={Basket} alt="" className='m-auto py-3' />
            <h1 className='text-xl font-bold mb-2'>Wash & Fold</h1>
            <p className='pb-3'>Thorough washing and <br />folding of your everyday <br /> laundry</p>
          </div>
          <div className='bg-deepPurple rounded-xl text-white basis-88 text-center'>
            <img src={Shirt} alt="" className='m-auto py-3' />
            <h1 className='text-xl font-bold mb-2'>Dry Cleaning</h1>
            <p className='pb-3'>Professional cleaning <br />of delicate and special <br />materials</p>
          </div>
          <div className='bg-deepPurple rounded-xl text-white basis-88 text-center'>
            <img src={Truck} alt="" className='m-auto py-3' />
            <h1 className='text-xl font-bold mb-2'>Pickup & Delivery</h1>
            <p className='pb-3'>Scheduled pickup <br /> and delivery at your <br />convenience</p>
          </div>
        </div>
        <h1 className='py-5 text-3xl font-semibold'>How it Works</h1>
        <div className='grid gap-3 sm:flex sm:justify-between pb-16'>
          <p className='text-lg'><span className='py-1 px-2 rounded-full bg-deepPurple text-white mr-2 text-lg font-medium'>1</span>Schedule pickup</p>
          <p className='text-lg'><span className='py-1 px-2 rounded-full bg-deepPurple text-white mr-2 text-lg font-medium'>2</span>We collect and clean</p>
          <p className='text-lg'><span className='py-1 px-2 rounded-full bg-deepPurple text-white mr-2 text-lg font-medium'>3</span>Delivered fresh to your door</p>
        </div>
      </div>
    </div>
  )
}

export default Services
