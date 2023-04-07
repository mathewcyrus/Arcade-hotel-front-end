import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CarouselItem from "../components/CarouselItem";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import Result from "../components/Result";
import Office from "../components/Office";
import Event from "../components/Event";
import Hall from "../components/Hall";
import Ground from "../components/Ground";
// import { rooms } from "../data";
import KeyIcon from "@mui/icons-material/Key";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import WarehouseIcon from "@mui/icons-material/Warehouse";
import EventIcon from "@mui/icons-material/Event";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Footer from "../components/Footer";
// import { dataRequest } from "../requestMethods";
import useFetch from "../hooks/fetchMethod";
import { dataRequest } from "../hooks/requestMethods";
import { searchContext } from "../context/searchContext";

const Div = styled.div`
  position: relative;
`;
const Wrapper = styled.div`
  margin-top: 50px;
  display: flex;
  gap: 30px;
`;
const ResultList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  /* grid-template-columns: repeat(3, 1fr); */
`;
const CategoryContainer = styled.div`
  background-color: #000000f9;
  z-index: 2;
  position: absolute;
  position: sticky;
  top: 125px;
  margin: -25px 100px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  place-items: center;
  border: 2px solid orange;
  border-radius: 10px;
`;
const CategoryWrapper = styled.div`
  margin: 0px;
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
`;
const OptionList = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  width: 200px;
  padding: 10px;
  height: max-content;
  border-radius: 0px 0px 10px 10px;
  background-color: #000000d5;
  top: 50.5px;
  text-decoration: none;
`;
const Category = styled.div`
  width: 25%;
  border-right: ${(props) =>
    props.type ? "ground" && "none" : "2px solid orange"};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3395ebc8;
    transition: 0.4s ease-in-out;
    width: 25.5%;
    border-radius: 0px 7.5px 7.5px 0px;
    :first-child {
      border-radius: 7.5px 5px 5px 7.5px;
    }
    cursor: pointer;

    ${OptionList} {
      display: block;
    }
  }
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  font-weight: bold;
  color: white;
`;
const Option = styled.div`
  height: 20px;
  padding: 10px;
  color: white;
  text-align: center;

  &:hover {
    color: #3395eb;
    border: 1px solid #3395eb;
    border-radius: 5px;
    font-weight: 700;
    cursor: pointer;
  }
`;
const Recommedations = styled.form`
  position: sticky;
  top: 180px;
  width: 330px;
  height: max-content;
  border: 1px solid #3395eb;
  border-radius: 10px;
  margin-left: 40px;
  background-color: orange;
  padding: 5px;
  margin-bottom: 40px;
`;
const SearchText = styled.div`
  text-align: center;
  color: black;
  margin-top: 3px;
  font-size: 24px;
`;
const SelectedRoom = styled.div`
  display: flex;
  place-items: center;
  justify-content: space-between;
`;
const Text = styled.h3`
  font-size: 14px;
  font-weight: 500;
  &::after {
    content: " :";
    font-weight: bold;
  }
`;
const OptionsSelect = styled.div`
  /* margin-top: -10px; */
`;
const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
`;
const Span = styled.div`
  text-align: left;
  font-size: 14px;
  margin-top: ${(props) => props.type === "date" && "-10px"};
  padding: 5px;
  background-color: white;
  width: ${(props) => props.type === "category" && "145px"};
  height: 20px;
  color: lightgray;
  cursor: pointer;
`;
const Container = styled.div`
  margin-top: -20px;
  margin-left: 20px;
