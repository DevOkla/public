import React from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { H1 } from "../components/projects/Project.style.js";
import {
  DiscoverDubai,
  SRadio,
  OpenAiProject,
  RecipeProject,
  ToDoProject,
  DogApiProject,
  PhotographerProject,
  PexonProject,
} from "../components/projects/index.js";
import Lights from "../Assets/Lights.jpg";

const Projects = () => {
  return (
    <ProjectsContainer id="Projects">
      <ProjectsDiv>
        <H1>Chosen Projects</H1>
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
            breakpoints: {
              900: {
                perPage: 1,
              },
            },
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
            <PexonProject />
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
        </Splide>
      </ProjectsDiv>
    </ProjectsContainer>
  );
};

const ProjectsDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  min-height: 50vh;
 
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
  background: rgba(0, 0, 50, 0.7);
`;
export default Projects;
