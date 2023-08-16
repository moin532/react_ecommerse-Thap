import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar'
function Header() {
  return (
    <div>
      <MainHeader>
        <NavLink to="/">
          <img src="./images/mm.png" alt="my logo" />
    
        </NavLink>
        <Navbar/>
      </MainHeader>
    </div>
  )
  }
const MainHeader = styled.header` 
 height: 10rem;
 background-color:${({theme})=>theme.colors.bg};
 display:flex;
 justify-content: space-between;
 align-items: center;
 position: relative;
.logo{
 height: 5rem;
 
}
`;

export default Header
