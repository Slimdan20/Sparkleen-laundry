import React from 'react'
import {useState, useEffect} from 'react'
import User from '../../assets/user.png'

const About = () => {

  const testimonials = [
    {
    image: User,
    text: "Sparkleen has transformed my laundry experience! Their service is quick and reliable.",
    name: "Tolulope Vera"
    },
    {
    image: User,
    text: "I love how Sparkleen handles my laundry. It's always fresh and perfectly folded.",
    name: "Temidayo Ezekeil"
    },
    {
    image: User,
    text: "The convenience of Sparkleen's pickup and delivery is unmatched. Highly recommend!",
    name: "Umaru benson"
  }
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setFade(false);
      }, 1000); // Fade out duration
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 10000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='about' className='scroll-mt-20 bg-lavender'>
      <div className='mx-5 py-14 grid sm:flex sm:justify-between sm:mx-24 sm:py-24'>
                <div className='sm:basis-3/6'>
          <h1 className='py-4 text-3xl font-semibold'>About Sparkleen</h1>
          <p className='text-lg w-11/12 sm:w-0 text-justify'> Sparkleen is dedicated to providing fast and reliable laundry services for busy individuals and businesses. We make laundry day a breeze by offering convenient pickup and delivery, professional garment care, and affordable pricing — so you can focus on what matters most while we handle the dirty work. </p>
        </div>
        <div className='basis-2/5'>
          <h1 className='hidden sm:md:block py-4 text-3xl font-semibold'>Testimonial</h1>
          <div className="relative m-auto mt-8 w-80 sm:m-0 sm:mt-0 sm:w-96 h-52 bg-deepPurple text-white rounded-md overflow-hidden">
            <div className={`transition-opacity duration-1000 ease-in-out ${fade ? 'animate-fade-once' : ''}`}>
            <img src={testimonials[index].image} alt="" className='m-auto my-4 w-11 h-11 p-2 border rounded-full'/>
            <p className='text-lg italic px-5 text-justify'>"{testimonials[index].text}"</p>
            <p className='text-center font-bold py-3' >{testimonials[index].name}</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
