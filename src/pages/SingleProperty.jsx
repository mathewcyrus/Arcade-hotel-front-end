import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import KingBedIcon from "@mui/icons-material/KingBed";

import styled from "styled-components";
import Footer from "../components/Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { dataRequest } from "../hooks/requestMethods";
import { searchContext } from "../context/searchContext";
import { useSelector } from "react-redux";
const Div = styled.div`
  max-width: 1366px;
  display: flex;
  padding: 0px 40px;
  margin-bottom: 20px;
`;
const RoomDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
`;
const Ul = styled.span`
  font-size: 18px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 15px;

  div {
    gap: 5px;
  }
  /* color: green; */
  span {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 10px;
  margin-top: 20px;
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
`;
const Container = styled.div`
  display: flex;
  /* justify-content: center; */
  margin-top: 40px;
  flex: 1;
  padding-left: 25px;
  flex-direction: column;
`;
const MoreDetails = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
const Checkout = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-top: 50px;
  justify-content: center;
`;

const Amount = styled.div`
  font-weight: 800;
  font-size: 18px;
  border-radius: 10px;
  width: 200px;
  display: grid;
  place-items: center;
  padding: 10px;
  outline: 1px solid orange;
`;
const Button = styled.button`
  color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  width: 250px;
  border-radius: 5px;
  margin-bottom: 3px;
  background-color: orange;
  border: none;
  cursor: pointer;
  &:hover {
    outline: 1px solid black;
  }
`;

const SingleProperty = () => {
  const [room, setRoom] = useState({});
  const userid = useSelector((state) => state.user.currentUser._id);
  const location = useLocation();
  const id = location.pathname.split("/")[3];

  const navigate = useNavigate();
  useEffect(() => {
    const fetchSingleRoom = async () => {
      try {
        const res = await dataRequest.get("/rooms/" + id);
        setRoom(res.data);
      } catch (error) {}
    };
    fetchSingleRoom();
  }, [id]);
  const { dates, options } = useContext(searchContext);

  const reserveRoom = async () => {
    try {
      await dataRequest.put("/rooms/update/reserve", {
        id,
        dates,
        options,
        userid,
      });
      navigate("/orders/bookings");
    } catch (error) {}
  };
  return (
    <>
      <Navbar />
      <Navbar2 />

      <Div>
        <ImageWrapper>
          {room.extraimages &&
            room.extraimages.map((img, i) => <Img src={img} key={i} />)}
        </ImageWrapper>
        <Container>
          <RoomDetails>
            <Ul>
              <KingBedIcon />
              <div>
                <span>Room no: </span> {room.number}
              </div>
            </Ul>
            <Ul>
              <KingBedIcon />
              <div>
                <span>Floor: </span> {room.floor}
              </div>
            </Ul>
            <Ul>
              <KingBedIcon />
              <div>
                <span>Room Type: </span>
                {room.category}
              </div>
            </Ul>
          </RoomDetails>
          <MoreDetails>{room.description}</MoreDetails>
          <Checkout>
            <Amount> $1200 (3 nights)</Amount>
            <Button onClick={reserveRoom}>Reserve</Button>
          </Checkout>
        </Container>
      </Div>
      <Footer />
    </>
  );
};

export default SingleProperty;
