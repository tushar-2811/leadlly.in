import React from 'react'
import Hero from './Sections/Hero/Hero';
import Slider from '../Components/subcomponents/Slider';
import Problem from'./Sections/Problem/Problem.jsx';
import { SwipeCarousel } from '../Components/subcomponents/Slider2.jsx';
import Features from './Sections/Features/Features.jsx';
import Courses from './Sections/Courses/Courses.jsx';
import Content from './Sections/Content/Content.jsx';
import FAQ from './Sections/FAQ/FAQ.jsx';
import WhyUs from './Sections/WhyUs/WhyUs.jsx';
import Testimonial from './Sections/Testimonials/Testimonial.jsx';
import OurMentors from './Sections/OurMentors/OurMentors.jsx';
export default function Home() {
  return (
    <div className='bg-[#fefbff]'>
      <Hero/>
      <Problem/>
      
      <WhyUs/>
      <Testimonial/>
      
      

    </div>
  )
}
