import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import Background from "../components/background/Background";

import Navbar from "../components/Navbar";
import { dataRequest } from "../hooks/requestMethods";

const Div = styled.div`
  position: relative;
  max-width: 1366px;
`;

const Form = styled.form``;
const Container = styled.div`
  position: absolute;
  background-color: white;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: max-content;
  width: 600px;
  padding: 5px;
  border-radius: 10px;
`;
const Header = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

const MainWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 15px 0px;
`;
const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-bottom: 10px;
  gap: 6px;
`;
const Text = styled.div`
  font-size: 16px;
`;
const InputField = styled.input`
  width: 250px;
  outline: none;
  border: none;
  padding: 8px 12px;
  border-radius: 5px;
  border-bottom: 1px solid orange;

  &.inputs:focus {
    border: 1px solid orange;
  }
`;

const SignIn = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
`;
const SignBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  padding: 5px;
  border: none;
  width: 200px;
  margin-bottom: 10px;
`;

const Register = () => {
  const [credentials, setCredentials] = useState({
    firstname: undefined,
    lastname: undefined,
    phonenumber: undefined,
    email: undefined,
    password: undefined,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const registerUser = async (e) => {
    e.preventDefault();
    try {
      const res = await dataRequest.post("/auth/register", { credentials });
      console.log(res.data);
    } catch (err) {}
  };
  return (
    <Div>
      <Navbar type="register" />
      <Form>
        <Container>
          <Header>Sign up</Header>
          <MainWrapper>
            <InputWrapper>
              <Text>First name</Text>
              <InputField
                className="inputs"
                type="text"
                placeholder="enter your first name"
                required
                id="firstname"
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Text>Last name</Text>
              <InputField
                className="inputs"
                type="text"
                placeholder="enter your last name"
                required
                id="lastname"
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Text>phone number</Text>
              <InputField
                className="inputs"
                type="text"
                placeholder="enter your phone number"
                pattern="[0-9]+"
                required
                id="phonenumber"
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Text>Email</Text>
              <InputField
                className="inputs"
                type="email"
                placeholder="enter your email"
                required
                id="email"
                onChange={handleChange}
              />
            </InputWrapper>
            <InputWrapper>
              <Text>Password</Text>
              <InputField
                className="inputs"
                type="password"
                placeholder="enter your password"
                required
                id="password"
                onChange={handleChange}
              />
            </InputWrapper>
            {/* <InputWrapper>
              <Text>Confirm your password</Text>
              <InputField
                className="inputs"
                type="password"
                placeholder="confirm password"
                required
              />
            </InputWrapper> */}
          </MainWrapper>
          <SignIn>
            Already have an account?
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#3395eb" }}>
              sign in
            </Link>
          </SignIn>
          <SignBtn type="submit" onClick={registerUser}>
            Sign Up
          </SignBtn>
        </Container>
      </Form>
      <Background />
    </Div>
  );
};

export default Register;
