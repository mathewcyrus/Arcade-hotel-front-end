import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import mainImage from "../images/mainImage.jpg";
import Sharon from "../images/sharon.jpg";
import pizza from "../images/Pizza2.jpg";
import tracy from "../images/tracy.jpg";
import front from "../images/front.jpg";
import Footer from "../components/Footer";

const Div = styled.div`
  background-color: black;
  color: white;
`;
const Container = styled.div`
  background-image: url(${Sharon});
  background-position: center;
  background-size: 100%;
  height: 100vh;
  max-height: 766px;
`;
const LandingTemplate = styled.div`
  background-color: #000000a0;
  height: 100%;
  max-height: 766px;
  display: flex;
  position: relative;
`;

const Menu = styled.div`
  color: #f5f5f5c7;
  position: absolute;
  left: 100px;
  top: 230px;
  height: 400px;
`;
const Ul = styled.ul`
  font-size: 28px;
  margin-top: -20px;
  width: max-content;
  cursor: pointer;

  &:hover {
    color: orange;
  }
`;
const ImageContainer = styled.div`
  bottom: -30px;
  left: 800px;
  position: absolute;
  height: 400px;
  width: 500px;
  border: 10px solid #000000ce;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Img2 = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
const Section = styled.div`
  display: flex;
  scroll-margin-top: 220px;
  padding: 5px;
  margin: 25px 70px 0px;
  gap: 30px;

  &:target {
    border-bottom: 1px solid orange;
  }
  &.section {
    opacity: 0;
    transform: translateY(50px);
    transition: all 1.5s ease-in;
  }
  &.section.active {
    opacity: 1;
    transform: translateY(0px);
    border-bottom: 1px solid orange;
  }
`;
const SContainer = styled.div`
  margin-top: -20px;
  place-items: center;
  flex: 6;
`;
const Title = styled.h1`
  color: orange;
  padding-bottom: 10px;
  text-align: ${(props) => props.type === "mission" && "center"};
  border-bottom: 1px solid orange;
`;
const SDescription = styled.p`
  margin-top: 50px;
  font-size: 14px;
  text-align: center;
`;
const SImage = styled.div`
  position: relative;
  border: 1px solid #3395eb;
  margin: 5px;
  height: 350px;
  width: 500px;
`;

const Motto = styled.h1`
  position: absolute;
  font-size: 50px;
  top: 60px;
  left: 280px;
`;
const Span = styled.span`
  color: orange;
`;
const Ncontainer = styled.div`
  position: absolute;
  display: flex;
  place-items: center;
  border-radius: 0px 10px 10px 0px;
  padding: 10px;
  width: 180px;
  height: 25px;
  bottom: 20px;
  background-color: #000000a7;
`;
const Names = styled.h3`
  margin-left: 15px;
  font-size: 18px;
  color: white;
`;

const ScrollTracker = styled.div`
  position: sticky;
  height: 10px;
  width: 100%;
  top: 100px;
  /* inset: 0 0 auto; */
  background-color: orange;
