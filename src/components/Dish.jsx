import React from "react";
import { useState } from "react";
import lefteris from "../images/Lefteris.jpg";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  margin: 5px;
  width: 230px;
  height: 320px;
  background-color: whitesmoke;
  box-shadow: 5px 5px 5px lightgray;
  height: max-content;
  border-radius: 5px;
`;
const Container = styled.div`
  height: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  /* margin: 2px; */
`;
const ImageCntainer = styled.div`
  width: 100%;
  height: 170px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
const Description = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  height: max-content;
  margin-top: -8px;
  padding: 10px;
`;
const Button = styled.button`
  color: white;
  height: 40px;
  font-size: 18px;
  width: 100%;
  border: none;
  outline: none;
  position: absolute;
  bottom: 0px;
  /* all: unset; */
  cursor: pointer;
  font-weight: bold;
  background: transparent;
  background-color: orange;
`;
const MealInfo = styled.p`
  text-align: center;
  margin: 15px 0px;
  color: black;
`;
const Price = styled.span`
  margin-top: -10px;
  text-align: center;
  font-weight: bold;
  font-size: 18px;
  color: #f6d604;
`;
const Dish = ({ meal }) => {
  return (
    <>
      <Div>
        <Container>
          <ImageCntainer>
            <Img src={meal.photo} alt="image" />
          </ImageCntainer>
          <Description>
            <MealInfo>{meal.mealname}</MealInfo>
            <Price> $ {meal.price} </Price>
          </Description>
          <Link to={`/Arcade-hotel-meals/${meal._id}`}>
            <Button>Order now!</Button>
          </Link>
        </Container>
      </Div>
    </>
  );
};

export default Dish;
