
import React, { useEffect } from 'react'
import styled from 'styled-components'
import DrawSvg from '../DrawSvg'
import Image from "../../assets/background/night.png"
import Vignetta from "../../assets/elements/Vignetta.png"
import Aos from 'aos'
import 'aos/dist/aos.css'
import Trattini from '../../assets/elements/trattini_verticali.png'
const Section = styled.section`
min-height: 130vh;
color: white;
display: flex;
overflow: hidden;
justify-content:center;

`

const Container = styled.div`

width: 80%;
display: flex;
flex-direction: column;


align-items:center;
@media (max-width: 64em){
  width: 90%;
}
`
const Title = styled.h1`
font-size: 16px;
font-family: 'Archivo', sans-serif;
color: #5700EF;
justify-content: center;
text-align: center;
margin-bottom: 1rem;

@media (max-width: 30em){
  margin-bottom: 0.5rem;

}

`
const SubTitle = styled.h1`
font-size: 56px;
font-family: 'Custom-SpaceGrotesk-Bold';
font-weight: 600;
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
const SubTitle2 = styled.h1`
font-size: 21px;
font-family: 'Archivo', sans-serif;
font-weight: 500;
color: white;

margin-bottom: 2rem;
justify-content: center;
align-items: center;
text-align: center;

@media (max-width: 64em){
  font-size: 18px;
}

@media (max-width: 40em){
  font-size: 17px;
}

@media (max-width: 36em){
  font-size: 17px;
  margin-bottom: 1rem;

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


const Roadmap = () => {
    useEffect(()=> {
      Aos.init({duration: 2000});
    }, []);

  return (
    <Section id="roadmap">
      <Container>
        <Title> OUR GOALS </Title>
        <SubTitle>Roadmap</SubTitle>
        <SubTitle2>It's not just art. We intend to give you an immersive gaming experience.</SubTitle2>
        <ContainerVignette>

            <Vignette>

              <ContenutoVignettaData>
                <Data>
                  <DataText>Jan 2023</DataText>
                </Data>
              <ContainerTrattini>
                <DivTrattini></DivTrattini><DivTrattini></DivTrattini>
              </ContainerTrattini>
              </ContenutoVignettaData>

              <ContenutoVignetta>
                <ObbiettivoText>Allowlist</ObbiettivoText>
                <DescrizioneText>Early stage of the project on Ethereum blockchain where 20 Whitelist spots were given through giveaways and raffles.</DescrizioneText>
              </ContenutoVignetta>

            </Vignette>

            <Vignette>
            <ContenutoVignettaData>
                <Data>
                  <DataText>Mar 2023</DataText>
                  
                </Data>
                <ContainerTrattini>
                <DivTrattini></DivTrattini><DivTrattini></DivTrattini><DivTrattini></DivTrattini>
              </ContainerTrattini>
              </ContenutoVignettaData>

              <ContenutoVignetta>
                <ObbiettivoText>Whitelist and Community</ObbiettivoText> 
                <DescrizioneText>Project transfer on BNB Chain, 500 Whitelist given out to the public through giveaways, raffles and daily games on our Social Media Channels (Official Website, Telegram, Twitter).</DescrizioneText>
              </ContenutoVignetta>
            </Vignette>

            <Vignette>
            <ContenutoVignettaData>
                <Data>
                  <DataText>TBA</DataText>
                  
                </Data>
                <ContainerTrattini>
                <DivTrattini></DivTrattini><DivTrattini></DivTrattini><DivTrattini></DivTrattini>
              </ContainerTrattini>
              </ContenutoVignettaData>

              <ContenutoVignetta>
                <ObbiettivoText>Mint & Reveal</ObbiettivoText>
                <DescrizioneText>The Minting Stage will be accompanied by many giveaways and prizes for each goal achieved. We will partner with other cool NFT projects trying to expand the community.</DescrizioneText>
              </ContenutoVignetta>
            </Vignette>  

            <Vignette>
            <ContenutoVignettaData>
                <Data>
                  <DataText>TBA </DataText>
                  
                </Data>
                <ContainerTrattini>
                <DivTrattini></DivTrattini><DivTrattini></DivTrattini><DivTrattini></DivTrattini><DivTrattini></DivTrattini>
              </ContainerTrattini>
              </ContenutoVignettaData>
            
              <ContenutoVignetta>
              <td><ObbiettivoText>Gamification </ObbiettivoText></td>
                <DescrizioneText>We will reinvent the concept of gamification by developing rooms with a lot of juicy games where people can play and earn prizes. We will release our first game and our rewards system in which only GBCC holders will be able to participate. Gbcc holders will also be able to directly purchase ownership of these rooms and earn BNB from them.</DescrizioneText>
              </ContenutoVignetta>

              
            </Vignette>

            <Vignette>
            <ContenutoVignettaData>
                <Data>
                  <DataText>TBA</DataText>
                  
                </Data>
                <ContainerTrattini>
                <DivTrattini></DivTrattini>   <DivTrattini></DivTrattini>
              </ContainerTrattini>
              </ContenutoVignettaData>

              <ContenutoVignetta>
                <ObbiettivoText>Roadmap 2.0</ObbiettivoText>
                <DescrizioneText>We have more plans to come, this is just the beginning. In the new roadmap we will announce the next steps that will lead us to have a dedicated marketplace with features never seen before, wich will involve the whole NFT world...</DescrizioneText>
              </ContenutoVignetta>

              
            </Vignette>    

        </ContainerVignette>
      </Container>


    </Section>
  )
}

export default Roadmap