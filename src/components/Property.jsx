import styled from "styled-components";
import PoolImage from "../images/Poolimage.jpg";

const PropertyCard = styled.div`
  width: 257px;
  height: 250px;
  border: 1px solid #3395eb;
  z-index: 1;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
`;
const Propertyimage = styled.img`
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

const Property = () => {
  return (
    <PropertyCard>
      <Propertyimage src={PoolImage} />
      <CategoryContainer>
        <CategoryTitle>Sea Food</CategoryTitle>
        <CategoryTotals> (30 Dishes Available)</CategoryTotals>
      </CategoryContainer>
    </PropertyCard>
  );
};

export default Property;
