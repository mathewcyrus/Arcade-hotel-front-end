import styled from "styled-components";
import FeaturedDishes from "./FeaturedDishes";
import Property from "./Property";

const Wrapper = styled.div`
  /* background-color: orange; */
  margin-top: -28px;
  padding-bottom: 15px;
  align-items: center;
`;
const Text1 = styled.h3`
  font-size: 24px;
  font-weight: 300;
  color: black;
  margin-top: 29px;
  margin-left: 145px;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const Text2 = styled.h3`
  font-size: 24px;
  font-weight: 300;
  color: black;
  margin-top: 10px;
  margin-left: 145px;
  align-items: center;
  gap: 10px;
  display: flex;
`;

const FeaturedItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 145px;
  gap: 10px;
  margin-top: -15px;
`;

const Includes = styled.p`
  font-size: 14px;
`;

const Featured = () => {
  return (
    <Wrapper>
      <Text1>
        Browse our Food Collection:
        <Includes>( includes rooms,pools,grounds,halls )</Includes>
      </Text1>
      <FeaturedItems>
        <FeaturedDishes />
        <FeaturedDishes />
        <FeaturedDishes />
        <FeaturedDishes />
      </FeaturedItems>
      <Text2>
        Browse our Property Collection:
        <Includes>( includes rooms,pools,grounds,halls )</Includes>
      </Text2>
      <FeaturedItems>
        <Property />
        <Property />
        <Property />
        <Property />
      </FeaturedItems>
    </Wrapper>
  );
};

export default Featured;
