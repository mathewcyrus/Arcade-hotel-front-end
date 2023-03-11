import React from "react";
import styled from "styled-components";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const Buttons = styled.button`
  position: absolute;
  z-index: 1;
  top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  height: 20px;
  padding: 5px;
  width: 80px;
  border: none;
`;
const Button = () => {
  return (
    <Link to="/">
      <Buttons>Home</Buttons>
    </Link>
  );
};

export default Button;
