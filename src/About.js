import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
  const Data ={
    name:"MM Ecommerse"
  }
  return (
    
    <div>
        <HeroSection mydata={Data.name}/>
      
    </div>
  )
}

export default About
