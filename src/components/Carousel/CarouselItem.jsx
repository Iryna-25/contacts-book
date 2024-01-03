import React from "react";
import { CarouselItemContainer, CarouselImg, CarouselItemText} from "../../styles/Elements.styled";

export const CarouselItem = ({ item }) => {
  return (
    <CarouselItemContainer >
      <div></div>
      <CarouselImg src={item.icon} />
      <CarouselItemText>{item.description}</CarouselItemText>
    </CarouselItemContainer>
  );
};