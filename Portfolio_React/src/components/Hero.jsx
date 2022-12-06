import React from "react";
import styled from "styled-components";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdMilitaryTech } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { GiDesk } from "react-icons/gi";
const Hero = () => {
  return (
    <HeroDiv>
      <H1>Front-End Web Developer and Designer</H1>
      <Links>
        <a href="#Projects">
          <Link>
            Projects &nbsp; <AiOutlineFundProjectionScreen />
          </Link>
        </a>
        <a href="#Project">
          <Link>
            Technologies &nbsp;
            <MdMilitaryTech />
          </Link>
        </a>
        <a href="#Project">
          <Link>
            Linkedin <AiOutlineLinkedin />
          </Link>
        </a>

        <a href="#Project">
          <Link>
            Github &nbsp; <AiFillGithub />
          </Link>
        </a>
        <a href="#Project">
          <Link>
            My Setup &nbsp; <GiDesk />
          </Link>
        </a>
      </Links>
    </HeroDiv>
  );
};
const HeroDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const H1 = styled.h1`
  color: white;
  margin-top: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
`;
const Link = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: Black;
  border: 2px solid white;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 1rem 2rem;
  color: #ffffff;
  font-size: 20px;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  cursor: pointer;
  &:active,
  &:hover {
    background: white;
    color: black;
    border-radius: 6px;
    transition: 300ms;
    border: 2px solid black;
  }
`;
export default Hero;
