import React from "react";
import styled from "styled-components";
import Dish from "./Dish";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
const Wrapper = styled.div`
  border-top: 1px solid lightgray;
  border-right: 1px solid lightgray;
  border-top-right-radius: 5px;
  margin-top: -15px;
  display: flex;
  position: relative;
`;

const NextIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  top: 125px;
  color: orange;
  border-radius: 50%;
  right: -20px;
  background-color: white;
`;
const FoodWrapper = () => {
  return (
    <Wrapper>
      <NextIcon>
        <ChevronRightIcon className="icon" />
      </NextIcon>
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </Wrapper>
  );
};

export default FoodWrapper;
