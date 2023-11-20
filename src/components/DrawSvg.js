import React from 'react'
import styled from 'styled-components'
import Vector from "./Icon/Vector"

const VectorContainer = styled.div`

position: absolute;
top: 0 rem;
left: 50%;

justify-content: center;
height: 100%;
overflow: hidden;

svg{
    width: 100%;
    heigh: 100%;
}
`

const DrawSvg = () => {
  return (
    <VectorContainer><Vector/></VectorContainer>
  )
}

export default DrawSvg