import React from 'react'
import styled from 'styled-components'
import { useState } from "react";

const Container = styled.div`
cursor:  pointer;
padding: 1rem 0.5rem;
display: flex;
flex-direction: column;
border-bottom: 1px solid ${props => props.theme.carouselColor};
margin: 3rem 0;


@media (max-width: 36em){
  margin: 2rem 0;
}
`
const Title = styled.div`
font-size: ${props => props.theme.fontsm};
display: flex;
justify-content: space-between;
align-item: center;

`
const Reveal = styled.div`
display: ${props => props.clicked ? 'block' : 'none'};
margin-top: 1rem;
color: ${props => `rgba(${props.theme.textRgba}, 0.6)`};
font-size: ${props => props.theme.fontsm};
font-weight: 300;
line-height: 1.1rem;
`
const Name = styled.div`
display: flex;
align-item: center;
`
const Indicator = styled.span`
display: flex;

font-size: 24px;
font-weight: 800;
color: #E4E3E3;
justify-content: center;
align-Items: center;



@media (max-width: 40em){
  font-size: 15px;
}
`
const Span = styled.span`
font-size: 20px;
font-family: 'Archivo', sans-serif;
color: white;
font-weight: 600;
justify-content: center;

margin-bottom: 1rem;



@media (max-width: 36em){
  font-size: 16px;
  margin-bottom: 0rem;
}

@media (max-width: 20em){
  font-size: 13px;
  margin-bottom: 0rem;
}
`
export const Accordion = ({title, children}) => {
    const [collapse, setCollapse] = useState(false)
  return (
    <Container>
        <Title onClick={() => setCollapse(!collapse)}>
            <Name>
            <Span>{title}</Span>
            </Name>
           {
                collapse ?
                <Indicator>-</Indicator> : <Indicator>+</Indicator>
           }
        </Title>

        <Reveal clicked={collapse}>
            {children}
        </Reveal>
    </Container>
  )
}

export default Accordion
