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
          <LI>
            <AiOutlineCheck />
            Customer Feedback
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a
              href="https://devokla-ahmad-photography.netlify.app/"
              target="_blank"
            >
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/AhmadPhotography"
              target="_blank"
            >
              Code &nbsp;
              <VscFileCode />
            </a>
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
