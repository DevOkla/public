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
            Website &nbsp; <CgWebsite />
          </Button>
          <Button>
            Code &nbsp;
            <VscFileCode />
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
