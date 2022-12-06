import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Photographer from "../../Assets/Photographer.png";
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
const PhotographerProject = () => {
  return (
    <Project>
      <Left>
        <Heading> Photographer</Heading>
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
            Code &nbsp;
            <VscFileCode />
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={Photographer} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default PhotographerProject;
