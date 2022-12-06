import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import {
  DiscoverDubai,
  SRadio,
  OpenAiProject,
  RecipeProject,
  ToDoProject,DogApiProject, PhotographerProject, Music
} from "../components/projects/index.js";
import Lights from "../Assets/Lights.jpg";

const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <H1>Projects</H1>
      <ProjectsDiv>
        <Splide
          options={{
            autoplay: true,
            type: "loop",
            interval: 3800,
            speed: 2000,
            width: "100%",

            pagination: true,
            start: 1,
            perMove: 1,
            perPage: 2,

            fixedHeight: "27rem",
            padding: 40,
            focus: "center",
            trimSpace: false,
            label: "My Carousel",
            drag: "free",
            gap: "20rem",
            arrows: false,
          }}
        >
          <SplideSlide>
            <DiscoverDubai />
          </SplideSlide>
          <SplideSlide>
            <SRadio />
          </SplideSlide>
          <SplideSlide>
            <OpenAiProject />
          </SplideSlide>
          <SplideSlide>
            <RecipeProject />
          </SplideSlide>
          <SplideSlide>
            <ToDoProject />
          </SplideSlide>
          <SplideSlide>
            <DogApiProject />
          </SplideSlide>
          <SplideSlide>
            <PhotographerProject />
          </SplideSlide>
          <SplideSlide>
            <Music />
          </SplideSlide>
        </Splide>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

const H1 = styled.h1`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2.5rem;
`;
const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  padding-top: 2rem;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 50, 0.9),
      rgba(0, 0, 20, 0.7)
    ),
    url(${Lights});
    background-position: center center; 
  box-shadow: 
        inset 0px 11px 15px -11px #CCC,
        inset 0px -11px 15px -11px #CCC; 
}`;
const ProjectsContainer = styled.div`
  padding: 2rem 0;
  min-height: 45rem;
  background: rgba(0, 0, 50, 0.7);

  height: 50rem;
`;
export default Projects;
