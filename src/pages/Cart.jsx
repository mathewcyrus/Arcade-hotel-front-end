import React, { useEffect } from "react";
import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import title from "../images/title.svg";

import StripeCheckout from "react-stripe-checkout";

import CancelIcon from "@mui/icons-material/Cancel";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  decrementQuantity,
  deleteDish,
  incrementQuantity,
} from "../redux/cartRedux";
import { dataRequest } from "../hooks/requestMethods";

const KEY = process.env.REACT_APP_STRIPE;

const Maindiv = styled.div`
  background-color: #d3d3d35a;
  position: relative;
`;
const Logo = styled.img`
  height: 30px;
  top: 30px;
  padding: 5px;
  border-radius: 5px;
  object-fit: cover;
  background-color: black;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    margin: 10px 0px 0px 0px;
  }
`;
const CartWrapper = styled.div`
  display: flex;
  margin: 20px 0px 0px;
  gap: 60px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const Header = styled.div`
  font-size: 20px;
  font-weight: 700;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    margin-top: 10px;
  }
`;
const CartItem = styled.table`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
  width: 720px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
  padding-bottom: 10px;
  h5 {
    margin-left: 100px;
  }
  @media screen and (min-width: 300px) and (max-width: 800px) {
    margin: 0px 10px;
    width: 400px;
  }
`;
const Tablerow = styled.tr`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 5px;
  &.tableheader {
    padding: 3px;
    background-color: orange;
  }

  &:hover {
    border-bottom: 1px solid lightgray;
    cursor: pointer;
  }
`;
const TableHeader = styled.th`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  flex: 1;
`;
const TableData = styled.td`
  margin-top: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  font-size: 14px;
  &.icon:hover {
    color: orange;
  }
  &.quantity {
    font-weight: bold;
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  &.name {
    font-size: 14px;
    font-weight: bold;
  }
`;
const Increment = styled.div`
  height: 100%;
  width: 15px;
  padding: 3px;
  font-weight: bold;
  text-align: center;
  background-color: orange;
`;
const Image = styled.img`
  height: 50px;
  object-fit: cover;
  width: 50px;
  border-radius: 50%;
`;

const OrderSummary = styled.div`
  display: flex;
  position: sticky;
  top: 600;
  flex-direction: column;
  margin: 0px 70px;
  width: 400px;
  height: 170px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
  @media screen and (min-width: 300px) and (max-width: 800px) {
    margin: 0px;
    position: relative;
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  font-size: 16px;
  padding: 6px;
  font-weight: 700;
`;
const Summaries = styled.div`
  font-size: 18px;
  padding: 5px;
`;
const SubTotals = styled.div`
  display: flex;
  font-size: 16px;
  justify-content: space-between;
  padding: 5px 0px;
  border-bottom: 1px solid lightgray;

  &:last-child {
    margin-top: 5px;
    border-bottom: none;
    font-size: 18px;
  }
`;
const SubTotalsName = styled.div``;
const SubtotalsPrice = styled.div``;

const OrderDelivery = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 47px;
  width: 700px;
  height: 200px;
  margin-bottom: 70px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 400px;
    margin: 0px 10px;
  }
`;
const TitleBar = styled.div`
  color: white;
  padding: 5px;
  font-size: 18px;
  font-weight: 700;
  background-color: orange;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    text-align: center;
  }
`;
const Deliverytext = styled.div`
  font-size: 16px;
  margin-left: 30px;
  margin-top: 10px;
`;
const OrderCaution = styled.div`
  font-size: 12px;
  font-style: italic;
  margin-left: 50px;
`;
const DeliveryOptions = styled.div`
  display: flex;
  height: 100px;
  margin: 20px 0px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
  }
`;

const YourAdress = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  border-right: 1px solid lightgray;
  gap: 10px;
  flex: 1;
`;
const AreaSelection = styled.div`
  display: flex;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
  }
`;
const LocationContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Area = styled.div`
  flex: 2;
  margin-left: 10px;
`;
const Text = styled.div`
  font-size: 12px;
  font-style: italic;
  margin-left: 30px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    font-size: 14px;
  }
`;
const Select = styled.select`
  height: 20px;
  border: none;
  outline: none;
  font-size: 12px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    height: 40px;
    width: 300px;
    margin-left: 40px;
    margin-top: 10px;
    font-size: 14px;
  }
