import styled from "styled-components";
import background from "../images/background.svg";
import PoolImage from "../images/Poolimage.jpg";
import Vase from "../images/Vase.jpg";
import curve from "../images/curve.svg";
import reagan from "../images/reagan.jpg";
import lobby from "../images/lobby.jpg";
import lefteris from "../images/Lefteris.jpg";
import Presidential from "../images/room2.jpg";
import rezha from "../images/rezha.jpg";

import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import Footer from "../components/Footer";

import CommentIcon from "@mui/icons-material/Comment";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import CarouselItem from "../components/CarouselItem";

const Maindiv = styled.div`
  position: relative;
`;
const Div = styled.div`
  background: #3395eb;
  overflow: hidden;
  background-repeat: no-repeat;
  position: relative;
  margin: 0px;
  height: 100vh;
  max-height: 766px;
  border: none;
`;
const Div2 = styled(Div)`
  background-image: url(${rezha});
  background-size: cover;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  background-position: center;
  height: 100vh;
`;
const Curve = styled.div`
  background-image: url(${curve});
  /* background-repeat: no-repeat; */
  position: absolute;
  width: 100%;
  height: 400px;
  bottom: -17px;
  /* top: 242px; */
`;
const Descontainer = styled.div`
  margin: 0px 145px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 262px;
  margin-top: 80px;
`;

const Motto = styled.div`
  font-size: 50px;
  color: white;
  font-weight: bold;
`;
const Text = styled.span`
  background-image: Radial-gradient(#ffff00 15%, #500064 50%, #ffa500 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 70px;
`;
const Text2 = styled.span`
  color: white;
  font-size: 70px;
`;
const Text3 = styled.span`
  background-image: Radial-gradient(#ffff00 15%, #500064 50%, #ffa500 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 80px;
`;
const Img = styled.img`
  height: 250px;
  width: 250px;
  border-radius: 50%;
  object-fit: cover;
`;

const Sideimage = styled.div`
  position: absolute;
  top: 380px;
  background: #cc672a;
  height: 466px;
  width: 228px;
  border-radius: 200px 0px 0px 200px;
  transform: translate(1121px);
`;
const Sideimagecopy = styled(Sideimage)`
  background-image: url(${lobby});
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: overlay;
  top: 0px;
  transform: translate(0px);
`;

const MessageIcon = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  z-index: 2;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background-color: orange;
`;
const BarSection = styled.div`
  display: flex;
  flex-direction: column;
  height: 750px;
  position: relative;
  /* background-color: black; */
`;
const Bar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 700;
  height: 30px;
  color: orange;
  /* background-color: black; */
  width: 100%;
`;
const Section = styled.div`
  display: flex;

  height: 700px;
`;
const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
  object-fit: cover;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 0px 15px;
  flex: 1;
  color: black;
  /* background-color: whitesmoke; */
`;
const SectionTitle = styled.div`
  text-align: center;
  margin-top: 5px;
  font-size: 30px;
  border-bottom: 1px solid lightgray;
  color: Orange;
  height: 40px;
`;
const SectionDescription = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 0px 10px;
`;
const ButtonCont = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding: 0px 20px;
`;
const Reserve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  background-color: orange;
  margin-top: 10px;
  border: 1px solid lightgray;
  height: 40px;
  box-shadow: 1px 1px 10px lightgray;
  cursor: pointer;
  flex: 1;
  &:hover {
    padding: 1px;
  }
  &.bar {
    flex: none;
    height: 30px;
    width: 300px;
    color: inherit;
    margin-bottom: 10px;
  }
`;

const OtherBars = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -10px;
  width: 100%;
  height: 100%;
  color: black;
  gap: 30px;
`;
const AlpineBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 5px 5px 10px lightgray;
  align-items: center;
  background-color: whitesmoke;
  /* padding: 0px 20px; */
  height: 300px;
  width: 650px;
  /* overflow: hidden; */
`;
const BarImage = styled.div`
  width: 100%;
  height: 150px;
`;
const BarName = styled.div`
  color: orange;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  padding: 5px;
  width: 90%;
  border-bottom: 1px solid lightgray;
`;
const BarDescription = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 10px 30px;
`;
const ReserveCont = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const RoomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-top: -30px;
  /* margin-bottom */
  /* background-color: black; */
  height: 500px;
`;
const RoomCard = styled.div`
  width: 300px;
  height: 430px;
  background-color: orange;
  display: grid;
  box-shadow: 5px 5px 10px lightgray;
  border-radius: 10px;
  overflow: hidden;
  place-items: center;
  :nth-child(2) {
    height: 480px;
    width: 330px;
  }
  & .roomImage {
    /* height: 150px; */
  }
`;
const RoomType = styled.div`
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 18px;
`;
const RPrice = styled.div`
  display: flex;
  align-items: center;
  height: 10px;
  span {
    font-size: 24px;
    font-weight: 700;
  }
  p {
    font-size: 12px;
  }
`;
const RoomDetails = styled.div`
  height: 100px;
  font-size: 14px;
  text-align: center;
`;
const Features = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;

  margin-top: -20px;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    font-weight: 700;
  }
