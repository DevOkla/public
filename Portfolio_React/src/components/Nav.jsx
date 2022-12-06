import styled from "styled-components";
import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
const Nav = () => {
  return (
    <NavBar>
      <Logo>DevOkla</Logo>

      <Button>
        <BsFillMoonStarsFill />
      </Button>

      <Button>Resumé</Button>
    </NavBar>
  );
};
const NavBar = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: row;

  color: var(--color-text);
`;
const Logo = styled.div`
  flex: 1;
  font-size: 3rem;
  width: 1rem;
  background: linear-gradient(to bottom, #010b76, #c9cbfe, #000d7e);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: Black;
  border: 2px solid white;
  border-radius: 8px;
  padding: 16px 24px;
  margin: 0 2rem;
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
  }
`;
export default Nav;
