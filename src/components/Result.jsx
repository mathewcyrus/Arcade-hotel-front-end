import { Link } from "react-router-dom";
import styled from "styled-components";

const Div = styled.div`
  width: 300px;
  display: flex;
  background-color: whitesmoke;
  flex-direction: column;
  height: max-content;
  box-shadow: 5px 5px 5px lightgray;
  margin-bottom: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 0px 0px 5px 5px;
  object-fit: cover;
`;
const RoomDescriptions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 40px;
  margin-top: 5px;
`;
const Description = styled.div`
  font-size: 14px;
  font-weight: 700;

  span {
    font-size: 14px;
    font-weight: 500;
    margin-right: 5px;
  }
`;

const RoomDesc = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  padding: 0px 10px;
  justify-content: center;
  gap: 5px;
`;

const Ul = styled.span`
  font-size: 12px;
  width: max-content;
`;

const AvailabilityContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  padding: 10px;
  border: none;
  width: 250px;
  background-color: orange;
  cursor: pointer;
  margin-bottom: 10px;
`;
const Price = styled.span`
  color: orange;
  font-size: 18px;
  font-weight: 700;
`;

const Result = ({ room }) => {
  return (
    <Div>
      <Img src={room.avatar} alt="image" />
      <RoomDescriptions>
        <Description>
          <span>Room no:</span> {room.number}
        </Description>
        <Description>
          <span>Floor:</span> {room.floor}
        </Description>
        <Description>
          <span>type: </span>
          {room.category}
        </Description>
      </RoomDescriptions>
      <RoomDesc>
        <Ul>Fully furnished kitchen</Ul>
        <Ul>Master BedRoom</Ul>
        <Ul>Air condition</Ul>
        <Ul>Room Services</Ul>
        <Ul>Balcony</Ul>
      </RoomDesc>
      <AvailabilityContainer>
        <Price>${room.price}</Price>
        <Link to={`/booking/${room.category}/${room._id}`}>
          <Button> Available</Button>
        </Link>
      </AvailabilityContainer>
    </Div>
  );
};

export default Result;
