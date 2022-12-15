import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";

import { AiOutlineFundProjectionScreen } from "react-icons/ai";

import { MdMilitaryTech } from "react-icons/md";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { GiDesk } from "react-icons/gi";
const Hero = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <HeroDiv>
      <Logo>
        <pre> &lt;/DevOkla&gt; </pre>
      </Logo>
      <H1>Front-End Web Developer, Designer and more..</H1>
      <Links>
        <Link href="#Projects">
          Projects &nbsp; <AiOutlineFundProjectionScreen />
        </Link>

        <Link href="#Technologies">
          Technologies &nbsp;
          <MdMilitaryTech />
        </Link>

        <Link
          href="https://www.linkedin.com/in/maamoun-okla-283120235/"
          target="_blank"
        >
          Linkedin &nbsp; <AiOutlineLinkedin />
        </Link>

        <Link href="https://github.com/DevOkla" target="_blank">
          Github &nbsp; <AiFillGithub />
        </Link>

        <Link href="#SetUp">
          My Setup &nbsp; <GiDesk />
        </Link>
      </Links>
      <Burger>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={30}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <MiniLinks>
            <MiniLink href="#Projects">
              <AiOutlineFundProjectionScreen />
              Projects
            </MiniLink>
            <MiniLink href="#Technologies">
              {" "}
              <MdMilitaryTech />
              Technologies
            </MiniLink>
            <MiniLink
              href="https://www.linkedin.com/in/maamoun-okla-283120235/"
              target="_blank"
            >
              <AiOutlineLinkedin /> Linkedin
            </MiniLink>
            <MiniLink href="https://github.com/DevOkla" target="_blank">
              <AiFillGithub />
              Github
            </MiniLink>
            <MiniLink href="#SetUp">
              <GiDesk />
              SetUp
            </MiniLink>
          </MiniLinks>
        )}
      </Burger>
    </HeroDiv>
  );
};
const HeroDiv = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 750px) {
    height: 100vh;

    display: flex;

    justify-content: center;
    align-items: center;
  }
`;
const Logo = styled.div`
  font-size: 4rem;

  background: linear-gradient(to bottom, #010b76, #c9cbfe, #000d7e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const H1 = styled.h1`
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 950px) {
    margin: 2rem 4rem;
    text-align: center;
  }
`;
const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 2vh;
  @media (max-width: 750px) {
    display: none;
  }
`;
const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  background: Black;
  border: 2px solid white;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 1rem 2rem;
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1em;
  max-width: 100%;
  min-width: 140px;
  cursor: pointer;
  &:hover {
    background: white;
    color: black;
    border-radius: 6px;
    transition: 300ms;
    border: 2px solid black;
  }
`;

const Burger = styled.div`
  @media (min-width: 751px) {
    display: none;
  }
  position: absolute;
  top: 10px;
  right: 1rem;
  text-align: end;
`;
/* Animated Menu for smaller Screens */
const ScaleUpCenter = keyframes`
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5)   ;
    transform-origin: top right;
    opacity: 0; 
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1)  ;
    transform-origin: top right;
    opacity: 1; 
  }
`;
const MiniLinks = styled.div`
  font-size: 2rem;
  min-width: 50%;
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  animation: ${ScaleUpCenter};
  background-color: #0d047966;
  backdrop-filter: blur(0.5rem);
  animation-duration: 0.5s;
`;
const MiniLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-align: left;
  padding: 0.2rem 0.6rem;
  color: #000000;
  border-left: 2px solid white;

  margin: 0.7rem 0 0 0;
  color: #f7f6f6;
  &:hover {
    background: white;
    color: black;

    transition: 0.4s;
  }
`;

export default Hero;
