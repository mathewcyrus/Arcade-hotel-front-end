import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";

import Dish from "../components/Dish";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import useFetch from "../hooks/fetchMethod";

const Div = styled.div`
  /* background-color: #0f0c0a; */
  /* color: white; */
  margin-bottom: 20px;
  position: relative;
`;

const Wrapper = styled.div`
  margin: 0px 80px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const Info = styled.h1`
  margin-top: -5px;
  text-align: center;
  font-size: 40px;
  /* color: white; */
`;
const OrderText = styled.h3`
  /* color: white; */
  text-align: center;
  margin-top: -15px;
`;
const Span = styled.span`
  color: orange;
`;
const CategoryContainer = styled.div``;
const FoodWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin-top: -5px;
  max-width: 1366px;
  gap: 10px;
  position: relative;
`;

const Dishes = () => {
  //fETCHING DISHES FROM DB
  const { data, error, loading } = useFetch("http://localhost:8800/api/dishes");
  console.log(data);
  return (
    <>
      <Div>
        <Navbar type="dishes" />
        <Navbar2 />
        {/* <CarouselItem /> */}
        <Wrapper>
          <InfoContainer>
            <Info>
              Enjoy exclusive<Span> Meals </Span>prepared by the best
              <Span> Award winning </Span>chefs and
              <Span> Worldwide collection of food varieties.</Span>
            </Info>
            <OrderText>
              From the convenience of your home by
              <Span> Ordering Online </Span> or visit us at our
              <Link>
                <Span> Restaurants.</Span>
              </Link>
            </OrderText>
          </InfoContainer>
          <CategoryContainer>
            <FoodWrapper>
              {data.map((meal) => (
                <Dish meal={meal} key={meal._id} />
              ))}
            </FoodWrapper>
          </CategoryContainer>
        </Wrapper>
        <Outlet />
      </Div>

      <Footer />
    </>
  );
};

export default Dishes;
