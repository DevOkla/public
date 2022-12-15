import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import OpenAI from "../../Assets/OpenAI.png";
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
const OpenAiProject = () => {
  return (
    <Project>
      <Left>
        <Heading>Open AI</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            React
          </LI>
          <LI>
            <AiOutlineCheck />
            CSS BEM
          </LI>

          <LI>
            <AiOutlineCheck />
            Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-open-ai.netlify.app/" target="_blank">
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/GPT3OpenAI_React/src"
              target="_blank"
            >
              Code &nbsp;
              <VscFileCode />
            </a>
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={OpenAI} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default OpenAiProject;
