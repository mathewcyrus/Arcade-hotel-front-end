import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import DiningIcon from "@mui/icons-material/Dining";
import { Link, Outlet } from "react-router-dom";

import ShopIcon from "@mui/icons-material/Shop";
import KingBedIcon from "@mui/icons-material/KingBed";
const MainWrapper = styled.div``;
const Sidebar = styled.div`
  width: 150px;
  height: 100vh;
  box-shadow: 5px 10px 10px 0px rgba(204, 201, 204, 1);
  position: fixed;
  left: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 20px 3px;
`;

const SidebarItem = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  gap: 10px;
  justify-content: flex-end;

  & .icon {
    text-align: left;
    position: absolute;
    left: 10px;
  }

  span {
    text-align: right;
    position: absolute;
    left: 45px;
  }
`;
const Wrapper = styled.div`
  margin-left: 170px;
  margin-top: 10px;
  display: flex;
  gap: 30px;
`;

const Orders = () => {
  return (
    <div>
      <Navbar />
      <Navbar2 />
      <MainWrapper>
        <Sidebar>
          <Link
            to="/orders"
            style={{ textDecoration: "none", color: "inherit" }}>
            <SidebarItem>
              <DiningIcon className="icon" />
              <span>Meal orders</span>
            </SidebarItem>
          </Link>
          <Link
            to="/orders/bookings"
            style={{ textDecoration: "none", color: "inherit" }}>
            <SidebarItem>
              <KingBedIcon className="icon" />
              <span>My Bookings</span>
            </SidebarItem>
          </Link>
          <Link
            to="/orders/tickets"
            style={{ textDecoration: "none", color: "inherit" }}>
            <SidebarItem>
              <ShopIcon className="icon" />
              <span>My Tickets</span>
            </SidebarItem>
          </Link>
        </Sidebar>

        <Wrapper>
          <Outlet />
        </Wrapper>
      </MainWrapper>
    </div>
  );
};

export default Orders;