`;
const DateSelection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -14px;
`;
const OptionText = styled.div`
  font-size: 18px;
  margin: 10px 0px;
`;
const Input = styled.input`
  height: 20px;
  width: 70px;
  outline: none;
  border: none;
`;
const SearchButton = styled.button`
  padding: 5px;
  border-radius: 5px;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
  border: none;
  cursor: pointer;
  background-color: #3395eb;
  &:hover {
    transform: scale(1.01) translateY(-1px);
    transition: 0.3s ease-in-out;
  }
`;
const DateContainer = styled.div`
  position: absolute;
  top: 65px;
  left: 250px;
  border: 1px solid #3395eb;
  border-radius: 5px;
  overflow: hidden;
`;
const Select = styled.select`
  height: 20px;
  /* width: 70px; */
  outline: none;
  border: none;
  color: lightgray;
`;
const BedOptions = styled.option`
  color: black;
`;
const Booking = () => {
  //CONTROLS DISPLAY OF COMPONENTS ON CLICK
  const [activeCategory, setActiveCategory] = useState("");
  //OPENS THE DATE MODAL
  const [openDate, setOpenDate] = useState(false);
  //HOLDS SET DATE RANGES
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  // OPTION SELECTION FOR BEDROOMS, NO OF ADULTS AND CHILDRENS
  const [options, setOptions] = useState({});
  const handleOptionChange = (e) => {
    setOptions((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  //FETCHING DATA FROM DB FOR EVENTS
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const getEvents = async () => {
      try {
        const res = await dataRequest.get("/events");
        setEvents(res.data);
      } catch {}
    };
    getEvents();
  }, []);

  // FETCHING ROOMS FROM THE DB
  const { data, loading, reFetchData } = useFetch(
    `http://localhost:8800/api/rooms?start_date=${
      dates[0]?.startDate || ""
    }&end_date=${dates[0]?.endDate || ""}`
  );

  const { dispatch } = useContext(searchContext);
  //REFECHING ROOMS USING THE QUERY PARAMETERS OF START DATE AND END DATE
  const refetchRooms = (e) => {
    e.preventDefault();
    dispatch({ type: "NEW_SEARCH", payload: { dates, options } });
    options && dates && reFetchData();
  };
  // FILTERING DIFFERENT ROOM CATEGORIES
  const regularRooms = data.filter((room) => room.category === "regular");
  const executiveRooms = data.filter((room) => room.category === "executive");
  const ballRooms = data.filter((room) => room.category === "Ballrooms");
  const presidentialRooms = data.filter(
    (room) => room.category === "presidential"
  );

  //RENDERS DIFFERENT COMPONENTS CONDITIONALY DEPENDING ON THE CASE
  const renderCurrentSection = () => {
    switch (activeCategory) {
      case "Regular Rooms":
        return regularRooms.map((room) => (
          <Result room={room} key={room._id} activeCategory="Regular Rooms" />
        ));
      case "Executive Rooms":
        return executiveRooms.map((room) => (
          <Result room={room} key={room._id} activeCategory="Executive Rooms" />
        ));
      case "Presidential Rooms":
        return presidentialRooms.map((room) => (
          <Result
            room={room}
            key={room._id}
            activeCategory="Presidential rooms"
          />
        ));
      case "Ballrooms":
        return ballRooms.map((room) => (
          <Result room={room} key={room._id} activeCategory="Ballrooms" />
        ));
      case "Party Rooms":
        return ballRooms.map((room) => (
          <Result room={room} key={room._id} activeCategory="Party Rooms" />
        ));
      case "office":
        return <Office activeCategory="office" />;
      case "events":
        return events.map((singleevent) => (
          <Event
            singleevent={singleevent}
            key={singleevent._id}
            activeCategory="events"
          />
        ));
      case "halls":
        return <Hall activeCategory="hall" />;
      case "grounds":
        return <Ground activeCategory="grounds" />;
      default:
        break;
    }
  };
  return (
    <>
      <Div>
        <Navbar type="booking" />
        <Navbar2 />
        {/* RENDERS NAVIGATION BAR  */}
        <CategoryContainer>
          <CategoryWrapper>
            <Category>
              <Title>
                <KeyIcon />
                Rooms
              </Title>
              <OptionList>
                <Link to={"regular-rooms"} style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("Regular Rooms")}>
                    Regular rooms
                  </Option>
                </Link>

                <Link to={"executive"} style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("Executive Rooms")}>
                    Executive rooms
                  </Option>
                </Link>
                <Link
                  to={"presidentialsuites"}
                  style={{ textDecoration: "none" }}>
                  <Option
                    onClick={() => setActiveCategory("Presidential Rooms")}>
                    Presidentials suites
                  </Option>
                </Link>
                <Link to={"ballrooms"} style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("Ballrooms")}>
                    BallRooms
                  </Option>
                </Link>
                <Link to={"partyrooms"} style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("Party Rooms")}>
                    Party Rooms
                  </Option>
                </Link>
              </OptionList>
            </Category>
            <Category>
              <Link to={"offices"} style={{ textDecoration: "none" }}>
                <Title onClick={() => setActiveCategory("office")}>
                  <BusinessCenterIcon />
                  Offices
                </Title>
              </Link>
            </Category>
            <Category>
              <Title>
                <WarehouseIcon />
                Halls
              </Title>

              <OptionList>
                <Link
                  to={"conference-halls"}
                  style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("halls")}>
                    Conference Halls
                  </Option>
                </Link>
                <Link to={"theatres"} style={{ textDecoration: "none" }}>
                  <Option onClick={() => setActiveCategory("halls")}>
                    Theatre
                  </Option>
                </Link>
              </OptionList>
            </Category>
            <Category>
              <Link to={"events"} style={{ textDecoration: "none" }}>
                <Title onClick={() => setActiveCategory("events")}>
                  <EventIcon />
                  Upcoming Events
                </Title>
              </Link>
            </Category>
            <Category type="grounds">
              <Link to={"grounds"} style={{ textDecoration: "none" }}>
                <Title onClick={() => setActiveCategory("grounds")}>
                  <LocationOnIcon />
                  Grounds
                </Title>
              </Link>
            </Category>
          </CategoryWrapper>
        </CategoryContainer>

        {/* CAROUSEL ITEM */}
        {!activeCategory && <CarouselItem />}

        {/* RENDERS THE SEARCH BAR  ALONG SIDE ROOM RESULT */}
        {activeCategory && (
          //RESULTS OF ROOMS ETC ARE RENDRED ONLY IF THERE IS A SELECTED SECTION
          // WRAPPER HAS 2 COMPONENTS: SEARCH BAR AND THE RENDERED SECTION
          <Wrapper>
            {(activeCategory === "Regular Rooms" ||
              activeCategory === "Executive Rooms" ||
              activeCategory === "Presidential Rooms" ||
              activeCategory === "Ballrooms" ||
              activeCategory === "Party Rooms") && (
              <Recommedations>
                <SearchText> Search for rooms</SearchText>
                <SelectedRoom>
                  {/* SHOWS WHAT ROOOM TYPE IS SELECTED */}
                  <Text>Room type:</Text>
                  <Span type="category"> {activeCategory}</Span>
                </SelectedRoom>
                {/* RENDERS THE DATES INPUTS */}
                <DateSelection>
                  <Text>check-in Dates:</Text>
                  <Span onClick={() => setOpenDate(!openDate)} type="date">
                    {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                      dates[0].endDate,
                      "dd/MM/yyyy"
                    )} `}
                  </Span>
                  {/* REACT DATE RANGE CONTAINER */}
                  {openDate && (
                    <DateContainer>
                      <DateRange
                        editableDateInputs={true}
                        onChange={(item) => setDates([item.selection])}
                        moveRangeOnFirstSelection={false}
                        ranges={dates}
                      />
                    </DateContainer>
                  )}
                </DateSelection>
                <OptionsSelect>
                  <OptionText>Options:</OptionText>
                  <Container>
                    {(activeCategory === "Regular Rooms" ||
                      activeCategory === "Executive Rooms" ||
                      activeCategory === "Presidential Rooms") && (
                      <OptionContainer>
                        <Text>Bedrooms </Text>
                        <Select
                          required
                          defaultValue="1"
                          onChange={handleOptionChange}
                          id="bedrooms">
                          <BedOptions value="1 bedroom">1 bedroom</BedOptions>
                          <BedOptions value="2 bedroom">2 bedroom</BedOptions>
                        </Select>
                      </OptionContainer>
                    )}
                    {(activeCategory === "Ballrooms" ||
                      activeCategory === "Party Rooms") && (
                      <>
                        <OptionContainer>
                          <Text>Start time </Text>
                          <Input type="time" />
                        </OptionContainer>
                        <OptionContainer>
                          <Text>End time</Text>
                          <Input type="time" />
                        </OptionContainer>
                      </>
                    )}
                    <OptionContainer>
                      <Text>Adults</Text>
                      <Input
                        onChange={handleOptionChange}
                        placeholder="1"
                        defaultValue="1"
                        min={1}
                        id="adults"
                        required
                        type="number"
                      />
                    </OptionContainer>
                    <OptionContainer>
                      <Text>Children</Text>
                      <Input
                        placeholder="0"
                        onChange={handleOptionChange}
                        id="children"
                        min={0}
                        defaultValue="0"
                        type="number"
                        required
                      />
                    </OptionContainer>
                  </Container>
                </OptionsSelect>
                <SearchButton onClick={refetchRooms}>Search</SearchButton>
              </Recommedations>
            )}
            {/* RENDERS ROOM RESULT BASED ON SEARCH AND ALSO CONDITINALLY RENDERS OTHER COMPONENTS ON THE MENU */}
            {loading ? (
              "loading please wait"
            ) : (
              <ResultList>{renderCurrentSection()}</ResultList>
            )}
          </Wrapper>
        )}
      </Div>
      <Footer />
    </>
  );
};
export default Booking;