`;
const Options = styled.option``;
const Store = styled.div`
  display: flex;
  gap: 15px;
`;
const PickStore = styled.div``;

const HotelCollection = styled.div`
  flex: 1;
  margin-left: 30px;
`;
const CheckBox = styled.input`
  &:checked {
    background-color: orange;
  }
`;
const HText = styled.div`
  font-size: 14px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    font-size: 16px;
  }
`;
const PText = styled.div`
  font-size: 12px;
  font-style: italic;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    font-size: 14px;
  }
`;
const SelectContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  width: 100%;
`;
const HSelect = styled.select`
  border: none;
  outline: none;
  font-size: 12px;
  width: 200px;
  border-bottom: 1px solid lightgray;
`;
const HOptions = styled.option``;
const Payment = styled.div`
  width: 400px;
  position: absolute;
  overflow: hidden;
  right: 70px;
  padding-bottom: 20px;
  top: 460px;
  background-image: -webkit-linear-gradient(#d3d3d360, #d3d3d311);
  @media screen and (min-width: 300px) and (max-width: 800px) {
    position: relative;
    top: 170px;
    margin: 0px 10px;
    right: 0px;
    width: 400px;
    padding-bottom: 30px;
  }
`;
const CheckOutName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  font-size: 18px;
  padding: 8px;
  font-weight: 700;
  width: 100%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    padding: 0px;
    height: 50px;
    color: white;
    font-weight: 700;
    font-size: 24px;
  }
`;
const PaymentOption = styled.div`
  display: flex;
  margin-top: 15px;
  gap: 10px;
`;
const PaymentText = styled.div`
  padding: 5px 0px 5px 5px;
  font-size: 16px;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  flex: 1;
  cursor: pointer;
  font-size: 18px;
  height: 40px;
  border: 1px solid lightgray;
  box-shadow: 1px 1px 2px lightgray;
  width: 200px;
  &:hover {
    height: 42px;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  margin-top: 10px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    padding: 0px 20px;
    gap: 20px;
  }
