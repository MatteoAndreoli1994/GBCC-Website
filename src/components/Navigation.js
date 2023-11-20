import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import Logo from "./Logo"
import { Link } from "react-router-dom";
import Button from "./Button"


import '../components/Navigation.css'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import {useAccount} from 'wagmi';
import { animated, useSpring } from 'react-spring';
import TwitterImg from "../assets/social-media-icons/twitter.png"
import TelegramImg from "../assets/social-media-icons/Telegram.png"


const Section = styled.nav`
width: 100vw;
min-height:10vh;
display: flex;
justify-content: center;
align-items: center;
position: sticky;
top: 0;
z-index: 1;
overflow: hidden;

`

const Btn = styled.div`
margin-right:20%;
display: flex;
background-color: #5700EF;
color: black;
outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;
font-weight: 700;
align-items:center;
padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);

&:hover{
  transform: scale(1.05);
  box-shadow: 0 0 40px rgba(0,0,0,0.3);
}

@media (max-width: 40em){
  padding: 0.8rem 2rem;
  margin-top:5%;
  margin:10%;
  font-size: 12px;
}
`
const GamesDiv = styled.button`
  background-color: #CCCCCC;
  color: #666666;
  border: none;
  cursor: not-allowed;
  opacity: 0.5;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 10px 20px;
  border-radius: 5px;
  &:hover {
    background-color: #CCCCCC;
    color: #666666;
  }


  @media (max-width: 40em){
    font-size: 0.9rem;
    margin-bottom: 0.3rem;
    }
`;

const Warning = styled(animated.div)`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  margin: auto;
  background-color: #FFCC00;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
`;

const Navbar = styled.section`
display: flex;
justify-content: space-between;
align-items: center;

width: 80%;
height: ${props => props.theme.navHeight};

@media (max-width: 40em){
  width: 80%;
  }

`
const Menu = styled.ul`

align-items:center;
display: flex;
justify-content: space-between;
align-item: center;
list-style: none;

@media (max-width: 80em){
  position:fixed;
  top: ${props => props.theme.navHeight};
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(2px);

  transform: ${props => props.click ? `translateY(0)` : `translateY(+2000%)`};
  
  align-items: center;
  width: 100vw;
  height: ${props => `calc(100vh - ${props.theme.navHeight})`};
  z-index:50;
  background-color: ${props => `rgba(213, 184, 255,0.95)`};
  
  flex-direction: column;
  justify-content: center;

}




`
const MenuItem = styled.li`

margin:0 1.5rem;
color: white;
cursor: pointer;
font-size: 16px;
font-weight: 800;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
@media (max-width:80em){
  margin: 1rem 0;
  color: white;
  &::after{
     display: none;
  }
}

`
const MenuItemMobile = styled.li`

margin:0 2rem;
color: white;
cursor: pointer;
font-size: 15px;
font-weight: 800;
display: none;
&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
@media (max-width:80em){
  margin: 1rem 0;
  color: white;
  display:flex;
  &::after{

  }
}

`
const MenuItemSoc = styled.li`

margin:0 1rem;
color: white;
cursor: pointer;
font-size: 15px;
font-weight: 800;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
@media (max-width:80em){
  margin: 1rem 0;
  color: black;
  &::after{
     display: none;
  }
}

`
const MenuItemSocial = styled.div`


color: white;
cursor: pointer;
font-size: 15px;
font-weight: 800;

&::after{
  content: ' ';
  display: block;
  width: 0%;
  height: 2px;
  background: ${props => props.theme.text};
  transition: width 0.3s ease;
}
&:hover::after{
  width: 100%;
}
@media (max-width:80em){

  color: black;

  display: none;
  &::after{
     display: none;
  }
}
@media (max-width:45em){



}

`
const MenuItemGames = styled.li`

margin:0 2rem;
color: white;
cursor: pointer;
font-family: "Custom-Archivo-Bold";
font-weight: 400;
font-size: 14px;


`


