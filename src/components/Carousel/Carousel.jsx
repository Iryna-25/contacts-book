import React, { useState } from "react";
import { CarouselItem } from "./CarouselItem";

import { 
  CarouselContainer, 
  CarouselInner, 
  CarouselButtons, 
  ButtonArrow,
  Indicators,
  IndicatorButtons } from "../../styles/Elements.styled";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = [
    {
      title: "Author1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis soluta animi sequi asperiores mollitia eaque eveniet tenetur facilis aspernatur.",
      icon: require("../../assets/photo1.jpg"),
    },
    {
      title: "Author2",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates nobis soluta animi sequi asperiores mollitia eaque eveniet tenetur facilis aspernatur.",
        icon: require("../../assets/photo2.jpg"),
    },
    {
      title: "Author3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nobis soluta animi sequi asperiores mollitia eaque eveniet tenetur facilis aspernatur. Officiis, cum!",
      icon: require("../../assets/photo3.jpg"),
    },
  ];
  
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= items.length) {
      newIndex = items.length - 1;
    }

    setActiveIndex(newIndex);
  };
  return (
    <CarouselContainer>
      <CarouselInner style={{ transform: `translate(-${activeIndex * 100}%)`}}>
        {items.map((item) => {
          return <CarouselItem item={item} width={"100%"} />;
        })}
      </CarouselInner>

      <CarouselButtons>
        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <span class="material-symbols-outlined"><i class="ri-arrow-left-s-line"></i></span>{" "}
        </ButtonArrow>

        <Indicators>
          {items.map((item, index) => {
            return (
              <IndicatorButtons

                onClick={() => {
                  updateIndex(index);
                }}
              >
                <span
                  className={`material-symbols-outlined ${
                    index === activeIndex
                      ? "indicator-symbol-active"
                      : "indicator-symbol"
                  }`}
                >
                  <i class="ri-checkbox-blank-circle-fill"></i>
                </span>
              </IndicatorButtons>
            );
          })}
        </Indicators>
        <ButtonArrow
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <span class="material-symbols-outlined"><i class="ri-arrow-right-s-line"></i></span>
        </ButtonArrow>
      </CarouselButtons>
    </CarouselContainer>
  );
};