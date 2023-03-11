import styled from "styled-components";
import reagan from "../images/reagan.jpg";
import Testimony from "./Testimony";

import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import SendIcon from "@mui/icons-material/Send";
import { useEffect, useState } from "react";
import { dataRequest } from "../hooks/requestMethods";
import useFetch from "../hooks/fetchMethod";
const Div = styled.div`
  background-color: orange;
  position: relative;
  display: flex;
  margin: 0px 0px 0px 0px;
  background-position: center;
  background-size: cover;
  height: 420px;
`;
const Image = styled.img`
  height: 100%;
  width: 400px;
  object-fit: cover;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
`;

const Container = styled.div`
  position: relative;
  display: flex;
  gap: 20px;
`;
const Testimonials = styled.div`
  display: flex;
  flex-direction: column;
  height: max-content;
`;
const InputContainer = styled.form`
  margin-top: 0px;
  margin-bottom: 10px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  outline: none;
  border: 1px solid #3395eb;
  border-radius: 10px 0px 0px 10px;
  font-size: 14px;
  padding-left: 15px;
  width: 50%;
  height: 100%;
`;
const SendBtn = styled.button`
  width: 100px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 0px 10px 10px 0px;
  background-color: #3395eb;
  border: none;
  height: 44px;
  cursor: pointer;
`;
const TestContainer = styled.div`
  display: flex;
`;
const LocContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const Locations = styled.div`
  margin-left: 80px;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const Text = styled.div`
  width: 120px;
  border-bottom: 1px solid #3395eb;
  font-size: 14px;
  font-weight: 700;
`;

const Location = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;
const SocialMedia = styled.div`
  position: absolute;
  right: 10px;
  bottom: 0px;
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  width: 500px;
  height: 60px;
`;
const Icon = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  gap: 5px;
  width: 50px;
  height: 100%;
  cursor: pointer;
  color: #3395eb;
`;

const Stext = styled.div`
  color: black;
  font-size: 12px;
`;
const Footer = () => {
  const [testimonial, setTestimony] = useState(null);
  const [fetchedTestimonial, setFetchedTestimonial] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await dataRequest.get("/testimonials");
        setFetchedTestimonial(res.data);
      } catch (error) {}
    };
    fetchTestimonials();
  }, []);
  //POST A TESTIMONY
  const sendTestimony = async (e) => {
    e.preventDefault();
    try {
      await dataRequest.post("/testimonials", { testimonial });
    } catch (error) {}
  };
  return (
    <Div>
      <Image src={reagan} />
      <Wrapper>
        <Testimonials>
          <TestContainer>
            {fetchedTestimonial.map((test) => (
              <Testimony test={test} key={test._id} />
            ))}
          </TestContainer>

          <InputContainer>
            <Input
              placeholder="Write your testimony here"
              onChange={(e) => setTestimony(e.target.value)}
            />
            <SendBtn onClick={sendTestimony}>
              <SendIcon />
            </SendBtn>
          </InputContainer>
        </Testimonials>
        <Container>
          <Locations>
            <Text> Locations:</Text>
            <LocContainer>
              <Location>
                1654 Moi Avenue <br />
                Nairobi,Kenya.
                <br /> +254 700000000.
              </Location>
              <Location>
                1954 Sesimi
                <br />
                Eldoret, Kenya.
                <br /> +254 700000000.
              </Location>
            </LocContainer>
          </Locations>
          <Locations>
            <Text> Working Hours:</Text>
            <LocContainer>
              <Location>Open 24 Hours a Day</Location>
            </LocContainer>
          </Locations>
          <Locations>
            <Text> Useful Links:</Text>
            <LocContainer>
              <Location>
                <a
                  href="#"
                  style={{
                    marginTop: "-5px",
                    color: "inherit",
                  }}>
                  travel
                </a>
                <br />
                <a
                  href="#"
                  style={{
                    marginTop: "-15px",
                    color: "inherit",
                  }}>
                  explore
                </a>
                <br />
                <a
                  href="#"
                  style={{
                    marginTop: "-15px",
                    color: "inherit",
                  }}>
                  happiness
                </a>
                <br />
                <a
                  href="#"
                  style={{
                    marginTop: "-15px",
                    color: "inherit",
                  }}>
                  travel
                </a>
                <br />
              </Location>
            </LocContainer>
          </Locations>
        </Container>
        <SocialMedia>
          <Icon>
            <EmailIcon />
          </Icon>
          <Icon>
            <FacebookIcon />
          </Icon>
          <Icon>
            <LinkedInIcon />
          </Icon>
          <Icon>
            <TwitterIcon />
          </Icon>

          <Icon>
            <InstagramIcon />
          </Icon>
          <Icon>
            <WhatsAppIcon />
          </Icon>
        </SocialMedia>
      </Wrapper>
    </Div>
  );
};

export default Footer;
