import React, { useEffect, useState } from "react";
import styled from "styled-components";
import SendIcon from "@mui/icons-material/Send";
import io from "socket.io-client";

import Message from "./Message";
import { dataRequest } from "../../hooks/requestMethods";
import { useSelector } from "react-redux";
const Container = styled.div`
  height: 470px;
  width: 500px;
  position: absolute;
  z-index: 2;
  right: 90px;
  /* padding: 5px; */
  bottom: 90px;
  background-color: #0000009b;
  border: 1px solid orange;
`;

const Wrapper = styled.div`
  position: relative;
  height: 100%;
`;
const InputWrapper = styled.form`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: black;
  bottom: 0px;
  left: 0px;
  padding: 5px 0px;
`;
const Input = styled.input`
  width: 380px;
  padding: 10px;
  border: none;

  height: 30px;
  outline: none;
  border-radius: 10px;
`;
const Button = styled.button`
  all: unset;
  width: 80px;
  text-align: center;
  color: white;
`;
const MessagesWindow = styled.div`
  height: 78%;
  padding-right: 10px;
  padding-bottom: 20px;
  overflow: scroll;
  overflow-x: hidden;
  background-color: #0000009b;
`;
const Header = styled.div`
  background-color: #000000ca;
  height: 30px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  justify-content: center;
  text-align: center;
  font-weight: 700;
  color: white;
`;
const ChatWindow = () => {
  const [message, setMessage] = useState("");
  const userid = useSelector((state) => state.user.currentUser?._id);
  const [messages, setMessages] = useState([]);
  const [greetings, setGreetings] = useState("");
  const socket = io(
    `http://localhost:8800?client=${userid}&admin=63ea4f99f90fe8ed65179078`
  );

  // useEffect(async () => {
  //   // Fetch messages from the server when the component mounts
  //   await dataRequest.get("http://localhost:8800/api/messages").then((response) => {
  //     setMessages(response.data);
  //   });

  //   socket.on("connect", () => {
  //     console.log(socket.id);
  //   });

  //   // Listen for new messages from the server and add them to the messages state
  //   socket.on("message", (newMessage) => {
  //     setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   });
  // }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    // Send the message to the server via Socket.IO
    socket.emit("message", {
      sender: userid,
      message: message,
    });

    // Add the message to the messages state
    setMessages((prevMessages) => [
      ...prevMessages,
      { content: message, type: "user" },
    ]);

    // Reset the message input
    setMessage("");
  };
  return (
    <Container>
      <Wrapper>
        <Header>Arcade Hotel</Header>
        <MessagesWindow>
          {/* <Message greetings={greetings} type="greetings" /> */}

          <Message />
          <Message type="admin" />
          <Message type="admin" />
          <Message />
          <Message type="admin" />
          <Message />
        </MessagesWindow>
        <InputWrapper onSubmit={sendMessage}>
          <Input
            value={message}
            required
            placeholder="enter your message"
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button>
            <SendIcon style={{ fontSize: "35px" }} />
          </Button>
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};

export default ChatWindow;
