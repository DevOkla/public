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
            Structural Semantics
          </LI>
          <LI>
            <AiOutlineCheck />
            CSS
          </LI>
          <LI>
            <AiOutlineCheck />
            WCAG 2 Validated
          </LI>
          <LI>
            <AiOutlineCheck />
            Well-Commented Code
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a
              href="https://devokla-discover-dubai.netlify.app/"
              target="_blank"
            >
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/DiscoverDubai"
              target="_blank"
            >
              Code &nbsp;
              <VscFileCode />
            </a>
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
