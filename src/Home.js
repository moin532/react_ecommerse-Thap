import React from 'react'
import styled from 'styled-components'
import Herosection from './components/HeroSection'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Contact from './Contact'
import FeauterdProduct from './components/FeauterdProduct'


const Home = () => {
  const data = {
    name:"MM Enterprices",
   
      }
  
  return (
    <Wrapper className='test'>
        <Herosection mydata={data.name} />
        <Services/>
        <FeauterdProduct/>
        <Trusted/>
        <Contact/>
        
      </Wrapper>
    
  )
}

const Wrapper = styled.section `
 background-color: ${({theme}) => theme.colors.bg};
 
height: 100vh;


`;
export default Home
 