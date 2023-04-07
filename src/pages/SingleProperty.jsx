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
  @media screen and (min-width: 300px) and (max-width: 800px) {
    flex-direction: column;
    padding: 0px 20px;
  }
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
  span {
    font-style: italic;
    font-weight: 500;
    font-size: 14px;
    @media screen and (min-width: 300px) and (max-width: 800px) {
      font-size: 16px;
    }
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 10px;
  margin-top: 20px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;
const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 190px;
  }
`;
const Container = styled.div`
  display: flex;
  margin-top: 40px;
  flex: 1;
  padding-left: 25px;
  flex-direction: column;
`;
const MoreDetails = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    font-size: 1.2rem;
  }
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
  font-size: 16px;
  border-radius: 10px;
  width: 200px;
  display: grid;
  place-items: center;
  padding: 10px;
  outline: 1px solid orange;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    width: 290px;
  }
`;
const Button = styled.button`
  color: black;
  display: flex;
  justify-content: center;
  align-content: center;
  position: relative;
  /* overflow: hidden; */
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
  &.disabled {
    cursor: not-allowed;
    &:hover {
      &::after {
        content: "select a date range";
        height: 20px;
        width: 220px;
        padding: 10px;
        background-color: lightgray;
        position: absolute;
        top: -50px;
        font-size: 16px;
        border-radius: 10px;
      }
    }
  }
`;

const SingleProperty = () => {
  const [room, setRoom] = useState({});
  const userid = useSelector((state) => state.user.currentUser._id);
  const username = useSelector(
    (state) =>
      state.user.currentUser.firstname + " " + state.user.currentUser.lastname
  );
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

  // Getting the total number of booked days from dates
  let diffInDays = null;
  if (dates.length > 0) {
    const startDate = new Date(dates[0].startDate);
    const endDate = new Date(dates[0].endDate);
    const diffInMs = endDate.getTime() - startDate.getTime();
    diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  }
  console.log(diffInDays);
  const reserveRoom = async () => {
    try {
      if (diffInDays >= 1) {
        const res = await dataRequest.post("/reservations", {
          ReservedRoom: {
            roomNumber: room.number,
            roomID: id,
            roomcategory: room.category,
          },
          ReservationsDates: dates,
          bookingoptions: options,
          customer: { customerName: username, customerID: userid },
          totaldays: diffInDays,
        });

        alert(res.data.message);
        if (res.data) {
          localStorage.removeItem("searchState");
          navigate("/orders/bookings");
        }
      }
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
            <Amount>
              ${room.price * diffInDays} ({diffInDays} nights)
            </Amount>
            <Button
              className={
                diffInDays === 0 || diffInDays === null ? "disabled" : ""
              }
              onClick={reserveRoom}>
              Reserve
            </Button>
          </Checkout>
        </Container>
      </Div>
      <Footer />
    </>
  );
};

export default SingleProperty;
