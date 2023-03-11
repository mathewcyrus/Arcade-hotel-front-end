import styled from "styled-components";
import Art from "../../images/Art.jpg";

import QRCode from "qrcode.react";
import { useEffect } from "react";
import { useState } from "react";
import { dataRequest } from "../../hooks/requestMethods";
import { Link } from "react-router-dom";
const Main = styled.div`
  display: flex;
  flex-direction: column;
`;
const Div = styled.div`
  height: 450px;
  width: 350px;
  box-shadow: inset 5px 10px 10px lightgray;
`;

const ImageDiv = styled.div`
  position: relative;
  height: 200px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Title = styled.div`
  position: absolute;
  width: max-content;
  bottom: 20px;
  background-color: #000000b7;
  color: orange;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  border-radius: 0px 10px 10px 0px;
`;
const Details = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 2fr);
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100px;
  height: 50px;
  margin-top: 10px;

  span {
    margin-bottom: -10px;
    color: gray;
    font-weight: 700;
  }
  p {
    font-size: 12px;
    font-weight: 700;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Code = styled.div`
  margin-top: -20px;
`;
const Hotelnme = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  font-size: 18px;
  p {
    font-style: italic;
    font-size: 14px;
    margin-top: 0px;
  }
`;
const Card = styled.div``;
const TicketsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
`;

const Header = styled.div`
  & .title {
    font-size: 24px;
  }
  & .text {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;
const Navigation = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  width: 800px;
  height: 40px;
  margin-top: 10px;
  border-bottom: 1px solid lightgray;
`;
const NavItem = styled.div`
  font-size: 16px;
  width: max-content;
  padding: 5px 5px;
  &:hover {
    border-bottom: 2px solid var(--brand-color);
    cursor: pointer;
  }
  &.active {
    border-bottom: 2px solid var(--brand-color);
    font-weight: 700;
  }
`;
const Wrapper = styled.div`
  margin-top: 30px;
  width: 800px;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 22px;
    justify-content: center;
    span {
      font-size: 14px;
      &:hover {
        color: var(--brand-color);
      }
    }
  }
`;

const Tickets = () => {
  const [tickets, setTickets] = useState([]);
  const [active, setActive] = useState("upcoming");

  const handleClick = (e) => {
    const clicked = e.target.innerText.toLowerCase();
    if (clicked !== active) {
      setActive(clicked);
    }
  };
  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const res = await dataRequest.get("/tickets");
        setTickets(res.data);
      } catch (error) {}
    };
    fetchTickets();
  }, []);

  return (
    <Main>
      <Card>
        <Header>
          <div className="title">Manage Your Tickets</div>
          <div className="text">
            View, reschedule or cancel your bookings and easily book again.
          </div>
          <div className="text">Time Zone: East Africa Time (GMT+3)</div>
        </Header>
        <Navigation>
          <NavItem
            className={active === "upcoming" ? "active" : ""}
            onClick={handleClick}>
            Upcoming
          </NavItem>
          <NavItem
            className={active === "history" ? "active" : ""}
            onClick={handleClick}>
            History
          </NavItem>
        </Navigation>
        <Wrapper>
          {active === "upcoming" && (
            <div id="no_bookings">
              You have no upcoming bookings right now
              <Link to="/book-online" style={{ color: "inherit" }}>
                <span>Check out our services</span>
              </Link>
            </div>
          )}
          {active === "history" && (
            <div id="history">
              We Look forward to seeing you
              <Link to="/book-online" style={{ color: "inherit" }}>
                <span>Check out our services</span>
              </Link>
            </div>
          )}
        </Wrapper>
      </Card>
      {tickets.length === 0 ? (
        <h4>You have no tickets bought</h4>
      ) : (
        <TicketsWrapper>
          {tickets.map((ticket) => (
            <Div key={ticket._id}>
              <ImageDiv>
                <Image src={Art} />
                <Title>{ticket.eventname}</Title>
              </ImageDiv>
              <Details>
                <Info>
                  <span>Venue</span>
                  <p>{ticket.venue}</p>
                </Info>
                <Info>
                  <span>Date</span>
                  <p>{ticket.eventdate}</p>
                </Info>
                <Info>
                  <span>Time</span>
                  <p> {ticket.eventtime}</p>
                </Info>
                <Info>
                  <span>Price</span>
                  <p>{ticket.totalprice}</p>
                </Info>
                <Info>
                  <span>Seats</span>
                  <p>{ticket.seats}</p>
                </Info>
                <Info>
                  <span>People</span>
                  <p>{ticket.people} people</p>
                </Info>
              </Details>
              <Footer>
                <Hotelnme>
                  Arcade Hotel Events <p>www.arcadehotel.com</p>
                </Hotelnme>
                <Code>
                  <QRCode
                    value={ticket._id}
                    size={128}
                    level="H"
                    includeMargin
                  />
                </Code>
              </Footer>
            </Div>
          ))}
        </TicketsWrapper>
      )}
    </Main>
  );
};

export default Tickets;
