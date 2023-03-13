import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Dish from "../components/Dish";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Navbar2 from "../components/Navbar2";
import useFetch from "../hooks/fetchMethod";

const Div = styled.div`
  /* background-color: #0f0c0a; */
  /* color: white; */
  margin-bottom: 20px;
  position: relative;
`;

const Wrapper = styled.div`
  margin: 0px 80px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;

const Info = styled.h1`
  margin-top: -5px;
  text-align: center;
  font-size: 40px;
  /* color: white; */
`;
const OrderText = styled.h3`
  /* color: white; */
  text-align: center;
  margin-top: -15px;
`;
const Span = styled.span`
  color: orange;
`;
const CategoryContainer = styled.div``;
const FoodWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: -5px;
  gap: 10px;
  padding: 0px 80px;
  position: relative;
`;
const Heading = styled.div`
  font-size: 20px;
  font-weight: 700;
  border-bottom: 1px solid lightgray;
  text-align: center;
  padding-bottom: 5px;
`;
const Form = styled.form`
  height: 50px;
  display: flex;
  /* align-items: flex-end; */
  align-items: center;
  justify-content: end;
  input {
    border: 1px solid orange;
    padding: 10px;
    border-radius: 10px 0px 0px 10px;
    height: 20px;
    outline: none;
    width: 300px;
  }
  button {
    all: unset;
    border: 1px solid orange;
    background-color: orange;
    padding: 10px;
    height: 20px;
    width: 100px;
    border-radius: 0px 10px 10px 0px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
const SearchCont = styled.div`
  margin-top: -30px;
  p {
    &.result {
      margin-left: 70px;
    }
  }
`;
const Filters = styled.div``;
const Container = styled.div`
  font-size: 14px;
  display: grid;
  padding: 10px;
  gap: 20px;
  /* margin-left: 30px; */
  margin-bottom: 30px;
  grid-template-columns: repeat(10, 1fr);
  div {
    width: max-content;
    cursor: pointer;
    padding: 5px;
    /* border-bottom: 1px solid orange; */
    &.active {
      font-weight: 700;
      border-bottom: 2px solid orange;
    }
  }
`;
const Dishes = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [searchword, setSearchWord] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  console.log(searchword);
  //fETCHING DISHES FROM DB
  const { data, error, loading } = useFetch("http://localhost:8800/api/dishes");

  //getting search result using lineaer algorithim
  const searchForDishes = (e) => {
    e?.preventDefault();
    const searchresult = data.filter((dish) => {
      const dishName = dish.mealname.toLowerCase();
      const dishDesc = dish.description.toLowerCase();
      const search = searchword.toLowerCase();
      return dishName.includes(search) || dishDesc.includes(search);
    });
    setSearchresult(searchresult);
  };
  useEffect(() => {
    searchForDishes();
  }, [searchword]);

  return (
    <>
      <Div>
        <Navbar type="dishes" />
        <Navbar2 />
        {/* <CarouselItem /> */}
        <Wrapper>
          {/* <InfoContainer>
            <Info>
              Enjoy exclusive<Span> Meals </Span>prepared by the best
              <Span> Award winning </Span>chefs and
              <Span> Worldwide collection of food varieties.</Span>
            </Info>
            <OrderText>
              From the convenience of your home by
              <Span> Ordering Online </Span> or visit us at our
              <Link>
                <Span> Restaurants.</Span>
              </Link>
            </OrderText>
          </InfoContainer> */}
          <Form onSubmit={searchForDishes}>
            <input
              placeholder="search for meals"
              onChange={(e) => setSearchWord(e.target.value)}
            />
            <button type="submit">
              <SearchIcon />
            </button>
          </Form>
          <Filters>
            <Heading>Filter throught our meal categories</Heading>
            <Container>
              <div
                className={activeCategory === "" ? "active" : ""}
                onClick={() => setActiveCategory("")}>
                all dishes{" "}
              </div>
              <div
                className={activeCategory === "breakfast" ? "active" : ""}
                onClick={() => setActiveCategory("breakfast")}>
                continental breakfast
              </div>
              <div
                className={activeCategory === "sandwiches" ? "active" : ""}
                onClick={() => setActiveCategory("sandwiches")}>
                Sandwiches and wraps
              </div>
              <div
                className={activeCategory === "salad" ? "active" : ""}
                onClick={() => setActiveCategory("salad")}>
                salads
              </div>
              <div
                className={activeCategory === "burger" ? "active" : ""}
                onClick={() => setActiveCategory("burger")}>
                Burgers and Fries
              </div>
              <div
                className={activeCategory === "pasta" ? "active" : ""}
                onClick={() => setActiveCategory("pasta")}>
                Pasta Dishes
              </div>
              <div
                className={activeCategory === "seafood" ? "active" : ""}
                onClick={() => setActiveCategory("seafood")}>
                SeaFood Dishes
              </div>
              <div
                className={activeCategory === "steak" ? "active" : ""}
                onClick={() => setActiveCategory("steak")}>
                Steak and Chops
              </div>
              <div
                className={activeCategory === "dessert" ? "active" : ""}
                onClick={() => setActiveCategory("dessert")}>
                Deserts
              </div>
            </Container>
          </Filters>

          <CategoryContainer>
            {searchresult.length < 1 && searchword !== "" ? (
              <p>
                no result were found for "<b>{searchword}</b>
              </p>
            ) : searchresult.length >= 1 && searchword !== "" ? (
              <SearchCont>
                <p className="result">
                  search results for "<b>{searchword}</b>"
                </p>

                <FoodWrapper>
                  {searchresult.map((meal) => (
                    <Dish meal={meal} key={meal._id} />
                  ))}
                </FoodWrapper>
              </SearchCont>
            ) : !activeCategory ? (
              <FoodWrapper>
                {data.map((meal) => (
                  <Dish meal={meal} key={meal._id} />
                ))}
              </FoodWrapper>
            ) : (
              <FoodWrapper>
                {data
                  .filter((meal) =>
                    meal.category.toLowerCase().includes(activeCategory)
                  )
                  .map((meal) => (
                    <Dish meal={meal} key={meal._id} />
                  ))}
              </FoodWrapper>
            )}
          </CategoryContainer>
        </Wrapper>
        <Outlet />
      </Div>

      <Footer />
    </>
  );
};

export default Dishes;
