import React from "react";
import styled from "styled-components";
import binary from "../Assets/binary.jpg";
import {
  APICard,
  TailWindCard,
  StyledCompCard,
  SASSCard,
  ReactCard,
  HTMLCard,
  CSSCard,
  JSCard,
  VSCodeCard,
  FigmaCard,
  FileZillaCard,
  GithubCard,
  ImgVideoCard,
} from "../components/Cards/index.js";

const Techs = () => {
  return (
    <TechsContainer>
      <H1>Technologies </H1>
      <CardsContainer>
        <HTMLCard />
        <CSSCard />
        <JSCard />
        <ReactCard />
        <StyledCompCard />
        <SASSCard />
        <TailWindCard />
        <APICard />
        <VSCodeCard />
        <FigmaCard />
        <FileZillaCard />
        <GithubCard />
        <ImgVideoCard />
      </CardsContainer>
    </TechsContainer>
  );
};
const H1 = styled.h1`
  padding: 2rem 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
`;
const TechsContainer = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 50, 0.9),
      rgba(0, 0, 20, 0.7)
    ),
    url(${binary});
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
`;
const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
`;
export default Techs;
