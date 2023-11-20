import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
margin-left:1rem;
display: inline-block;
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

padding: 0.9rem 2.3rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;

&:hover{
    transform: scale(0.95);
}
&::after{
    content:' ';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    
    width: 100%;
    height: 100%;
    
    transition: all 0.2s ease;

}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: 0.3rem;
}

@media (max-width: 25em){
  transform: scale(0.75);
  }
`


export const Button = ({text, link}) => {


  return (
    <Btn>
      <a href={link} aria-label={text} target="_blank" rel="noreferrer">
      {text}
      
      </a>

    </Btn>
  )
}

export default Button
