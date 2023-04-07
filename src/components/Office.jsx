import React, { useState } from "react";
import styled from "styled-components";
import Office1 from "../images/office.jpeg";
import Office2 from "../images/office2.jpg";
import Form from "./Form";
import CancelIcon from "@mui/icons-material/Cancel";

const Div = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Offices = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;
const WorkOffice = styled.div`
  width: 640px;
  display: flex;
  background-color: whitesmoke;
  flex-direction: column;
  padding-bottom: 10px;
  box-shadow: 5px 10px 10px 0px rgba(204, 201, 204, 1);
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

const Image = styled.img`
  height: 200px;
  width: 100%;
  object-fit: cover;
`;
const Description = styled.div`
  text-align: center;
  font-size: 14px;
  padding: 5px 10px;
`;
const Title = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: orange;
`;
const Icon = styled.div`
  top: 60px;
  color: orange;
  right: 200px;
  position: absolute;
  position: fixed;
  cursor: pointer;
  z-index: 5;
  &:hover {
    color: #ffa600c3;
  }
`;
const BtnCont = styled.div`
  width: 100%;
  display: flex;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  width: 300px;
  box-shadow: 1px 1px 10px lightgray;
  cursor: pointer;
  padding: 10px;
  font-size: 18px;
  font-weight: 700;
  border: none;
  background-color: orange;
  &:hover {
    background-color: #ffa600df;
    transition: 0.2s ease-in;
  }
  &.open {
    margin-bottom: 20px;
  }
`;
const OpenOffice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 0px;
`;
const OpenOffices = styled.div`
  margin-top: 20px;
  text-align: center;
  font-size: 30px;
  width: 80%;
  color: orange;
  border-bottom: 1px solid lightgray;
`;
const OpenOfficesdesc = styled.div`
  text-align: center;
  font-size: 16px;
  padding: 5px 30px;
`;
const OpenImage = styled.div`
  width: 100%;
  height: 250px;
  position: relative;
  display: flex;
`;
const OImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const OText = styled.div`
  margin-top: 25px;
  text-align: center;
  color: white;
  font-size: 18px;
  font-style: italic;
  padding: 10px 2px;
`;
const OpenDiv = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0px 5px;
  width: 400px;
  right: 0px;
  height: 100%;
  background-color: #000000ae;
`;
const Office = () => {
  const [openform, SetOpenForm] = useState(false);
  return (
    <Div>
      {openform && <Form type="office" />}
      {openform && (
        <Icon>
          <CancelIcon onClick={() => SetOpenForm(!openform)} />
        </Icon>
      )}
      <Offices>
        <WorkOffice className="boxshadow">
          <Image src="https://res.cloudinary.com/dt75zlucp/image/upload/v1678718888/Arcade%20Hotel/damir-kopezhanov-luseu9GtYzM-unsplash_mvwzhv.jpg" />
          <Title>Offices</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            impedit nisi nesciunt id distinctio error ipsam aut aliquid
            incidunt, temporibus perspiciatis tempore mollitia ea nihil amet,
            sunt quis molestias modi!
          </Description>
          <BtnCont>
            <Button onClick={() => SetOpenForm(!openform)}>
              Reserve an office
            </Button>
          </BtnCont>
        </WorkOffice>
        <WorkOffice>
          <Image src="https://res.cloudinary.com/dt75zlucp/image/upload/v1678719026/Arcade%20Hotel/nastuh-abootalebi-ZtC4_rPCRXA-unsplash_ebt4tr.jpg" />
          <Title>Studio</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            impedit nisi nesciunt id distinctio error ipsam aut aliquid
            incidunt, temporibus perspiciatis tempore mollitia ea nihil amet,
            sunt quis molestias modi!
          </Description>
          <BtnCont>
            <Button onClick={() => SetOpenForm(!openform)}>
              Reserve a studio
            </Button>
          </BtnCont>
        </WorkOffice>
      </Offices>
      <OpenOffice>
        <OpenOffices>Open Offices or The Shared Office Platform</OpenOffices>
        <OpenOfficesdesc>
          Lorem, ipsum dolor sit amet consectetur adipisicing e lit. Blanditiis
          autem reiciendis facilis voluptatum atque accusamus unde enim nemo,
          incidunt sed explicabo quaerat, quisquam harum, aliquid adipisci
          praesentium repudiandae maxime! Libero.
        </OpenOfficesdesc>
        <OpenImage>
          <OImage src="https://res.cloudinary.com/dt75zlucp/image/upload/v1678719039/Arcade%20Hotel/copernico-p_kICQCOM4s-unsplash_yb927v.jpg" />
          <OpenDiv>
            <OText>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea
              tenetur est perspiciatis vero minima labore. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Provident, nemo.
            </OText>
            <BtnCont>
              <Button onClick={() => SetOpenForm(!openform)} className="open">
                Reserve a slot
              </Button>
            </BtnCont>
          </OpenDiv>
        </OpenImage>
      </OpenOffice>
    </Div>
  );
};

export default Office;
