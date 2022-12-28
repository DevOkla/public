import React from "react";
import styled from "styled-components";
import Hero from "../components/Hero";

import TechWorld from "../Assets/TechWorld.jpg";
const Home = () => {
  return (
    <HomeConatiner>
      <Hero />
    </HomeConatiner>
  );
};
const HomeConatiner = styled.div`
  width: 100%;
  height: 100vh;

  background-image: linear-gradient(
      rgba(4, 0, 23, 0.9),
      rgba(22, 0, 70, 0.64),
      rgba(3, 0, 15, 0.9)
    ),
    url(${TechWorld});
  background-repeat: no-repeat;
  background-size: cover;
`;

export default Home;
