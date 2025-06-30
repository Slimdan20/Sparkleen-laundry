import React from 'react'

const Footer = () => {
  return (
    <div id='footer' className=' scroll-mt-20 bg-gradient-to-b from-deepPurple/80 to-transparent justify-normal text-center py-10 text-white'>
      <div className='mx-5'>
        <h1 className='italic '> Sparkleen laundry services © 2023. All rights reserved.</h1>
        <p className='text-base sm:text-lg'>We are located at no 21, kingdom hall street, effurun. Kano state. Nigeria</p>
        <p className='text-base sm:text-lg'>For inquiries, please contact us at: 09012345678 or email us at <a href="mailto:Daneytechwriter@gmail.com">danieldomain22@gmail.com</a></p>
      </div>
      <div className='pt-6 text-base sm:text-lg'>
        <p>Follow us on:</p>
        <a href="https://www.facebook.com" className='text-white mx-2'>Facebook</a>
        <a href="https://www.twitter.com" className='text-white mx-2'>Twitter</a>
        <a href="https://www.instagram.com" className='text-white mx-2'>Instagram</a>
      </div>
    </div>
  )
}

export default Footer
