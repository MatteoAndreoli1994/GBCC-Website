import * as React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components'
import Marchio from '../assets/logo/logo1.png';
import { useState, useEffect } from 'react'
const Home = () => {
    return <h2>Home</h2>;
  };

const LogoText = styled.h2`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.text};
transition: all 0.2s ease;
display: flex;


&:hover{
    transform: scale(1.1);
}


`
const ImmagineLogo = styled.img`
width: 200px;
height: 69px;
display: flex;
align-items:center;

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
        
            <Link to="/">
                
                <ImmagineLogo src={Marchio} onClick={()=> scrollTo('home')}/>
            </Link>
        

    </LogoText>
  )
}




export default Logo