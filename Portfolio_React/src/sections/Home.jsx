import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import TechWorld from "../Assets/TechWorld.jpg";
const Home = () => {
  return (
    <HomeConatiner>
      <Nav />
      <Hero />
    </HomeConatiner>
  );
};
const HomeConatiner = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 4;

  background-image: linear-gradient(
      rgba(4, 0, 23, 0.9),
      rgba(38, 0, 120, 0.6),
      rgba(3, 0, 15, 0.9)
    ),
    url(${TechWorld});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Home;
