import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { VscFileCode } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg";
import ToDo from "../../Assets/ToDo.png";
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
const ToDoProject = () => {
  return (
    <Project>
      <Left>
        <Heading>Simple ToDo-List</Heading>
        <Skills>Skills</Skills>
        <UL>
          <LI>
            <AiOutlineCheck />
            JavaScript
          </LI>
          <LI>
            <AiOutlineCheck />
            DOM-Manupliation
          </LI>
          <LI>
            <AiOutlineCheck /> Local Storage
          </LI>
          <LI>
            <AiOutlineCheck /> HTML & CSS
          </LI>
          <LI>
            <AiOutlineCheck /> Responsive Design
          </LI>
        </UL>
        <Buttons>
          <Button>
            <a
              href="https://devokla-todo-list.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website &nbsp; <CgWebsite />
            </a>
          </Button>
          <Button>
            <a
              href="https://github.com/DevOkla/public/tree/main/Simple_ToDoList"
              target="_blank"
              rel="noopener noreferrer"
            >
              Code &nbsp;
            </a>

            <VscFileCode />
          </Button>
        </Buttons>
      </Left>
      <Right>
        <IMG src={ToDo} alt="ToDo-list Project"></IMG>
      </Right>
    </Project>
  );
};

export default ToDoProject;
