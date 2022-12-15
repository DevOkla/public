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
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            HTML, CSS & JavaScript
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

          <LI>
            <AiOutlineCheck />
            Well-Commented JS Code
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a
              href="https://devokla-sv-radio.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/SverigesRadio_VanillaJS"
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              Code &nbsp;
              <VscFileCode />
            </a>
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
