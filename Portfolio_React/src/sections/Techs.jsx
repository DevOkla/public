import React from "react";
import styled from "styled-components";
import binary from "../Assets/binary.jpg";
import { H1 } from "../components/projects/Project.style.js";
import {
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
  ValidatedCode,
} from "../components/Cards/index.js";

const Techs = () => {
  return (
    <TechsContainer id="Technologies">
      <H1>Technologies </H1>
      <CardsContainer>
        <HTMLCard />
        <CSSCard />
        <JSCard />
        <ReactCard />
        <StyledCompCard />
        <SASSCard />
        <TailWindCard />

        <VSCodeCard />
        <FigmaCard />
        <FileZillaCard />
        <GithubCard />
        <ValidatedCode />
      </CardsContainer>
    </TechsContainer>
  );
};

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
  max-width: 90rem;
  margin: auto;
  @media (max-width: 750px) {
    padding: 2rem 1rem;
    max-width: 95rem;
    width: 100%;
  }
`;
export default Techs;