`;
const RoomBtn = styled.div`
  background-color: white;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: 150px;
  font-size: 18px;
  font-weight: 700;
`;
const Home = () => {
  return (
    <Maindiv>
      <Div>
        <Div2>
          <Navbar type="home" className="maincontainer" />
          <Descontainer>
            <Motto>
              Experience <Text> Luxury</Text> <br />
              <Text2>&</Text2> <Text3>Great Taste</Text3>
            </Motto>
            <Img src={PoolImage} className="animate" />
          </Descontainer>
          <Curve />
          <MessageIcon>
            <CommentIcon />
          </MessageIcon>
        </Div2>
      </Div>
      <CarouselItem />

      {/* <Sideimage>
        <Sideimagecopy></Sideimagecopy>
      </Sideimage> */}
      <BarSection>
        <Bar>Lounges And Bars</Bar>
        <Section>
          <ImageContainer>
            <Image src={Vase} />
          </ImageContainer>
          <TextContainer>
            <SectionTitle> The Vase Bar</SectionTitle>
            <SectionDescription>
              Located in the heart of the city, our bustling bar is the perfect
              spot for a night out on the town. With a vibrant atmosphere and a
              diverse selection of drinks, you'll feel the energy as soon as you
              walk through the door. Our expert mixologists are known for their
              creative cocktails, and they're always happy to recommend a drink
              or whip up something custom to suit your tastes. We also offer a
              range of beers, wines, and spirits, so there's something for
              everyone.
            </SectionDescription>
            <ButtonCont>
              <Reserve>More about Vase</Reserve>
              <Reserve>Reserve A Table</Reserve>
            </ButtonCont>
          </TextContainer>
        </Section>
        <OtherBars>
          <AlpineBar>
            <BarImage>
              <Image src={lefteris} />
            </BarImage>
            <BarName>Alpine Lounge</BarName>
            <BarDescription>
              Unwind in our hotel's cozy bar, offering a wide selection of
              drinks, snacks, and TVs for sports or news. Perfect for a romantic
              date or a night out with friends.
            </BarDescription>
            <ReserveCont>
              <Reserve className="bar">Read More about Alpine</Reserve>
            </ReserveCont>
          </AlpineBar>
          <AlpineBar>
            <BarImage>
              <Image src={Vase} />
            </BarImage>
            <BarName>Orchard Bar</BarName>
            <BarDescription>
              Explore tranquility with the panoramic view of Nairobi city park
              at Alpine Rounge.This haven is ideal for a swanky night with your
              date.
            </BarDescription>
            <ReserveCont>
              <Reserve className="bar">Read More about Alpine</Reserve>
            </ReserveCont>
          </AlpineBar>
        </OtherBars>
      </BarSection>
      <RoomSection>
        <RoomCard>
          <Image src={Presidential} className="roomImage" />
          <RoomType>Deluxe Rooms</RoomType>
          <RPrice>
            <span>$500</span>
            <p>/night</p>
          </RPrice>
          <RoomDetails>
            Unwind in our hotel's cozy bar, offering a wide selection of drinks,
            snacks, and TVs for sports or news. Perfect for a romantic date or a
            night out with friends.
          </RoomDetails>
          <Features>
            <div>
              <CheckBoxOutlinedIcon /> Fulltime room Service
            </div>
            <div>
              <CheckBoxOutlinedIcon /> Spacious Rooms
            </div>
          </Features>
          <RoomBtn>Reserve Online</RoomBtn>
        </RoomCard>
        <RoomCard>
          <Image src={Presidential} className="roomImage" />
          <RoomType>Deluxe Rooms</RoomType>
          <RPrice>
            <span>$500</span>
            <p>/night</p>
          </RPrice>
          <RoomDetails>
            Unwind in our hotel's cozy bar, offering a wide selection of drinks,
            snacks, and TVs for sports or news. Perfect for a romantic date or a
            night out with friends.
          </RoomDetails>
          <Features>
            <div>
              <CheckBoxOutlinedIcon /> Fulltime room Service
            </div>
            <div>
              <CheckBoxOutlinedIcon /> Spacious Rooms
            </div>
          </Features>
          <RoomBtn>Reserve Online</RoomBtn>
        </RoomCard>
        <RoomCard>
          <Image src={Presidential} className="roomImage" />
          <RoomType>Deluxe Rooms</RoomType>
          <RPrice>
            <span>$500</span>
            <p>/night</p>
          </RPrice>
          <RoomDetails>
            Unwind in our hotel's cozy bar, offering a wide selection of drinks,
            snacks, and TVs for sports or news. Perfect for a romantic date or a
            night out with friends.
          </RoomDetails>
          <Features>
            <div>
              <CheckBoxOutlinedIcon /> Fulltime room Service
            </div>
            <div>
              <CheckBoxOutlinedIcon /> Spacious Rooms
            </div>
          </Features>
          <RoomBtn>Reserve Online</RoomBtn>
        </RoomCard>
      </RoomSection>

      {/* <Featured /> */}
      <Footer />
    </Maindiv>
  );
};

export default Home;
