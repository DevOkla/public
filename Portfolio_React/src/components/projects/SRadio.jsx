import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import SR from "../../Assets/SR.png";
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
const SRadio = () => {
  return (
    <Project>
      <Left>
        <Heading>Sveriges Radio</Heading>
        <Skills>Skills Used</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            HTML & CSS
          </LI>

          <LI>
            <AiOutlineCheck />
            JavaScript
          </LI>
          <LI>
            <AiOutlineCheck />
            Fetch-API
          </LI>
          <LI>
            <AiOutlineCheck /> DOM-Manupliation
          </LI>
          <LI>
            <AiOutlineCheck /> Several functionalities
          </LI>
          <LI>
            <AiOutlineCheck /> Responsive Design
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
        <IMG src={SR} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default SRadio;
