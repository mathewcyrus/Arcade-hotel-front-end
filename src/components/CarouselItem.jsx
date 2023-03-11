import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";
import luis from "../images/luis.jpg";
import pavel from "../images/pavel.jpg";
import adam from "../images/adam.jpg";
import rezha from "../images/rezha.jpg";

// const Carousel = styled.div`
//     height: 100px;

// `;

const Div = styled.div`
  margin-top: 50px;
  z-index: -1;
`;

const Img = styled.img`
  height: 380px;
  width: 100vw;
  object-fit: cover;
  z-index: -1;
`;

const CarouselItem = () => {
  const Images = [
    {
      id: 1,
      src: rezha,
    },
    {
      id: 2,
      src: luis,
    },
    {
      id: 3,
      src: pavel,
    },
    {
      id: 4,
      src: adam,
    },
  ];
  return (
    <Div>
      <Carousel interval={5000}>
        {Images.map((Image, i) => (
          <Img src={Image.src} key={i} />
        ))}
      </Carousel>
    </Div>
  );
};

export default CarouselItem;
