import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import Dubai1 from "../../Assets/Dubai1.png";
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
const DiscoverDubai = () => {
  return (
    <Project>
      <Left>
        <Heading>Discover Dubai</Heading>
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
            Photoshop
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-discover-dubai.netlify.app/">
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
        <IMG src={Dubai1} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default DiscoverDubai;
