import styled from "styled-components";

import rings from "../images/rings.jpg";
import conf1 from "../images/conference.jpg";
import conf2 from "../images/conference2.jpg";
import conf3 from "../images/conference3.jpg";
import conf4 from "../images/conf4.jpg";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  height: 600px;
  max-width: 1366px;
`;
const Div1 = styled.div`
  background-color: black;
  color: white;
  height: 100%;
  display: flex;

  flex-direction: column;
`;
const Div2 = styled.div`
  background-color: black;
  height: 100%;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
`;
const Rings = styled.div`
  overflow: hidden;
  height: 400px;
  width: 600px;
`;
const Image1 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;
const Paragraph = styled.div`
  flex: 1;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: orange;
`;
const IMages = styled.div`
  display: flex;
  height: 300px;
  flex-wrap: wrap;
  overflow: hidden;
`;
const Image = styled.img`
  height: 200px;

  width: 200px;
  border-radius: 50%;
  object-fit: cover;
`;
const Hire = styled.div``;
const Hall = () => {
  return (
    <Div>
      <Div1>
        <Rings>
          <Image1 src={rings} />
        </Rings>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          sapiente expedita adipisci possimus eius quia commodi accusamus
          pariatur, dicta nostrum molestias non suscipit id enim rem, nobis
          eaque! Perspiciatis ut doloremque accusamus? Nesciunt, eligendi
          fugiat! Maxime earum totam ab est.
        </Paragraph>
      </Div1>
      <Div2>
        <Text>And we will provide the best wedding venue Ever.</Text>
        <IMages>
          <Image src={conf1} />
          <Image src={conf2} />
          <Image src={conf3} />
        </IMages>
        <Hire>Book Venue</Hire>
      </Div2>
    </Div>
  );
};

export default Hall;
