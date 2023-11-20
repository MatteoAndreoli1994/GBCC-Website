import React from 'react'
import styled from 'styled-components'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/effect-cards";
import "swiper/css/pagination"
import "swiper/css/navigation"
import MyVideo from "../assets/elements/trailer.mp4"
import { Pagination, Navigation, Autoplay, EffectCards, EffectFade } from "swiper";
import Trailer from "../assets/elements/trailer.mp4"


const Container = styled.div`
width: 100%;
height: 50%;

align-items:center;
justify-content:center;
display:flex;

@media (max-width: 64em){
  width: 90%;
  height: 90%;
  margin-bottom:1rem;
}

@media (max-width: 40em){
  width: 100%;
  height: 100%;
  margin-bottom:1rem;
}

.video-responsive {
  overflow: hidden;
  padding-bottom: 56.25%;
  position: relative;
  height: 0;
}

.video-responsive iframe {
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  position: absolute;
}






`



const Carousel = () => {
  return (
    <Container>

<video src={Trailer}   width="100%"
        height="100%" controls="controls" autoplay="true" />
  
  </Container>
  )
}

export default Carousel