import React, { useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Logo from "./Logo";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { FaTwitter, FaTelegramPlane } from 'react-icons/fa'; 

import MobileMenuContent from '../components/sections/Menumobile';
import CustomConnectButton from '../components/sections/CustomConnectButton';

const Section = styled.nav`
  width: 100vw;
  height: 13vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;

    pointer-events: auto; /* Assicura che la navbar non blocchi lo scrolling */
`;

const Navbar = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 3%;
  height: ${props => props.theme.navHeight};

  @media (max-width: 40em) {
    width: 90%;
  }
`;

const Menu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.5px;

  background-color: transparent;
  z-index: 800;

  @media (max-width: 60em) {
    display: none;
  }
`;

const MenuItem = styled.li`
  margin: 0 1rem;
  color: white;
  cursor: pointer;
  padding: 12px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  letter-spacing: 1.5px;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const SocialMenuItem = styled(MenuItem)`
  position: relative;
  display: flex;
  align-items: center;
  gap: 4px;

  &::after {
    content: "▼";
    font-size: 8px;
    margin-left: 4px;
    transition: transform 0.3s ease;
  }

  ${props => props.show && `
    &::after {
      transform: rotate(180deg);
    }
  `}
`;

const SocialDropdown = styled.div`
  position: absolute;
  top: 140%;
  left: 50%;
  transform: translateX(-50%);
  background: white;
  border-radius: 12px;
  padding-top: 8px;
  padding-bottom: 8px;
  display: ${props => props.show ? 'flex' : 'none'};
  flex-direction: column;

  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  min-width: 180px;

  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    padding: 8px 16px;
    border-radius: 8px;
    transition: background-color 0.2s ease, opacity 0.3s ease, margin 0.3s ease;
    letter-spacing: 1.5px;
    margin-left: 5%;
    margin-right: 5%;

    &:hover {
      background: #f5f5f5;
      opacity: 0.8;
    }

    img {
      width: 20px;
      height: 20px;
      margin-right: 12px;
      filter: brightness(0) invert(1);
    }
  }
`;

const HamburgerContainer = styled.div`
  width: 40px;
  height: 40px;
  position: relative;
  cursor: pointer;
  display: none;
  z-index: 999;

  @media (max-width: 60em) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const HamburgerMenu = styled.span`
  width: 24px;
  height: 2px;
  background: ${props => props.click ? 'black' : 'white'};
  position: absolute;
  transition: all 0.3s ease;
  transform: ${props => props.click ? 'rotate(45deg)' : 'rotate(0)'};

  &::before, &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 2px;
    background: ${props => props.click ? 'black' : 'white'};
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${props => props.click ? 'rotate(90deg)' : 'translateY(-8px)'};
  }

  &::after {
    transform: ${props => props.click ? 'rotate(90deg)' : 'translateY(8px)'};
  }
`;

const DesktopVisibility = styled.div`
  @media (max-width: 60em) {
    display: none;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 200;

  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: inset 0 0 10px rgba(255, 255, 255, 0.2);
`;

const MobileVisibility = styled.div`
  display: none;
  @media (max-width: 40em) {
    display: block;
    margin-top: 2rem;
  }
`;

const Social = styled.h3`
  margin-left: 20px;
`;

const Navigation = () => {
  const [click, setClick] = useState(false);
  const [showSocialDropdown, setShowSocialDropdown] = useState(false);

  const socialDropdownRef = useRef(null);
  const menuRef = useRef(null);

  const [scrolling, setScrolling] = useState(false);
  const timeoutRef = useRef(null); // Create a ref for the timeout
  
  // Media query breakpoint (should match the CSS breakpoint)
  const desktopBreakpoint = 60; // 60em

  const scrollTo = (id) => {
    let element = document.getElementById(id);
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
    setClick(false);
  };

  // Add resize event listener to check for screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Convert em to pixels (assuming 1em = 16px)
      const emToPx = 16;
      const breakpointPx = desktopBreakpoint * emToPx;
      
      // If window width is greater than our breakpoint, close mobile menu
      if (window.innerWidth > breakpointPx && click) {
        setClick(false);
      }
    };

    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [click]); // Only re-run if click state changes

  // Monitor scroll events
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true); // Set scrolling state when scrolling happens
    };

    const handleClickOutside = (event) => {
      if (socialDropdownRef.current && !socialDropdownRef.current.contains(event.target) && !menuRef.current.contains(event.target)) {
        setShowSocialDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // Delay the dropdown close if scrolling happens
    if (scrolling) {
      // Set a timeout to close dropdown after 500ms of no scrolling
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setShowSocialDropdown(false);
      }, 500); // Wait for 500ms after scrolling before closing dropdown
    }

    // Cleanup the timeout on unmount or scrolling change
    return () => {
      clearTimeout(timeoutRef.current); // Cleanup the timeout
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling]);

  return (
    <Section>
      <Navbar>
        <Logo style={{ zIndex: 9999 }} />
        <Menu ref={menuRef}>
          <MenuItem onClick={() => scrollTo('about')}>ABOUT</MenuItem>
          <MenuItem onClick={() => scrollTo('token')}>$GBCC</MenuItem>
          <SocialMenuItem 
            onClick={() => setShowSocialDropdown(!showSocialDropdown)}
            show={showSocialDropdown}
          >
            SOCIALS
            <SocialDropdown ref={socialDropdownRef} show={showSocialDropdown}>
              <a href="https://x.com/GBCCNFT" target="_blank" rel="noopener noreferrer">
                <FaTwitter style={{ color: 'black', fontSize: 'larger' }} />
                <Social>X.COM</Social>
              </a>
              <a href="https://t.me/GBCCNFT" target="_blank" rel="noopener noreferrer">
                <FaTelegramPlane style={{ color: 'black', fontSize: 'larger' }} />
                <Social>TELEGRAM</Social>
              </a>
            </SocialDropdown>
          </SocialMenuItem>
          <MobileVisibility>
            <ConnectButton showBalance={false} />
          </MobileVisibility>
        </Menu>

        {click && (
          <MobileMenu>
            <MobileMenuContent 
              onClose={() => setClick(false)} // Close when user clicks outside or close button
              onNavigate={(id) => {
                scrollTo(id); // Scroll to section
                setClick(false); // Close menu
              }}
            />
          </MobileMenu>
        )}


        <DesktopVisibility>
          <CustomConnectButton />
        </DesktopVisibility>

        <HamburgerContainer onClick={() => setClick(!click)}>
          <HamburgerMenu click={click} />
        </HamburgerContainer>
      </Navbar>
    </Section>
  );
};

export default Navigation;