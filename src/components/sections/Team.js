import React from 'react'
import styled from 'styled-components'
import Woods from "../../assets/background/Woods.png"
import img1 from "../../assets/nfts/NoFlockin.jpg"

import drawn from "../../assets/elements/drawn.jpg"
import NoFlockin from "../../assets/nfts/NoFlockin.png"
import VelvetSofa from "../../assets/nfts/Trap.png"
import TwitterImg from "../../assets/social-media-icons/twitter.png"
import TelegramImg from "../../assets/social-media-icons/Telegram.png"
const Section = styled.section`

width:100vw;
min-height:75vh;

overflow: hidden;
display: flex;
flex-direction: column;
align-items:center;
background-position:center;


@media (max-width: 64em){

justify-content:center;
align-items:center;


}

@media (max-width: 30em){
  min-height:60vh;
  justify-content:center;
  align-items:center;

  }
`
const Title = styled.h1`
font-size: 25px;
font-weight: 800;
color: #5700EF;
justify-content: center;
text-align: center;
margin-bottom: 1rem;
margin-top:3rem;
@media (max-width: 30em){
  margin-bottom: 0.5rem;

}
`
const SubTitle = styled.h1`
font-size: 56px;
font-weight: 900;
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
  font-size: 33px;
}

@media (max-width: 20em){
  text-align: center;
  font-size: 30px;
}
`

const Container= styled.div`
width:75vw;


display:flex;
flex-direction: row;
align-items:center;

margin:5%;

@media (max-width: 64em){
  width:85%;
justify-content:center;
align-items:center;

}
`
const Box= styled.div`
width:50%;
height:80%;

display:flex;
flex-direction: column;
align-items:center;

border-radius: 40px;
margin:1%;

@media (max-width: 36em){

  border-radius: 20px;
}
`

const Matteo= styled.div`
border: solid 5px;
border-color:white;
width:65%;
padding-bottom:65%;
margin-top:5%;
background-size:100% 100%;
background-image: url(${NoFlockin});
background-position:center;
border-radius: 40px;

@media (max-width: 64em){
  width:75%;
  padding-bottom:75%;
}

@media (max-width: 40em){
  width:85%;
  padding-bottom:85%;
}

@media (max-width: 36em){
  width:90%;
  padding-bottom:90%;
  border-radius: 20px;
}
@media (max-width: 20em){
  border: solid 3px;
  border-color:white;
  width:90%;
  padding-bottom:90%;
  border-radius: 20px;
}

`
const Chri= styled.div`
border: solid 5px;
border-color:white;
width:65%;
padding-bottom:65%;
margin-top:5%;
background-size:100% 100%;
background-image: url(${VelvetSofa});
background-position:center;
border-radius: 40px;

@media (max-width: 64em){
  width:75%;
  padding-bottom:75%;
}

@media (max-width: 40em){
  width:85%;
  padding-bottom:85%;
}

@media (max-width: 36em){
  width:90%;
  padding-bottom:90%;
  border-radius: 20px;
}
@media (max-width: 20em){
  border: solid 3px;
  border-color:white;
  width:90%;
  padding-bottom:90%;
  border-radius: 20px;
}

`
const Cards= styled.div`

height:100%;

`
const NameText = styled.h1`
font-size: 42px;

font-weight: 800;
color: white;
justify-content: center;
text-align: center;
margin: 1%;

@media (max-width: 64em){
  font-size: 38px;
}

@media (max-width: 40em){
  font-size: 33px;
}

@media (max-width: 36em){
  font-size: 33px;
}

@media (max-width: 30em){
  font-size: 25px;
}

@media (max-width: 20em){
  font-size: 20px;
}
`
const RoleText = styled.h1`
font-size: 16px;
font-family: 'Archivo', sans-serif;
color: #E4E3E3;
font-weight: 600;
justify-content: center;
text-align: center;
margin-bottom: 6%;
margin-top:1%;
line-height: 1.6;
@media (max-width: 64em){
  font-size: 14px;
}

@media (max-width: 40em){
  font-size: 13px;
}

@media (max-width: 36em){
  font-size: 12px;
}
@media (max-width: 20em){
  font-size: 10px;
}
`
const Item =styled.div`
width: 10em;
height: 18em;
padding: 1em;
color: Black;
background-color: white;
margin: 1%;
position: relative;

border: 4px solid black;
border-radius: 20px;



@media (max-width: 25em){
  width: 6.67em;
  height: 12em;
  }
  @media (max-height: 30em){
    transform: scale(0.8);
    }
    @media (max-height: 25em){
      transform: scale(0.6);
      }

`
const ImageContainer =styled.div`
width:10em;

margin: 0 auto;
border: 3px solid Black;
border-radius: 20px;
cursor: pointer;
background-color: #1F1F1F;
display:flex;
&:hover{
  img{
    transform: translateY(-2rem) scale(1.2);
  }
}

img{
  width: 100%;
  height: 100%;
  border-radius: 18px;
  transition: all 0.3s ease;
}
@media (max-width: 25em){
  width:6.7em;
  }


`
const Name = styled.h2`
font-size: ${props => props.theme.fontlg}
display: flex;
align-items: center;
justify-content: center;
text-transform: uppercase;
color: black;
margin-top: 1rem;
text-align: center;

@media (max-width: 30em){
  font-size: ${props => props.theme.fontmd}
  }

`
const Position = styled.h2`
font-size: ${props => props.theme.fontlg}
display: flex;
text-align: center;
align-items: center;
justify-content: center;
text-transform: capitalize;
color: white;
margin-top: 1rem;
font-weight: 400;
color: ${props => `rgba(${props.theme.textRgba2},0.6)`};

@media (max-width: 30em){
  font-size: ${props => props.theme.fontmd};
  margin-top: 0.5rem;
  }

`
const Twitter = styled.img`
width:35px;
height:35px;

@media (max-width: 64em){
  width:35px;
  height:35px;
}

@media (max-width: 40em){
  width:35px;
  height:35px;
}

@media (max-width: 30em){
width:30px;
height:30px;
}

@media (max-width: 20em){
  width:27px;
  height:27px;
  }

`

const MemberComponent = ({img, name="", position=""}) => {

  return(
    <Item>
      <ImageContainer>
        <img src={img} alt={name}/>
      </ImageContainer>
      <Name>{name}</Name>
      <Position>{position}</Position>
    </Item>
  )

}

const Team = () => {
  return (
    <Section id="team" >
      
      <Title> THE TEAM</Title>
      <SubTitle>Meet the Creators</SubTitle>
      <Container>
        <Box>

            <Matteo></Matteo>
            <NameText>Matteo</NameText>
            <RoleText>
              Founder<br></br>
              Smartcontract Developer<br></br>
              Fullstack Developer
            </RoleText>
            <a href="https://twitter.com/Matteo01273732"><RoleText><Twitter src={TwitterImg}/></RoleText></a>

        </Box>
        <Box>
          <Chri></Chri>
          <NameText>Velvetsofa</NameText>
          <RoleText>Community Manager <br></br>
            Game Director <br></br>
            Dreamer
          </RoleText>
          <a href="https://twitter.com/velvetsofa4" ><RoleText><Twitter src={TwitterImg}/></RoleText></a>
        </Box>

      </Container>
    </Section>
  )
}

export default Team