`;
const Cart = () => {
  const [stripeToken, setStripeToken] = useState(null);
  const cartitem = useSelector((state) => state.cart);
  const userid = useSelector((state) => state.user.currentUser?._id);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //This function is called from stripe token component and gets the value of the stripe token
  const onToken = (token) => {
    setStripeToken(token);
  };

  // Handles Creation of a new order once a there is a stripetoken
  useEffect(() => {
    if (stripeToken) {
      // convert token creation date
      const timestamp = stripeToken.created;
      const orderdate = new Date(timestamp * 1000);
      const formattedDate = orderdate.toLocaleDateString();

      //Get products from the cart
      const product = cartitem.dishes.map((product) => ({
        productimage: product.photo,
        productname: product.mealname,
        productquantity: product.quantity,
      }));

      //Creating a new order after a stripe token is given back
      const createNewOrder = async () => {
        stripeToken &&
          (await dataRequest.post("/orders", {
            customerID: userid,
            orderdate: formattedDate,
            address: stripeToken.card.address_city,
            paymentmethod: stripeToken.type,
            total: cartitem.total,
            product,
          }));
      };
      stripeToken &&
        createNewOrder() &&
        dispatch(clearCart()) &&
        navigate("/orders");
    }
  }, [stripeToken]);
  const handleQuantity = (id, operation) => {
    if (operation === "inc") {
      dispatch(incrementQuantity({ id }));
    } else {
      dispatch(decrementQuantity({ id }));
    }
  };

  //Dispatches an action to delete an item in the cart
  const deleteCartItem = (id, price) => {
    dispatch(deleteDish({ id, price }));
  };
  return (
    <Maindiv>
      <Navbar type="cart" />
      <Navbar2 />
      <LogoWrapper>
        <Logo src={title} />
        <Header>Your Cart ({cartitem.dishes.length} items)</Header>
      </LogoWrapper>
      <CartWrapper>
        <CartItem>
          <Tablerow className="tableheader">
            <TableHeader>Product</TableHeader>
            <TableHeader>Name</TableHeader>
            <TableHeader>Price</TableHeader>
            <TableHeader>Quantity</TableHeader>
            <TableHeader>Total</TableHeader>
            <TableHeader>Delete</TableHeader>
          </Tablerow>
          {cartitem.dishes.length === 0 ? (
            <h5>
              You have not added meals yet{" "}
              <Link to="/arcade-hotel-meals" style={{ color: "blue" }}>
                {" "}
                order meals
              </Link>
            </h5>
          ) : (
            cartitem.dishes.map((dish) => (
              <Tablerow key={dish._id}>
                <TableData>
                  <Image src={dish.photo} />
                </TableData>
                <TableData className="name">{dish.mealname}</TableData>
                <TableData>{dish.price}</TableData>
                <TableData className="quantity">
                  <Increment onClick={() => handleQuantity(dish._id, "dec")}>
                    -
                  </Increment>
                  {dish.quantity}
                  <Increment onClick={() => handleQuantity(dish._id, "inc")}>
                    +
                  </Increment>
                </TableData>
                <TableData>{dish.price * dish.quantity}</TableData>
                <TableData className="icon">
                  <CancelIcon
                    onClick={() =>
                      deleteCartItem(dish.id, dish.price * dish.quantity)
                    }
                  />
                </TableData>
              </Tablerow>
            ))
          )}
        </CartItem>
        <OrderSummary>
          <Title> Order Summary</Title>
          <Summaries>
            <SubTotals>
              <SubTotalsName>SubTotals:</SubTotalsName>
              <SubtotalsPrice>{cartitem.total}</SubtotalsPrice>
            </SubTotals>
            <SubTotals>
              <SubTotalsName>Discounts:</SubTotalsName>
              <SubtotalsPrice>$ 0.00</SubtotalsPrice>
            </SubTotals>
            <SubTotals>
              <SubTotalsName>Tax:</SubTotalsName>
              <SubtotalsPrice>$ 0.00</SubtotalsPrice>
            </SubTotals>
            <SubTotals>
              <SubTotalsName>Grand totals:</SubTotalsName>
              <SubtotalsPrice>{cartitem.total}</SubtotalsPrice>
            </SubTotals>
          </Summaries>
        </OrderSummary>
      </CartWrapper>
      <OrderDelivery>
        <TitleBar>Delivery Options</TitleBar>
        <Deliverytext>How would you want us to deliver?</Deliverytext>
        <OrderCaution>
          collection at our hotel should be within 1 hour after an order made.
          <Link>FAQ</Link>
        </OrderCaution>
        <DeliveryOptions>
          <YourAdress>
            <AreaSelection>
              <Area>
                <LocationContainer>
                  <LocationOnIcon />
                  Nairobi
                </LocationContainer>
                <Text>we deliver to your adress</Text>
              </Area>
              <Select>
                <Options>Zimmer man</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
              </Select>
            </AreaSelection>
            <AreaSelection>
              <Area>
                <LocationContainer>
                  <LocationOnIcon />
                  Eldoret
                </LocationContainer>
                <Text>we deliver to your adress</Text>
              </Area>
              <Select>
                <Options>Kakuzi</Options>
                <Options>Sun ton</Options>
                <Options>Two Rivers</Options>
              </Select>
            </AreaSelection>
          </YourAdress>
          <HotelCollection>
            <Store>
              <CheckBox type="checkbox" />
              <PickStore>
                <HText>Pick At Hotel</HText>
                <PText>you'll pick at our store</PText>
              </PickStore>
            </Store>
            <SelectContain>
              <HSelect>
                <HOptions>Nairobi</HOptions>
                <HOptions>Eldoret</HOptions>
              </HSelect>
            </SelectContain>
          </HotelCollection>
        </DeliveryOptions>
      </OrderDelivery>
      <Payment>
        <CheckOutName>Check Out</CheckOutName>
        <PaymentText>Select your payment method</PaymentText>
        <PaymentOption>
          <Card>
            <MobileScreenShareIcon />
            M-pesa
          </Card>
          {/* <StripeCheckout
            name="Arcade Hotel " // the pop-in header title
            description="Arcade Hotel Checkout" // the pop-in header subtitle
            image=""
            amount={cartitem.total * 100} // cents
            currency="USD"
            stripeKey={KEY}
            shippingAddress
            billingAddress
            allowRememberMe
            token={onToken}>
            <Card>
              <CreditCardIcon />
              Debit/Credit
            </Card>
          </StripeCheckout> */}
        </PaymentOption>
      </Payment>
      <Footer />
    </Maindiv>
  );
};

export default Cart;
