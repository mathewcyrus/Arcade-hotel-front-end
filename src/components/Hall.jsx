import styled from "styled-components";

import CancelIcon from "@mui/icons-material/Cancel";
import conf1 from "../images/conference.jpg";
import Form from "./Form";
import { useState } from "react";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 430px;
  padding: 0px 80px;
  gap: 60px;
`;

const Div1 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;
  gap: 10px;
`;
const Container = styled.div`
  background-color: whitesmoke;
  border-radius: 10px;
  padding: 5px;
  h3 {
    color: blue;
  }
  p {
    font-size: 14px;
  }
`;
const Div2 = styled.div`
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  height: 200px;
  border-radius: 10px;
  width: 350px;
  object-fit: cover;
`;
const Hire = styled.button`
  all: unset;
  width: max-content;
  padding: 10px;
  background-color: blue;
  font-weight: 700;
  border-radius: 10px;
  font-size: 18px;
  text-align: center;
`;
const Icon = styled.div`
  top: 60px;
  color: orange;
  right: 200px;
  position: absolute;
  position: fixed;
  cursor: pointer;
  z-index: 5;
  &:hover {
    color: #ffa600c3;
  }
`;
const Hall = () => {
  const [openForm, setOpenForm] = useState(false);
  return (
    <>
      {openForm && <Form type="hall" />}
      {openForm && (
        <Icon>
          <CancelIcon onClick={() => setOpenForm(!openForm)} />
        </Icon>
      )}
      <Div>
        <Div1>
          <Wrapper>
            <Container>
              <h3>Conference Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente expedita adipisci possimus eius quia commodi accusamus
                pariatur, dicta nostrum molestias non suscipit id enim rem,
                nobis eaque! Perspiciatis ut.
              </p>
            </Container>
            <Container>
              <h3>Conference Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente expedita adipisci possimus eius quia commodi accusamus
                pariatur, dicta nostrum molestias non suscipit id enim rem,
                nobis eaque! Perspiciatis ut.
              </p>
            </Container>
            <Container>
              <h3>Conference Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente expedita adipisci possimus eius quia commodi accusamus
                pariatur, dicta nostrum molestias non suscipit id enim rem,
                nobis eaque! Perspiciatis ut.
              </p>
            </Container>
            <Container>
              <h3>Conference Halls</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
                sapiente expedita adipisci possimus eius quia commodi accusamus
                pariatur, dicta nostrum molestias non suscipit id enim rem,
                nobis eaque! Perspiciatis ut.
              </p>
            </Container>
          </Wrapper>
        </Div1>
        <Div2>
          <Image src={conf1} />

          <Hire onClick={() => setOpenForm(true)}>Send Booking enquiry</Hire>
        </Div2>
      </Div>
    </>
  );
};

export default Hall;
