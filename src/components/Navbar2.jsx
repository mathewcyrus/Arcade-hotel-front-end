import styled from "styled-components";
import rezha from "../images/rezha.jpg";

const Container = styled.div`
  position: sticky;
  z-index: 2;
  top: 0px;
  height: 150px;
  background-color: #3395eb;
`;

const Container2 = styled(Container)`
  background-image: url(${rezha});
  background-blend-mode: overlay;
  background-size: cover;
  background-position: center;
  position: relative;
`;
const Text = styled.div`
  position: absolute;
  background-image: Radial-gradient(#ffff00 15%, #500064 50%, #ffa500 30%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 50px;
  bottom: 30px;
  left: 200px;
  z-index: 3;
  font-weight: 900;
`;
const Navbar2 = () => {
  return (
    <Container>
      <Container2></Container2>
      <Text>
        Experience <span>Luxury</span> And <span>Great Taste</span>
      </Text>
    </Container>
  );
};

export default Navbar2;
