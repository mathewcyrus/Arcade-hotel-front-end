import React from "react";
import styled from "styled-components";
import living from "../images/living.jpg";
import albert from "../images/albert.jpg";
import Navbar from "../components/Navbar";
import { NavLink, Outlet, useLocation } from "react-router-dom";
const AccountPage = styled.div``;
const Template = styled.div`
  width: 100%;

  position: relative;
`;
const BackGroundImage = styled.div`
  height: 280px;
  position: relative;
  & .overlay {
    height: 100%;
    position: absolute;
    top: 0px;
    width: 100%;
    background-color: #0000007b;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  &.profile_image {
    border-radius: 50%;
    height: 150px;
    width: 150px;
    outline: 2px solid white;
  }
`;
const Menu = styled.div`
  height: 70px;
  width: 900px;
  display: flex;
  align-items: center;
  gap: 20px;
  padding-left: 30px;
  z-index: 3;
  margin-left: 190px;
`;
const Profile = styled.div`
  height: 200px;
  width: 200px;
  position: absolute;
  display: flex;
  bottom: -125px;
  left: 40px;
`;
const UserName = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-top: 60px;
  width: max-content;
  position: absolute;
  left: 200px;
  bottom: 5px;
  margin-left: 20px;
  color: white;
`;
const MenuItem = styled(NavLink)`
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 5px 5px;
  &:hover {
    border-bottom: 2px solid orange;
    cursor: pointer;
  }
  &.active {
    border-bottom: 2px solid orange;
    font-size: 16px;
    font-weight: 700;
  }
`;
const WelcomeDiv = styled.div`
  margin-left: 260px;
  width: 540px;

  & .welcome {
    font-size: 24px;
    padding: 10px 0px;
  }
  & .manage {
    span {
      font-size: 35px;
      font-weight: 700;
    }
  }
`;

const Wrapper = styled.div`
  margin: -10px 0px 0px 220px;
  /* width: 900px; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
const Account = () => {
  const location = useLocation();
  return (
    <AccountPage>
      <Navbar type="home" />
      <Template>
        <BackGroundImage>
          <Image src={living} />
          <div className="overlay" />
        </BackGroundImage>
        <Profile>
          <Image src={albert} className="profile_image" />
        </Profile>
        <UserName> Mathew Cyrus</UserName>
      </Template>
      <Menu>
        <MenuItem
          to="/account/meal-orders"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          Meal orders
        </MenuItem>
        <MenuItem
          to="/account/my-bookings"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          Bookings
        </MenuItem>
        <MenuItem
          to="/account/Tickets"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          Tickets
        </MenuItem>
        <MenuItem
          to="/account/orders"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          My Orders
        </MenuItem>
        <MenuItem
          to="/account/my-address"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          My Address
        </MenuItem>
        <MenuItem
          to="/account/my-account"
          activeclassname="active"
          style={{ textDecoration: "none", color: "inherit" }}>
          My Account
        </MenuItem>
      </Menu>
      {location.pathname === "/account" && (
        <WelcomeDiv>
          <div className="welcome">Welcome to your account Mathew!</div>
          <div className="manage">
            Manage your account, View yur previous orders with us and so
            <br />
            <span>Much more!</span>
          </div>
        </WelcomeDiv>
      )}

      <Wrapper>
        <Outlet />
      </Wrapper>
    </AccountPage>
  );
};

export default Account;