const HamburgerContainer = styled.div`

width: ${props => props.click ? '10rem' : '8rem'};
height: 4rem;
position: absolute;

color: white;
top: ${props => props.click ? '0rem' : '2rem' };
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
display: flex;
justify-content: center;
align-items:center;
display:none;
cursor: pointer;


@media (max-width: 80em){
  display:flex;

}
@media (max-width: 40em){
left: 75%;

}
`

const DesktopVisibility = styled.div`
@media (max-width: 40em){
  display:none;
}
`
const MobileVisibility = styled.div`
display:none;
@media (max-width: 40em){
  margin-top:2%;
  display: block;
}
`

const HamburgerMenu = styled.span`

width: ${props => props.click ? '5.3em' : '3rem' }; 
height: ${props => props.click ? '0px' : '6px' };
background: white;
color:white;
position: absolute;
transition: all 0.2s ease;
left: 50%;
transform: ${props => props.click ? '' : 'translateX(-50%) rotate(0)'};
display: flex;
justify-content: center;
align-items:center;
border-radius: 55px;

cursor: pointer;
display: none;

@media (max-width: 80em){
  display:flex;
}

&::after, &::before{
  content: ' ';
  width: ${props => props.click ? '4rem' : '3rem' };
  height: ${props => props.click ? '10px' : '6px' };
  right: ${props => props.click ? '25%' : '0rem' };
  background: white;
  border-radius: 55px;
  position: absolute;
}

&::after{
  top: ${props => props.click ? '-0.3rem' : '1rem' };
  transform: ${props => props.click ? ' rotate(-45deg)' : 'rotate(0)'};
  color:red;
}

&::before{
  bottom: ${props => props.click ? '-0.3rem' : '1rem' };
  transform: ${props => props.click ? ' rotate(45deg)' : 'rotate(0)'};
}
`
const Twitter = styled.img`
width:22px;
height:22px;
margin:1rem;

`
const Telegram = styled.img`
width:22px;
height:22px;
margin-left:12%;
margin:1rem;

`
 
const Navigation = () => { 
  const {isConnected} = useAccount();

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

const [fix, setFix] = useState(false);
let lastScrollY = window.scrollY;

  function setFixed(){
    if(window.scrollY >= 200){

        setFix(true);


    }else{
      setFix(false);
    }

    lastScrollY = window.scrollY;

  }

window.addEventListener('scroll', setFixed);

const [showWarning, setShowWarning] = useState(false);

const warningAnimation = useSpring({
  from: { opacity: 0, transform: 'translateY(-50px)' },
  to: { opacity: showWarning ? 1 : 0, transform: showWarning ? 'translateY(0)' : 'translateY(-50px)' },
});
  
  return (

    <Section className={fix? 'navbar fixed ': 'navbar'}>
      <Navbar>

      <Logo />
      
      <HamburgerContainer click={click} onClick={() => setClick(!click)}>
      
        <HamburgerMenu click={click} onClick={() => setClick(!click)}>
          
        </HamburgerMenu>
        </HamburgerContainer>

        <Menu click={click}>
          
          <MenuItem onClick={()=> scrollTo('about')}>About</MenuItem>
          <MenuItem onClick={()=> scrollTo('roadmap')}>RoadMap</MenuItem>
          <MenuItem onClick={()=> scrollTo('games')}>Games</MenuItem>
          <MenuItem onClick={()=> scrollTo('mint')}>Mint</MenuItem>
          <MenuItem onClick={()=> scrollTo('team')}>Team</MenuItem>
          <MenuItem onClick={()=> scrollTo('faq')}>Faq</MenuItem>

          <MenuItem><a href="https://gbcc-deployer.gitbook.io/game-boyz-color-club-whitepaper/" >Whitepaper</a></MenuItem>



          <MobileVisibility><ConnectButton showBalance={false}/></MobileVisibility>

        </Menu>
        

        <DesktopVisibility><ConnectButton showBalance={false}/></DesktopVisibility>

        

      </Navbar>

    </Section>
      
  )
}

export default Navigation