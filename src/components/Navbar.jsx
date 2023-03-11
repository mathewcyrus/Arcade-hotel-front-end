import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import title from "../images/title.svg";
import albert from "../images/albert.jpg";
import KingBedIcon from "@mui/icons-material/KingBed";
import DiningIcon from "@mui/icons-material/Dining";
import HomeIcon from "@mui/icons-material/Home";
import CollectionsIcon from "@mui/icons-material/Collections";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import CommentIcon from "@mui/icons-material/Comment";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
const MainContainer = styled.div`
  position: relative;
  position: fixed;
  width: 100vw;
  z-index: 3;
  height: 60px;
`;
const Container = styled.div`
  background-color: ${(props) => (props.type ? "cart" && "red" : "")};
  width: 100%;
  height: 45px;
  margin-top: 0px;
  max-width: 1366px;
  padding-top: 15px;
  overflow: hidden;
  color: white;
  display: flex;
  place-items: center;
  position: fixed;
`;
const Div = styled.div`
  display: none;
  position: absolute;
  background-color: black;
  max-width: 1366px;
  border-bottom: 2px solid orange;
  bottom: -1000px;
  width: 100%;
  height: 60px;
`;
const NavContainer = styled.div`
  height: 100%;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 0px 80px;
`;
const Logo = styled.img`
  margin-top: -2px;
  flex: 1;
  margin-left: -145px;
  height: 50px;
  width: 200px;
`;
const NavLi = styled.ul`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: bold;
  margin-right: 30px;
  gap: 10px;
`;

const ListItem = styled(NavLink)`
  display: flex;
  font-size: 14px;
  color: white;
  cursor: pointer;
  place-items: center;
  gap: 5px;
  /* border-radius: 15px; */
  padding: 4px;

  &:hover {
    color: orange;
    transition: 0.4s ease-in-out;
  }
  &.active {
    color: orange;
    font-weight: 700;
    font-size: 16px;
    border-bottom: 2px solid orange;
  }
`;

const SignContainer = styled.div`
  z-index: 2;
  height: 100%;
  display: flex;
  place-items: center;
  gap: 10px;
`;
const LogOut = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  span {
    font-weight: 700;
  }
`;

const Login = styled.button`
  font-size: 12px;
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60%;
  cursor: pointer;
  width: 100px;
  gap: 5px;
  background-color: orange;
`;
const Register = styled(Login)``;
const Img = styled.img`
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 50%;
`;
const Shopping = styled.div`
  position: relative;
  color: black;
  display: flex;
  justify-content: center;
  height: 30px;
  width: 30px;
  margin-right: 5px;
  border-radius: 50%;
  align-items: center;
  background-color: orange;
`;
const Counter = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 15px;
  width: 15px;
  border-radius: 50px;
`;
const Chat = styled.div`
  height: 25px;
  width: 25px;
  padding: 5px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  display: none;
`;

const Navbar = ({ type }) => {
  const cartQuantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);
  const mainref = useRef(null);
  const chatref = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainref.current,
        start: "top 600px",
        end: "+=100",
        toggleActions: "restart reset",
        scrub: true,
      },
    });
    tl.to(mainref.current, {
      display: "block",
      position: "fixed",
      top: 0,
    });
    tl.to(chatref.current, {
      display: "block",
    });
  }, []);

  return (
    <MainContainer>
      {type === "home" && <Div ref={mainref} />}
      <Container>
        <NavContainer>
          <Logo src={title} />
          <NavLi>
            <ListItem
              to="/"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <HomeIcon />
              Home
            </ListItem>
            <ListItem
              to="/booking"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <KingBedIcon />
              Booking
            </ListItem>
            <ListItem
              to="/Arcade-hotel-meals"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <DiningIcon />
              Dishes
            </ListItem>
            <ListItem
              to="/orders"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <DensitySmallIcon />
              Orders
            </ListItem>

            <ListItem
              to="/gallery"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <CollectionsIcon />
              Gallery
            </ListItem>
            <ListItem
              to="/about-us"
              style={{ textDecoration: "none" }}
              activeclassname="active">
              <InfoIcon />
              About us
            </ListItem>
          </NavLi>
          <SignContainer className="sign">
            {type !== "cart" && (
              <Link to="/cart" style={{ textDecoration: "none" }}>
                <Shopping>
                  <ShoppingCartIcon />
                  {cartQuantity >= 1 && <Counter>{cartQuantity}</Counter>}
                </Shopping>
              </Link>
            )}
            <Chat ref={chatref}>
              <CommentIcon style={{ color: "black" }} />
            </Chat>
            {user && (
              <ListItem
                to="/account"
                target="_blank"
                style={{ textDecoration: "none" }}
                activeclassname="active">
                <LogOut>
                  <Img src={albert} />
                  <span>{user.firstname}</span>
                  <Login>
                    <LoginIcon />
                    Log out
                  </Login>
                </LogOut>
              </ListItem>
            )}
            {!user && (
              <>
                {type !== "login" && (
                  <Link to="/login" style={{ textDecoration: "none" }}>
                    <Login>
                      <LoginIcon />
                      Login
                    </Login>
                  </Link>
                )}
                {type !== "register" && (
                  <Link to="/register" style={{ textDecoration: "none" }}>
                    <Register>
                      <PersonAddAltIcon />
                      Register
                    </Register>
                  </Link>
                )}
              </>
            )}
          </SignContainer>
        </NavContainer>
      </Container>
    </MainContainer>
  );
};

export default Navbar;
