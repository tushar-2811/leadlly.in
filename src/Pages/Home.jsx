import React from 'react'
import Hero from './Sections/Hero/Hero';
import Slider from '../Components/subcomponents/Slider';
import Problem from'./Sections/Problem/Problem.jsx';
import Features from './Sections/Features/Features.jsx';
import Courses from './Sections/Courses/Courses.jsx';
import Content from './Sections/Content/Content.jsx';
import FAQ from './Sections/FAQ/FAQ.jsx';
export default function Home() {
  return (
    <div>
      <Hero/>
      <Problem/>
      <Slider/>
      <Features/>
      <Courses/>
      <Content/>
      <FAQ/>

    </div>
  )
}
