import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Max from "../images/max.jpg";

const Div = styled.div``;
const Wrapper = styled.div`
  display: flex;
  gap: 50px;
`;
const Image = styled.img`
  width: 700px;
  height: 400px;
  object-fit: cover;
`;
const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;
const Title = styled.h1`
  color: orange;
`;
const Price = styled.h4`
  margin: 0px 0px;
`;
const Description = styled.p`
  margin-top: 15px;
  color: black;
`;
const BtnContainer = styled.div`
  display: flex;
  /* justify-content: center; */
  align-items: center;
  text-align: center;
  gap: 0px;
  margin-top: 50px;
  margin-top: 40px;
`;

const CartBtn = styled.button`
  background-color: orange;
  height: 30px;
  padding: 10px;
  border: none;
  margin-left: 50px;
  font-weight: 700;
  cursor: pointer;
`;

const Remove = styled.div`
  height: 20px;
  width: 20px;
  text-align: center;
  margin: 0px 10px;
  border: 1px solid orange;
  cursor: pointer;
`;
const Add = styled(Remove)``;

const SingleDish = () => {
  const [quantity, setQuantity] = useState(1);
  //Incrementing and decrementing a quantity in the cart
  const setItemQuantity = (operation) => {
    if (operation === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Div>
        <Wrapper>
          <Image src={Max} />
          <DescContainer>
            <Title> Hawayian Pizza</Title>
            <Price>$ 13</Price>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              voluptate adipisci velit rem doloribus, laborum dicta sapiente
              perferendis molestias nobis corporis vel delectus animi earum
              totam, fugiat at cumque. Adipisci?
            </Description>
            <BtnContainer>
              <Remove onClick={() => setItemQuantity("dec")}>-</Remove>
              {quantity}
              <Add onClick={() => setItemQuantity("inc")}>+</Add>
              <CartBtn>Add to Cart</CartBtn>
            </BtnContainer>
          </DescContainer>
        </Wrapper>
      </Div>
      <Footer />
    </>
  );
};

export default SingleDish;
