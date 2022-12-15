import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Recipe from "../../Assets/Recipe.png";
import {
  Project,
  Left,
  Heading,
  Skills,
  UL,
  LI,
  Buttons,
  Button,
  Right,
  IMG,
} from "./Project.style.js";
const RecipeProject = () => {
  return (
    <Project>
      <Left>
        <Heading>Deliciouss Recipe</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            React
          </LI>
          <LI>
            <AiOutlineCheck />
            SplideJS
          </LI>
          <LI>
            <AiOutlineCheck />
            Fetch API
          </LI>
          <LI>
            <AiOutlineCheck />
            Search Functionality
          </LI>
          <LI>
            <AiOutlineCheck />
            Styled Components
          </LI>
          <LI>
            <AiOutlineCheck />
            Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-recipe-app.netlify.app/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/Recipe__React/src/src"
              target="_blank"
            >
              Code &nbsp; <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Recipe} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default RecipeProject;