`;

const About = () => {
  window.addEventListener("scroll", reveal);

  function reveal() {
    var reveals = document.querySelectorAll(".section");
    reveals.forEach((section) => {
      var windowheight = window.innerHeight;
      var revealtop = section.getBoundingClientRect().top;
      var revealpoint = 50;

      if (revealtop < windowheight - revealpoint) {
        section.classList.add("active");
      } else {
        section.classList.remove("active");
      }
    });
  }

  return (
    <>
      <Div>
        <Navbar type="home" />
        <Container>
          <LandingTemplate>
            <Motto>
              Experience <Span>Luxury</Span> And <Span>Great Taste</Span>
            </Motto>

            <Menu>
              <a
                href="#founders"
                style={{ textDecoration: "none", color: "inherit" }}>
                <Ul>Founders</Ul>
              </a>
              <a
                href="#mission"
                style={{ textDecoration: "none", color: "inherit" }}>
                <Ul>Our Mision</Ul>
              </a>
              <a
                href="#vision"
                style={{ textDecoration: "none", color: "inherit" }}>
                <Ul>Our Vision</Ul>
              </a>
              <Ul>Management & Team</Ul>
              <Ul>Locations</Ul>
              <Ul>Contacts</Ul>
            </Menu>
            <ImageContainer>
              <Img src={pizza} />
            </ImageContainer>
          </LandingTemplate>
        </Container>

        <Section id="founders" className="section" data-aos="fade-left">
          <SContainer>
            <Title>Founders</Title>
            <SDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              consectetur ducimus! Commodi, officia molestias consequatur
              deserunt error nesciunt dolor rerum, quam unde, aliquam porro
              quod! Optio quis consequatur deserunt. Explicabo, illum eaque
              saepe hic distinctio nisi magnam ratione, provident quis
              reprehenderit, voluptatem quisquam possimus vitae ea inventore
              officia veritatis a perferendis alias! Nemo accusamus voluptate
              officia blanditiis animi sed, veniam quae fugiat ipsum dicta
              cumque assumenda reprehenderit, cupiditate velit, impedit
              necessitatibus suscipit eveniet. Iste temporibus, voluptas dicta
              repellendus architecto, doloremque dignissimos ad quasi et cum
              quas quibusdam ipsum deleniti fuga nemo, asperiores quia porro
              sunt. Iusto nam sequi nisi assumenda!
            </SDescription>
          </SContainer>
          <SImage>
            <Img2 src={tracy} />
            <Ncontainer>
              <Names>Mathew & Cyrus</Names>
            </Ncontainer>
          </SImage>
        </Section>
        <Section id="mission" className="section" data-aos="fade-left">
          <SImage>
            <Img2 src={mainImage} />
            <Ncontainer>
              <Names>Arcade front view </Names>
            </Ncontainer>
          </SImage>
          <SContainer>
            <Title type="mission">Our Mission</Title>
            <SDescription type="mission">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              commodi sapiente animi ab repudiandae, impedit atque pariatur esse
              deserunt eius repellat facilis deleniti, laborum vitae harum?
              Dolores eius, odio hic optio dolorum incidunt? Laudantium ipsa
              unde, perspiciatis deleniti qui numquam. Quos dolorem magni
              perspiciatis laborum aliquam dicta id, aperiam in atque beatae
              est. Laborum praesentium culpa minima similique! Minima blanditiis
              ad nulla autem, nisi sit ut. Debitis corporis ab repellendus autem
              tempore voluptatem consectetur deserunt consequuntur laudantium
              ducimus porro accusantium, quae in fugit voluptate animi eos,
              blanditiis dignissimos neque illum, beatae at? Dolorem illum
              repellendus cum harum suscipit nam vitae?
            </SDescription>
          </SContainer>
        </Section>
        <Section id="vision" className="section" data-aos="fade-left">
          <SContainer>
            <Title type="mission">Our Vision</Title>
            <SDescription type="mission">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
              commodi sapiente animi ab repudiandae, impedit atque pariatur esse
              deserunt eius repellat facilis deleniti, laborum vitae harum?
              Dolores eius, odio hic optio dolorum incidunt? Laudantium ipsa
              unde, perspiciatis deleniti qui numquam. Quos dolorem magni
              perspiciatis laborum aliquam dicta id, aperiam in atque beatae
              est. Laborum praesentium culpa minima similique! Minima blanditiis
              ad nulla autem, nisi sit ut. Debitis corporis ab repellendus autem
              tempore voluptatem consectetur deserunt consequuntur laudantium
              ducimus porro accusantium, quae in fugit voluptate animi eos,
              blanditiis dignissimos neque illum, beatae at? Dolorem illum
              repellendus cum harum suscipit nam vitae?
            </SDescription>
          </SContainer>
          <SImage>
            <Img2 src={front} />
            <Ncontainer>
              <Names>Arcade rear view </Names>
            </Ncontainer>
          </SImage>
        </Section>

        <Section id="f" className="section">
          <SContainer>
            <Title>Founders</Title>
            <SDescription>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut,
              consectetur ducimus! Commodi, officia molestias consequatur
              deserunt error nesciunt dolor rerum, quam unde, aliquam porro
              quod! Optio quis consequatur deserunt. Explicabo, illum eaque
              saepe hic distinctio nisi magnam ratione, provident quis
              reprehenderit, voluptatem quisquam possimus vitae ea inventore
              officia veritatis a perferendis alias! Nemo accusamus voluptate
              officia blanditiis animi sed, veniam quae fugiat ipsum dicta
              cumque assumenda reprehenderit, cupiditate velit, impedit
              necessitatibus suscipit eveniet. Iste temporibus, voluptas dicta
              repellendus architecto, doloremque dignissimos ad quasi et cum
              quas quibusdam ipsum deleniti fuga nemo, asperiores quia porro
              sunt. Iusto nam sequi nisi assumenda!
            </SDescription>
          </SContainer>
          <SImage>
            <Img2 src={tracy} />
            <Ncontainer>
              <Names>Mathew & Cyrus</Names>
            </Ncontainer>
          </SImage>
        </Section>
        <Section className="section">Location</Section>
        <Section className="section">Contacts</Section>
      </Div>

      <Footer />
    </>
  );
};

export default About;
