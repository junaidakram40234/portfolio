import React from 'react'
import { BlurReveal } from "../components/ui/blur-reveal.jsx";

const About = () => {
  return (
    <div className='h-screen w-full pt-20'>
      <div className='h-20 w-full  flex items-center justify-center text-white text-7xl font-semibold'>
        <BlurReveal delay={0} >About&nbsp;</BlurReveal>
      <BlurReveal delay={0.1} >Me</BlurReveal>
      </div>
    </div>
  );
}

export default About