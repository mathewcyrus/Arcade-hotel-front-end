import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addDish } from "../redux/cartRedux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { dataRequest } from "../hooks/requestMethods";

const SideBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  max-height: 766px;
  position: absolute;
  right: 0px;
  width: 400px;
  color: white;
  background-color: black;
  position: fixed;
  top: 0px;
  border-radius: 20px 0px 0px 0px;
  z-index: 4;
  padding: 10px;
  transition: 1s ease-in-out;
  P {
    font-size: 12px;
    text-align: center;
  }

  & .icon {
    top: 20px;
    color: orange;
    right: 350px;
    position: absolute;
    position: fixed;
    cursor: pointer;
    z-index: 5;
    &:hover {
      color: #ffa600c3;
    }
  }
`;
const Mtitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  /* margin-top: 30px; */
  text-align: center;
`;
const Mimage = styled.div`
  height: 200px;
  width: 80%;
  margin-top: 30px;
  overflow: hidden;
`;
const BtnsDiv = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  gap: 80px;
`;
const IncDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 1px solid orange;
  padding: 3px;
  width: 20px;
  height: 30px;
  font-size: 24px;
  cursor: pointer;
`;
const BtnCont = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  justify-content: center;
`;
const Cart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: black;
  background-color: orange;
  padding: 10px;
  cursor: pointer;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`;
const Mealcard = () => {
  const [dish, setDish] = useState({});
  const [quantity, setQuantity] = useState(1);
  console.log(typeof quantity);
  const dispatch = useDispatch();
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDish = async () => {
      try {
        const res = await dataRequest.get("/dishes/" + id);
        setDish(res.data);
      } catch (error) {}
    };
    fetchDish();
  }, [id]);

  const setItemQuantity = (operation) => {
    if (operation === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };
  const addToCart = () => {
    dispatch(addDish({ ...dish, quantity }));
    navigate(-1);
  };
  return (
    <SideBar>
      <Link to="/Arcade-hotel-meals">
        <CancelIcon className="icon" />
      </Link>
      <Mtitle>{dish.mealname}</Mtitle>
      <Mimage>
        <Img src={dish.photo} />
      </Mimage>
      <p>{dish.description}</p>
      <BtnsDiv>
        <BtnCont>
          <IncDiv onClick={() => setItemQuantity("dec")}>-</IncDiv>
          {quantity}
          <IncDiv onClick={() => setItemQuantity("inc")}>+</IncDiv>
        </BtnCont>
        <Cart onClick={addToCart}>
          <ShoppingCartIcon style={{ color: "black", fontSize: "28px" }} />
          Add to Cart
        </Cart>
      </BtnsDiv>
    </SideBar>
  );
};

export default Mealcard;
