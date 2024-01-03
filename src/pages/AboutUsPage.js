import React from "react";
import { Carousel } from "../components/Carousel/Carousel.jsx"

import { CarouselWrapper } from "../styles/Elements.styled.jsx";

export default function AboutUsPage () { 
  return (  
  <div>
    <h2>About Us</h2>
    <h3> We can help u to create your phone book of contacts</h3>
    <p> This App is suitable for both large corpotations and personal use. </p>
    <CarouselWrapper>
      <Carousel/>
    </CarouselWrapper>
  </div>)
};
