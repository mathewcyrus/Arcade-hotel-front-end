import React from "react";
import styled from "styled-components";
import adam from "../../images/adam.jpg";
const Container = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: row;
  gap: 10px;
  padding-top: 5px;
  padding-left: 5px;
  &.owner {
    flex-direction: row-reverse;
  }
`;
const Avatar = styled.div`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  color: white;
  font-weight: 700;
  background-color: teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Messagebody = styled.div`
  background-color: whitesmoke;
  padding: 5px;
  display: flex;
  flex-direction: column;
  width: 260px;
  border-radius: 0px 10px 10px 10px;
  &.owner {
    border-radius: 10px 0px 10px 10px;
    background-color: teal;
  }
  p {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: max-content;
  object-fit: contain;
`;
const Message = ({ type, msg }) => {
  return (
    <Container className={type === "admin" ? "" : "owner"}>
      <Avatar>MC</Avatar>
      <Messagebody className={type === "admin" ? "" : "owner"}>
        <p>{msg.message}</p>
      </Messagebody>
    </Container>
  );
};

export default Message;
