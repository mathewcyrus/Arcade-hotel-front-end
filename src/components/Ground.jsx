import React, { useState } from "react";
import styled from "styled-components";
import reagan from "../images/reagan.jpg";
import PoolImage from "../images/Poolimage.jpg";
import Form from "./Form";
const Wrapper = styled.div``;
const Div = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 30px;
  height: 430px;
  margin-bottom: 20px;
`;
const GroundCont = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  background-color: whitesmoke;
  height: 460px;
  box-shadow: 5px 10px 10px 0px rgba(204, 201, 204, 1);
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
`;
const GroundImages = styled.div`
  display: flex;
  height: 230px;
`;
const MainImage = styled.div``;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const SideImage = styled.div`
  display: flex;
  flex-direction: column;
  width: 250px;
`;
const Details = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 5px;
`;
const GroundName = styled.div`
  font-size: 24px;
  font-weight: 700;
  width: 90%;
  text-align: center;
  border-bottom: 1px solid lightgray;
`;
const GroundDescription = styled.div`
  text-align: center;
  font-size: 14px;
  margin: 8px 0px 10px 0px;
`;
const RButton = styled.div`
  border: 1px solid lightgray;
  width: 300px;
  text-align: center;
  padding: 5px 0px;
  background-color: orange;
  font-size: 18px;
  font-weight: 700;
  box-shadow: 2px 2px 2px lightgray;
  &:hover {
    background-color: #ffa600df;
    transition: 0.2s ease-in;
    cursor: pointer;
    border-radius: 5px;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: orange;
  flex-direction: column;

  margin: 40px 0px;
`;
const FTitle = styled.div`
  text-align: center;
  font-size: 30px;
  font-weight: 700;
  padding-bottom: 3px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 10px;
  width: 80%;
`;
const FeaturedImages = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`;
const ImageContainer = styled.div`
  position: relative;
  height: 250px;
  width: 22%;
  border-radius: 5px;
  overflow: hidden;
  border-radius: 5px;
  &:hover .Overlay {
    display: block;
    opacity: 1;
    transition: all 3s ease-in-out;
    cursor: pointer;
  }
`;
const Overlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  opacity: o;
  align-items: center;
  justify-content: center;
  background-color: #000000b3;
  top: 0px;
  width: 100%;
  height: 100%;
  display: none;
`;
const FName = styled.div`
  color: orange;
  font-size: 24px;
  font-weight: 700;
  border-bottom: 1.5px solid lightgray;
  width: 100%;
  text-align: center;
`;
const FDescription = styled.div`
  color: white;
  text-align: center;
  font-size: 14px;
  margin-top: 10px;
  padding: 0px 10px;
`;

const Ground = () => {
  const [openForm, setopenForm] = useState(false);
  return (
    <Wrapper>
      {openForm && <Form type="ground" />}

      <Div>
        <GroundCont>
          <GroundImages>
            <MainImage>
              <Image src={reagan} />
            </MainImage>
            <SideImage>
              <Image src={PoolImage} />
              <Image src={PoolImage} />
            </SideImage>
          </GroundImages>
          <Details>
            <GroundName>Savvanah</GroundName>
            <GroundDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              impedit ipsum et corrupti, similique possimus, quo provident eum,
              eius qui quisquam odio officia adipisci dolore nihil! Ad in enim
              voluptates quasi pariatur nam deleniti dolor, eius earum, autem
              hic laboriosam.
            </GroundDescription>
            <RButton onClick={() => setopenForm(!openForm)}>
              Reserrve Ground
            </RButton>
          </Details>
        </GroundCont>
        <GroundCont>
          <GroundImages>
            <MainImage>
              <Image src={reagan} />
            </MainImage>
            <SideImage>
              <Image src={PoolImage} />
              <Image src={PoolImage} />
            </SideImage>
          </GroundImages>
          <Details>
            <GroundName>Savvanah</GroundName>
            <GroundDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              impedit ipsum et corrupti, similique possimus, quo provident eum,
              eius qui quisquam odio officia adipisci dolore nihil! Ad in enim
              voluptates quasi pariatur nam deleniti dolor, eius earum, autem
              hic laboriosam.
            </GroundDescription>
            <RButton onClick={() => setopenForm(!openForm)}>
              Reserrve Ground
            </RButton>
          </Details>
        </GroundCont>
        <GroundCont>
          <GroundImages>
            <MainImage>
              <Image src={reagan} />
            </MainImage>
            <SideImage>
              <Image src={PoolImage} />
              <Image src={PoolImage} />
            </SideImage>
          </GroundImages>
          <Details>
            <GroundName>Savvanah</GroundName>
            <GroundDescription>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta
              impedit ipsum et corrupti, similique possimus, quo provident eum,
              eius qui quisquam odio officia adipisci dolore nihil! Ad in enim
              voluptates quasi pariatur nam deleniti dolor, eius earum, autem
              hic laboriosam.
            </GroundDescription>
            <RButton onClick={() => setopenForm(!openForm)}>
              Reserrve Ground
            </RButton>
          </Details>
        </GroundCont>
      </Div>
      <Features>
        <FTitle>Grounds Features</FTitle>
        <FeaturedImages>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
          <ImageContainer className="container">
            <Image src={PoolImage} />
            <Overlay className="Overlay">
              <FName>Tents</FName>
              <FDescription>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                obcaecati nisi doloribus distinctio corrupti magni ut voluptate
                cum tenetur adipisci dolores est qui quis suscipit minima
                consequatur, corporis assumenda voluptatibus?
              </FDescription>
            </Overlay>
          </ImageContainer>
        </FeaturedImages>
      </Features>
    </Wrapper>
  );
};

export default Ground;
