import React from 'react'
import Hero from './Sections/Hero/Hero';

import Problem from'./Sections/Problem/Problem.jsx';
import Problem2 from'./Sections/Problem/Problem2.jsx';
import WhyUs from './Sections/WhyUs/WhyUs.jsx';
import Testimonial from './Sections/Testimonials/Testimonial.jsx';

export default function Home() {
  return (
    <div className='bg-[#fefbff] w-screen overflow-clip'>
      <Hero/>
      <Problem2/>
      
      <WhyUs/>
      <Testimonial/>
      
      

    </div>
  )
}
