import React from "react";
import styled from "styled-components";
import tracy from "../images/tracy.jpg";
const Div = styled.div`
  width: 300px;
  height: max-content;
  display: flex;
  margin-top: -10px;
  gap: 20px;
`;
const Container = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const Image = styled.img`
  object-fit: cover;
  width: 70px;
  border: 1px solid #3395eb;
  border-radius: 50%;
`;

const Name = styled.h5`
  margin-top: 5px;
  margin-left: 5px;
`;
const Testimonial = styled.p`
  font-size: 14px;
  /* margin-top: 15px; */

  &::before {
    content: open-quote;
    font-size: 16px;
    color: #3395eb;
    margin-right: 5px;
  }

  &::after {
    content: close-quote;
    font-size: 16px;
    margin-left: 5px;
    color: #3395eb;
  }
`;
const Testimony = ({ test }) => {
  return (
    <Div>
      <Container>
        <Image src={tracy} />
        <Name> John Doe</Name>
      </Container>
      <Testimonial>{test.testimonial}</Testimonial>
    </Div>
  );
};

export default Testimony;
