import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import Marchio from './Images/Marchio.png';
import { useState, useEffect } from 'react'
const Home = () => {
    return <h2>Home</h2>;
  };

const LogoText = styled.h2`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
display: flex;
z-index: 9999; /* Added to bring the image to the front of everything */

&:hover{
    transform: scale(1.1);
}


`
const ImmagineLogo = styled.img`
width: 133.33px;
height: 46.33px;
display: flex;
align-items:center;
z-index: 9999; /* Added to bring the image to the front of everything */

@media (max-width: 20em){
  width: 150px;
  height: 51.75px;
  }
`


const Logo = () => {
  const [click, setClick] = useState(false);

const scrollTo = (id) =>{
  let element = document.getElementById(id);

  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'nearest',
  })

  setClick(!click);
}

  return (
    <LogoText>
        
            <Link>
                
                <ImmagineLogo src={Marchio} onClick={()=> scrollTo('Home')}/>
            </Link>
        

    </LogoText>
  )
}




export default Logo