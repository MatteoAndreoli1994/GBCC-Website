
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Trattini from '../../assets/elements/trattini_verticali.png'

import RoadmapImage from"../../assets/elements/roadmap.png"


import { animated, useSpring } from 'react-spring';
const Section = styled.section`
min-height: 40vh;
color: white;
display: flex;
overflow: hidden;
justify-content:center;


`

const Container = styled.div`

width: 80%;
display: flex;
flex-direction: column;
margin:2rem;

align-items:center;
@media (max-width: 64em){
  width: 90%;
}

`
const Levelling = styled.div`


width:50%;


display:flex;
flex-direction:row;
flex-direction:column;
margin:4%;
align-items:center;

box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
border-radius: 25px;

@media (max-width: 40em){
  margin:8%;
  width:100%;

}
`

const Games = styled.div`


width:100%;
height:50%;
display:flex;
flex-direction:row;
align-items:center;
justify-content:center;

@media (max-width: 40em){
flex-direction:column;

}

`
const Gamblero = styled.div`


width:45%;
height:90%;

display:flex;
flex-direction:row;
flex-direction:column;
margin:4%;
align-items:center;

box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
border-radius: 25px;

@media (max-width: 40em){
  width:100%;

}
`
const GameBoyzRoom = styled.div`

width:45%;
height:90%;

display:flex;
flex-direction:row;
flex-direction:column;
margin:4%;
align-items:center;

box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
border-radius: 25px;

@media (max-width: 40em){
  width:100%;

}

`
const Title = styled.h1`
font-size: 25px;
font-weight: 800;
color: #5700EF;
justify-content: center;
text-align: center;
margin-bottom: 1rem;

@media (max-width: 30em){
  margin-bottom: 0.5rem;

}

`

const Title3 = styled.h2`
font-size: 20px;


font-weight: 900;
width: 100%;
display:flex;


color:white;
font-size: 24px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 500;

@media (max-width: 80em){
font-size: 20px;


}
@media (max-width: 64em){
font-size: 20px;

}

@media (max-width: 48em){
font-size: 18px;

}



`
const Btn2 = styled.div`

display: inline-block;


outline: none;
border: none;
font-size: 14px;
font-family: 'Space Grotesk', sans-serif;
color: white;
justify-content: center;
text-align: center;


padding: 0.6rem 1rem;
border-radius: 10px;
cursor: pointer;
transition: all 0.2s ease;
position: relative;
box-shadow: 0 0 10px rgba(0,0,0,0.1);
margin:10px;
background-color:#7D1D3F;
&:hover{
transform: scale(1.05);
box-shadow: 0 0 20px rgba(0,0,0,0.4);

}

@media (max-width: 40em){
display: none;

}
`
const SubTitle = styled.h1`

font-size: 56px;
font-weight: 900;
margin-bottom:1%;
color: white;
justify-content: center;
text-align: center;

@media (max-width: 64em){
  font-size: 40px;
}

@media (max-width: 40em){
  font-size: 38px;
}

@media (max-width: 36em){
  font-size: 35px;

}

@media (max-width: 20em){
  text-align: center;
  font-size: 30px;
  
}
`
const SubText = styled.p`

line-height: 1.5;
font-size: 24px;
font-weight: 400;
color: #E4E3E3;
align-self: flex-start;
width: 80%;
margin: 1rem auto;



@media (max-width: 64em){
  font-size: 20px;
  text-align:center;
}
@media (max-width: 40em){


  width: 90%;
  text-align:center;

  font-size: 13px;
}
@media (max-width: 20em){
  width: 100%;
  text-align:center;
  font-size: 10px;

}
`


const SubTitle2 = styled.h1`
line-height: 1;
font-size: 33px;
font-weight: 800;



margin: 6%;
justify-content: center;
align-items: center;
text-align: center;

@media (max-width: 64em){
  font-size: 25px;
  
}

@media (max-width: 40em){
  font-size: 17px;
  margin-bottom: 1%;
}

@media (max-width: 36em){
  font-size: 17px;

}
`
const ContainerVignette = styled.div`
min-height: 120vh;
width: 90%;
display: flex;
margin:3%;

flex-direction: column;
overflow: hidden;

@media (max-width: 64em){
  width: 100%;
}



`
const Vignette = styled.div`
min-height:10%;
display: flex;
justify-content: center;
align-items: top;
flex-direction: row;
overflow: hidden;
border-radius: 10px;

`
const ContenutoVignetta = styled.div`

margin:1rem;
min-height: 20vh;
width: 50%;
display: flex;
flex-direction: column;
align-elements;


display:flex;


@media (max-width: 36em){
  height: auto;
}
`
const DivTrattini = styled.div`
background-color:white;
width:10px;
height:30px;

align-self: center;
margin:4%;

justify-self: center;

@media (max-width: 30em){
  width: 8px;

}
`


