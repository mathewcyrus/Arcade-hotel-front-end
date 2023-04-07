import React from "react";
import styled from "styled-components";
import Carousel from "react-material-ui-carousel";

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
      src: "https://res.cloudinary.com/dt75zlucp/image/upload/v1678725482/Arcade%20Hotel/alexander-kovacs-spZexiKfZTs-unsplash_cahv4y.jpg",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/dt75zlucp/image/upload/v1678724936/Arcade%20Hotel/rezha-ramadhan-sV8M_Lkg60Y-unsplash_z68qtc.jpg",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/dt75zlucp/image/upload/v1678719134/Arcade%20Hotel/point3d-commercial-imaging-ltd-5BV56SdvLmo-unsplash_t6vt9c.jpg",
    },
    {
      id: 4,
      src: "https://res.cloudinary.com/dt75zlucp/image/upload/v1678726536/Arcade%20Hotel/michael-weidemann-oGhTfu1UrOY-unsplash_dap8ev.jpg",
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
