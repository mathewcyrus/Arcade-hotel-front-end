import { Link } from "react-router-dom";
import styled from "styled-components";
import Pizza from "../images/pizza.jpg";

const Card = styled.div`
  width: 257px;
  height: 250px;
  border: 1px solid #3395eb;
  z-index: 1;
  position: relative;
  border-radius: 10px;
`;

const CategoryImage = styled.div`
  width: 257px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CategoryContainer = styled.div`
  position: absolute;
  bottom: -10px;
  left: 10px;
  color: white;
`;
const CategoryTitle = styled.h1`
  position: absolute;
  bottom: 20px;
`;
const CategoryTotals = styled.h2`
  font-size: 18px;
  font-weight: 400;
`;

const FeaturedItem = () => {
  return (
    <Link to="/Arcade-hotel-meals">
      <Card>
        <CategoryImage>
          <Img src={Pizza} />
          <CategoryContainer>
            <CategoryTitle>Sea Food</CategoryTitle>
            <CategoryTotals> (30 Dishes Available)</CategoryTotals>
          </CategoryContainer>
        </CategoryImage>
      </Card>
    </Link>
  );
};

export default FeaturedItem;
