import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import Background from "../components/background/Background";
import Navbar from "../components/Navbar";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls";
const Div = styled.div`
  position: relative;
  max-height: 766px;
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
  flex-direction: column;
  height: max-content;
  width: 300px;
  padding: 5px;
  border-radius: 10px;
`;

const Header = styled.div`
  text-align: center;
  margin-top: 5px;
  font-size: 24px;
  font-weight: 700;
`;
const Loginwrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
  gap: 15px;
`;
const Text = styled.div`
  width: max-content;
  margin-bottom: -14px;
`;
const Username = styled.input`
  border-radius: 5px;
  outline: none;
  border: none;
  border-bottom: 1px solid orange;
  padding: 8px 12px;

  &.inputs:focus {
    border: 1px solid orange;
  }
`;

const ForgotPassword = styled.div`
  color: #3395eb;
  margin: -10px 5px 5px;
  text-align: right;
`;
const Password = styled(Username)``;
const LoginButton = styled.button`
  margin-top: 5px;
  margin-left: 50px;
  width: 200px;
  padding: 5px;
  background-color: orange;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
`;
const OtherOptionsText = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 18px;
`;
const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #3395eb;
`;

const SignUpText = styled.div`
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
`;
const SignUpbtn = styled(LoginButton)`
  margin-bottom: 0px;
`;

const Login = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userLoginFunc = (e) => {
    e.preventDefault();
    login(dispatch, { email, password });
    navigate(-1);
  };
  return (
    <Div>
      <Navbar type="login" />
      <Form>
        <Container>
          <Header>Login</Header>
          <Loginwrapper>
            <Text>Email</Text>
            <Username
              className="inputs"
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <Text>Password</Text>
            <Password
              className="inputs"
              type="password"
              placeholder="Enter your password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Loginwrapper>
          <ForgotPassword>Forgot your Password?</ForgotPassword>
          <LoginButton type="submit" onClick={userLoginFunc}>
            Log in
          </LoginButton>
          <OtherOptionsText>Or log in using</OtherOptionsText>
          <Icons>
            <IconContainer>
              <TwitterIcon />
            </IconContainer>
            <IconContainer>
              <GoogleIcon />
            </IconContainer>
            <IconContainer>
              <FacebookIcon />
            </IconContainer>
          </Icons>
          <SignUpText>Or sign up</SignUpText>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <SignUpbtn>Sign up</SignUpbtn>
          </Link>
        </Container>
      </Form>
      <Background />
    </Div>
  );
};

export default Login;
