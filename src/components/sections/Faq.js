import React from 'react'
import styled from 'styled-components'
import Accordion from "../Accordion"

const Section = styled.section`
min-height:70vh;
width:100vw;
display: flex;
align-items:center;
flex-direction: column;

overflow:hidden;



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
const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center; 

@media (max-width: 36em){
  margin: 0rem auto;
  width: 90%;
}

`
const Box  = styled.div`
width: 45%;
color: white;



`
const TextRisposta = styled.h1`
line-height: 1.5;
font-size: 20px;
font-weight: 400;

align-self: flex-start;
width: 100%;

font-weight: 400;
color: #E4E3E3;

@media (max-width: 64em){
  font-size: 15px;
}

@media (max-width: 40em){
  font-size: 14px;
}

@media (max-width: 36em){
  width: 100%;
  font-size: 13px;
  line-height: 1.4;
}
`
const Faq = () => {
  return (
    <Section id="faq">
      <Title>FAQ</Title>
      <SubTitle>Popular answered questions</SubTitle>
      <Container>
        <Box>
          <Accordion title="Wen?" > <TextRisposta>Private mint: 3rd June<br></br>Public mint: 5th June</TextRisposta> </Accordion>
          <Accordion title="How to get the whitelist?" > <TextRisposta>The Whitelist spots can be obtained through the different activities on our Social media channels. 
There will be 5 mints for each spot.
</TextRisposta></Accordion>
          <Accordion title="What are the utilities or privileges for holder?" > <TextRisposta>Holders will benefit from this collection by participating to the mint giveaway, reward system and the early access to our future collections and secret projects.</TextRisposta></Accordion>
          <Accordion title="Can I also mint from other marketplaces or only from the official gbcc site?" > <TextRisposta>Private mint will occur only on our Official Website or Smartcontract, while the public mint will occur on Rareboard too. 
</TextRisposta></Accordion>

<Accordion title="What's the Contract address" > <TextRisposta>0xC905F638914EaAe6A157CCa89341D888289F47b9</TextRisposta> </Accordion>
        </Box>

        <Box>
          <Accordion title="How much does it cost to mint GBCCs?" > <TextRisposta>Private mint: 0.04 BNB <br></br> Public mint: 0.06 BNB</TextRisposta> </Accordion>
          <Accordion title="How Giveaway Minting Process works?" > <TextRisposta>When a certain number of mints is reached, holders will have the chance to win great prizes in this way:
<br></br><br></br>
          <b>25% of the total supply:</b> <br></br>
            Total of 1BNB IN NFTS 
            <br></br>
            <b>50% of the total supply:</b> <br></br>
            Total of 3BNB IN NFTS
            <br></br>
            <b>75% of the total supply:</b> <br></br>
            Total of 6BNB IN NFTS
            <b>100% of the total supply:</b> <br></br>
            Total of 10BNB IN NFTS
            <br></br><br></br>
            Moreover, 1 BNB will be instantly sent to whoever mints the Golden gameboy and 0.5 BNB to whoever mints the Ghost one. If you mint early, you will have access to all the giveaway. Hurry up!
</TextRisposta> </Accordion>
          <Accordion title="How the reward system works?" > <TextRisposta>We will release our first game with a rewards system that will reward monthly our loyal holders or avid gamers. You can try your luck in Gambero or experience the competition in the Game Boyz Room.</TextRisposta> </Accordion>
          <Accordion title="Where can i play minigames?" > <TextRisposta>Games are mainly developed to work via browser, however we intend to expand some services and minigames to work directly on telegram.</TextRisposta> </Accordion>
          <Accordion title="Will the level be visible only in the GBCC ecosystem or also in the various marketplaces?" > <TextRisposta>Level is an attribute stored in each GBCC metadata and it will be updated in real time so it will automatically be visible in all marketplaces.
</TextRisposta></Accordion>
        </Box>
      </Container>
    </Section>
  )
}

export default Faq