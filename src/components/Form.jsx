import React from "react";
import styled from "styled-components";
const Div = styled.div`
  position: absolute;
  display: grid;
  place-items: center;
  height: 100vh;
  width: 100%;
  z-index: 3;
  /* color: white; */
  font-size: 18px;
  position: fixed;
  top: 0;
  max-width: 1366px;
  background-color: #000000ba;
`;
const Header = styled.div`
  position: absolute;
  top: 10px;
  font-size: 20px;
`;
const InputForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 60px 15px 100px 15px;

  width: 700px;
  /* height: 400px; */
  place-items: center;
  position: relative;
  background-color: whitesmoke;
  gap: -10px;
`;
const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  gap: 10px;
  width: 100%;

  label {
    font-size: 16px;
  }
`;
const Input = styled.input`
  width: 320px;
  padding: 10px;
  border: none;
  outline: none;
  border-bottom: 1px solid orange;
  border-radius: 10px;
`;
const InputBtn = styled.button`
  all: unset;
  position: absolute;
  bottom: 20px;
  width: 200px;
  font-size: 18px;
  font-weight: 700;
  color: white;
  text-align: center;
  background-color: orange;
  padding: 10px;

  &:hover {
    border-radius: 10px;
    box-shadow: 5px 5px 5px lightgray;
    cursor: pointer;
  }
`;
const InputSelect = styled.select`
  border: none;
  outline: none;
  border-bottom: 1px solid orange;
  padding: 10px;
  border-radius: 10px;
`;
const Option = styled.option`
  text-align: center;
`;

const Form = ({ type }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Div>
      <InputForm onSubmit={handleSubmit}>
        <Header>
          Fill in the reservation form below and we shall get back to you.
        </Header>
        <InputDiv>
          <label> email: </label>
          <Input type="text" required placeholder="email" />
        </InputDiv>
        <InputDiv>
          <label> Phone Number: </label>
          <Input type="text" required placeholder="phone number" />
        </InputDiv>
        <InputDiv>
          <label>Number of years:</label>
          <Input type="text" required placeholder="number of years" />
        </InputDiv>
        {type === "ground" && (
          <InputDiv>
            <label>how many people expected</label>
            <InputSelect required>
              <Option>any</Option>
              <Option>0-100</Option>
              <Option>100-200</Option>
              <Option>200-300</Option>
            </InputSelect>
          </InputDiv>
        )}
        <InputDiv>
          <label>Check in dates</label>
          <Input type="text" required placeholder="check-in dates" />
        </InputDiv>
        <InputDiv>
          <label>purpose of amenity</label>
          <Input type="text" required placeholder="purpose of amenity" />
        </InputDiv>
        {type === "office" && (
          <InputDiv>
            <label>Type of office</label>
            <InputSelect required>
              <Option>office</Option>
              <Option>studios</Option>
              <Option>open office</Option>
            </InputSelect>
          </InputDiv>
        )}
        <InputBtn type="submit">Submit Form</InputBtn>
      </InputForm>
    </Div>
  );
};

export default Form;
