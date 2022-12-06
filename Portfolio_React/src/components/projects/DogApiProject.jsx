import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import DogAPI from "../../Assets/DogAPI.png";
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
const DogApiProject = () => {
  return (
    <Project>
      <Left>
        <Heading>Dog API</Heading>
        <Skills>Skills</Skills>
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
            Fetch API
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a href="https://devokla-dogbreed-api.netlify.app" target="_blank" >
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
              <a href="https://github.com/DevOkla/public/tree/main/Simple_DogAPI" target="_blank" >
              Code &nbsp;
            <VscFileCode />
              </a>
          
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={DogAPI} alt="Dubai"></IMG>
      </Right>
    </Project>
  );
};

export default DogApiProject;