const ContenutoVignettaData = styled.div`

margin-top:1rem;
margin-left:1rem;
margin-right:1rem;

min-height: 20vh;
width: 50%;
display: flex;
flex-direction: column;



@media (max-width: 36em){
  height: auto;
}
`
const ContainerTrattini = styled.div`
margin:1rem;

width:100%;
height:75%;
display:flex;
justify-content: center;
align-self: center;
flex-direction: column;
`
const Data = styled.div`

border-radius: 10px;
display: flex;
justify-content: center;
align-items: center;
height: 40px;
width: 12vw;
align-self:center;

background-color:#5700EF;
display: flex;


@media (max-width: 64em){
  width: 18vw;

}

@media (max-width: 40em){
  width: 22vw;

}

@media (max-width: 36em){
  width: 25vw;
 
}
@media (max-width: 20em){
  width: 25vw;
  height: 35px;
}
`
const DataText = styled.h1`

font-size: 16px;
font-family: 'Archivo', sans-serif;
color: white;
justify-content: center;
text-align: center;
font-weight: 700;
margin:3%;

@media (max-width: 36em){
  font-size: 14px;

}
`
const ObbiettivoText = styled.h1`

font-size: 33px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 500;

color: white;
justify-content: left;
margin-bottom:1rem;
font-weight: 700;

@media (max-width: 64em){
  font-size: 25px;
  
}
@media (max-width: 40em){
  font-size: 20px;

}
@media (max-width: 30em){
  font-size: 18px;
  margin-bottom:0.2rem;
}
@media (max-width: 20em){
  font-size: 15px;
  margin-bottom:0.2rem;
}
`
const DescrizioneText = styled.h1`

font-size: 19px;
font-family: 'Archivo', sans-serif;
font-weight: 400;

color: #E4E3E3;

@media (max-width: 64em){
  font-size: 14px;
}
@media (max-width: 40em){
  font-size: 13px;
}

@media (max-width: 20em){
  font-size: 11px;
}
`
const GreenDot = styled.h6`
margin:1%;
font-size:15px;
color: #48fb47;
text-shadow:
  0 0 7px #48fb47,
  0 0 10px #48fb47,
  0 0 21px #48fb47,
  0 0 42px #48fb47,
  0 0 82px #48fb47,
  0 0 92px #48fb47,
  0 0 102px #48fb47,
  0 0 151px #48fb47;

display:flex;

@media (max-width: 30em){
  font-size:12px;
  margin-top: -83%;
  margin-left: -65.46%;

  }

`

const Map = styled.img`
width:110%;

@media (max-width: 30em){
  width:115%;

  }

`
const MenuItemGames = styled.div`

margin:0 2rem;
color: white;
cursor: pointer;
font-family: "Custom-Archivo-Bold";
font-weight: 400;
font-size: 14px;

margin: 2%;
`
const DivBtn2 = styled.div`

width:100%;
display:flex;

align-items:center;
justify-content:center;
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

  position:relative;
  left: 0;
  right: 0;
  margin: 2%;
  background-color: #FFCC00;
  color: #333333;
  border: 1px solid #333333;
  border-radius: 5px;
  padding: 10px;
  font-weight: bold;
  font-size: 1.2rem;
`;


const Roadmap = () => {
    useEffect(()=> {
      Aos.init({duration: 2000});
    }, []);
    const [showWarning, setShowWarning] = useState(false);

    const warningAnimation = useSpring({
      from: { opacity: 0, transform: 'translateY(0px)' },
      to: { opacity: showWarning ? 1 : 0, transform: showWarning ? 'translateY(0px)' : 'translateY(0px)' },
    });

  return (
    <>
    <Section id="roadmap">
      <Container>
 
        <Map src={RoadmapImage}/>
       </Container>


    </Section>
    <Section id="games">
      <Container>
        <Title>
          GAMES
        </Title>
        
        <SubTitle>Stake & Play</SubTitle>
          <Levelling>
            <SubTitle2>Levelling</SubTitle2>
            <SubText>Each GBCC comes with a special trait, the “Level”. The Level is a fundamental part of this project and our staking system.
            Even common GBCC can become great by levelling:
            It will affect both Gambero and Game Boyz Room, giving the possibility to receive some privileges with the achievement of certain levels. 

            </SubText>

          </Levelling>

          <Games>

            <Gamblero><SubTitle2>Gamblero</SubTitle2>
            <SubText>Gamblero consists of a series of casino-inspired games, where you can try your luck and win BNB or NFT from other collections. Those NFT can be collected, sold or used in the Game Boyz Room.
            </SubText>
            </Gamblero>

            <GameBoyzRoom><SubTitle2>GBCC HUB</SubTitle2>
            <SubText>
            Inside the Gbcc Hub you can play various mini-games of different kinds where you can have fun while earning rewards, with weekly and monthly tournaments. Those games will use other BSC collection as character and asset. Combine them with GBCCs to find the best strategy!
            </SubText>
            </GameBoyzRoom>
            
            
          </Games>


       </Container>


    </Section>
    </>
    
  )
}

export default Roadmap