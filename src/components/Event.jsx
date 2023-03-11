import React, { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";

import CancelIcon from "@mui/icons-material/Cancel";
import StripeCheckout from "react-stripe-checkout";

import Art from "../images/Art.jpg";
import { dataRequest } from "../hooks/requestMethods";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const KEY = process.env.REACT_APP_STRIPE;

const Div = styled.div`
  height: 450px;
  display: flex;
  margin: 10px 145px 10px 145px;
`;
const Icontainer = styled.div`
  height: 100%;
  object-fit: cover;
`;
const Image = styled.img`
  height: 100%;
  border-radius: 10px 0px 0px 10px;
`;

const EventDescription = styled.div`
  border-radius: 0px 10px 10px 0px;
  padding: 20px 10px 0px 10px;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
  background-color: #000000;
  color: #fff;
`;
const EventContainer = styled.div`
  display: flex;
  gap: 30px;
  padding: 5px;
  margin-bottom: -20px;
  margin-top: -15px;
`;

const EventAbout = styled.div`
  display: flex;
  align-items: center;
  flex: 4;
  font-size: 16px;
  color: ${(props) =>
    props.type
      ? "highlight" && "#3395EB"
      : props.type === "invite" && "#3395EB"};
`;
const Name = styled.div`
  font-size: 18px;
  flex: 1;
`;

const Title = styled.div`
  text-align: center;
  letter-spacing: 5px;
  color: #3395eb;
  font-size: 24px;
  font-weight: bold;
  margin-top: -10px;
`;
const Hr = styled.hr`
  margin-top: -10px;
  width: calc(100% - 70px);
`;
const Bookingcontainer = styled.div`
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
  margin-left: 50px;
`;
const Text = styled.h3`
  font-size: 18px;
`;
const TicketBtn = styled.button`
  background-color: #3395eb;
  border-radius: 5px;
  width: 150px;
  padding: 10px;
  font-size: 24px;
  font-weight: 700;

  &:hover {
    background-color: transparent;
    transform: scale(1.01) translateY(-5px);
    transition: 0.4s ease-in-out;
    color: #3395eb;
    border: 1px solid #3395eb;
    cursor: pointer;
  }
`;

const FormContainer = styled.div`
  z-index: 3;
  position: absolute;
  position: fixed;
  top: 0px;
  height: 100vh;
  width: 100vw;
  background-color: #000000dd;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 450px;
  width: 350px;
  background-color: black;
  border: 1px solid orange;
  border-radius: 5px;
`;
const Options = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  margin-top: 10px;
  height: calc(100% - 100px);
`;

const Payment = styled.div`
  display: flex;
  flex-direction: column;
  place-items: flex-end;
  padding: 5px;
`;

const PaymentOption = styled.button`
  color: white;
  justify-content: center;
  place-items: center;
  display: flex;
  width: 150px;
  height: 30px;
  font-size: 24px;
  border-radius: 5px;
  margin-bottom: 3px;
  background-color: green;
  border: none;

  &:hover {
    background-color: #144b14;
    transition: 0.4s ease-in-out;
    cursor: pointer;
  }
`;
const Container = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  gap: 5px;
  flex-direction: column;
  place-items: center;
`;

const Span = styled.span`
  margin-top: 20px;
  color: orange;
  text-align: center;
`;

const Title2 = styled.div`
  font-size: 24px;
  border-bottom: 1px solid orange;
  color: white;
  display: flex;
  margin-top: 5px;
  justify-content: center;
  align-items: center;
`;
const AdditionalText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -15px;
  font-size: 18px;
  color: white;
`;
const Selection = styled.div`
  width: 70px;
  height: 20px;
  margin-right: -70px;
`;

const TicketChoice = styled.div`
  margin-left: -70px;
  color: #3395eb;
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;
const TicketType = styled.select`
  background-color: white;
  border: none;
  color: black;
  height: 20px;
  width: 100%;
`;

const Option = styled.option`
  cursor: pointer;
`;
const Confirmation = styled.h3`
  color: white;
  font-size: 16px;
  margin-top: 3px;
`;
const TicketOptionText = styled.div`
  color: white;
  font-size: 14px;
  width: 150px;
  margin-right: 10px;
`;

const EventImage = styled.img`
  height: 160px;
  width: 100%;
  object-fit: cover;
  object-position: center;
  margin: 10px 0px 5px;
`;
const Input = styled.input`
  height: 20px;
  width: 65px;
  outline: none;
`;
const Icon = styled.div`
  position: absolute;
  color: white;
  cursor: pointer;
  top: 30px;
  right: 150px;
  width: 30px;

  &:hover {
    color: orange;
  }
`;

const Event = ({ singleevent }) => {
  const [stripeToken, setStripeToken] = useState(null);
  const [Open, SetOpen] = useState(false);
  const [tickettype, setTicketType] = useState("regular");
  const [ticketquantity, setTicketQuantity] = useState(1);
  const userid = useSelector((state) => state.user.currentUser._id);
  const navigate = useNavigate();
  const datestring = singleevent.date;
  const date = new Date(datestring);
  const formatteddate = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  //Make apost request to create tickets after a successful payment
  const onToken = (token) => {
    setStripeToken(token);
  };
  console.log(formatteddate);
  useEffect(() => {
    if (stripeToken) {
      const buyTicket = async () => {
        const newTicket = await dataRequest.post("/tickets", {
          customerID: userid,
          eventID: singleevent._id,
          eventname: singleevent.title,
          eventdate: formatteddate,
          eventtime: singleevent.time,
          ticketprice: singleevent.ticketprice,
          totalprice: singleevent.ticketprice * ticketquantity,
          tickettype: tickettype,
          people: ticketquantity,
          venue: singleevent.venue,
        });
        console.log(newTicket);
      };
      stripeToken && buyTicket() && navigate("/orders/tickets");
    }
  }, [stripeToken]);

  return (
    <>
      {Open && (
        <FormContainer>
          <FormDiv>
            <Icon>
              <CancelIcon onClick={() => SetOpen(!Open)} />
            </Icon>
            <Title2> {singleevent.title} Tickets</Title2>
            <Options>
              <Container>
                <TicketChoice>
                  <TicketOptionText>Number of tickets:</TicketOptionText>
                  <Selection>
                    <Input
                      onChange={(e) => setTicketQuantity(e.target.value)}
                      type="number"
                      placeholder="1"
                      min={1}
                    />
                  </Selection>
                </TicketChoice>
                <TicketChoice>
                  <TicketOptionText>Choose Ticket type:</TicketOptionText>
                  <Selection>
                    <TicketType
                      value={tickettype}
                      onChange={(e) => setTicketType(e.target.value)}>
                      <Option value="regular">Regular</Option>
                      <Option value="vip">VIP</Option>
                      <Option value="vvip">VVIP</Option>
                    </TicketType>
                  </Selection>
                </TicketChoice>
              </Container>
              <Confirmation>
                Pay
                <Span>{singleevent.ticketprice * ticketquantity} ksh/= </Span>
                for{" "}
                <Span>
                  {ticketquantity} {tickettype}
                </Span>{" "}
                tickets?
              </Confirmation>
              <AdditionalText>
                You can also buy tickets at our gates.
              </AdditionalText>
              <EventImage src={Art} />
            </Options>
            <Payment>
              <PaymentOption>M-Pesa</PaymentOption>
              <StripeCheckout
                name="Arcade Hotel " // the pop-in header title
                description="Arcade hotel events Checkout" // the pop-in header subtitle
                image=""
                amount={singleevent.ticketprice * ticketquantity * 100} // cents
                currency="USD"
                stripeKey={KEY}
                shippingAddress
                billingAddress
                allowRememberMe
                token={onToken}>
                <PaymentOption> Card</PaymentOption>
              </StripeCheckout>
            </Payment>
          </FormDiv>
        </FormContainer>
      )}
      <Div>
        <Icontainer>
          <Image src={Art} />
        </Icontainer>
        <EventDescription>
          <Title>{singleevent.title}</Title>
          <Hr />
          <EventContainer>
            <Name>Date:</Name>
            <EventAbout type="highlight">
              {" "}
              {new Date(singleevent.date).toLocaleDateString()}
            </EventAbout>
          </EventContainer>
          <EventContainer>
            <Name>Time:</Name>
            <EventAbout type="highlight"> {singleevent.time} </EventAbout>
          </EventContainer>
          <EventContainer>
            <Name>Description:</Name>
            <EventAbout>{singleevent.description}</EventAbout>
          </EventContainer>

          <EventContainer>
            <Name>Venue:</Name>
            <EventAbout> {singleevent.venue}</EventAbout>
          </EventContainer>
          <EventContainer>
            <Name>Ticket @1:</Name>
            <EventAbout type="highlight">
              starting from {singleevent.ticketprice} ksh/=
            </EventAbout>
          </EventContainer>
          <EventContainer>
            <Name>Invited:</Name>
            <EventAbout type="invite">{singleevent.invited}</EventAbout>
          </EventContainer>
          <Bookingcontainer>
            <Text>
              Are you an artist?
              <a href="#" style={{ color: "#3395EB" }}>
                contact us
              </a>
            </Text>
            <TicketBtn onClick={() => SetOpen(!Open)}>Buy Ticket</TicketBtn>
          </Bookingcontainer>
        </EventDescription>
      </Div>
    </>
  );
};

export default Event;
