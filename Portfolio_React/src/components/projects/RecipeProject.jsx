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
            HTML
          </LI>
          <LI>
            <AiOutlineCheck />
            CSS
          </LI>
          <LI>
            <AiOutlineCheck />
            JavaScript
          </LI>
          <LI>
            <AiOutlineCheck />
            BEM
          </LI>
          <LI>
            <AiOutlineCheck />
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-recipe-app.netlify.app/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            Code &nbsp;
            <VscFileCode />
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
