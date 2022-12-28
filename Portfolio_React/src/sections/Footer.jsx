import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
const Footer = () => {
  return (
    <FooterConatiner>
      <Logo>
        <pre> &lt;/DevOkla&gt; </pre>
      </Logo>
      <Contact>
        <Link href="mailto:maamoun.okla@icloud.com">
          <FiMail /> maamoun.okla@icloud.com
        </Link>
        <Link>
          <CiLocationOn /> Sweden
        </Link>
        <Link
          href="https://www.linkedin.com/in/maamoun-okla-283120235/"
          target="_blank"
        >
          <AiOutlineLinkedin /> Linkedin
        </Link>
        <Link href="https://github.com/DevOkla" target="_blank">
          <AiFillGithub /> Github
        </Link>
      </Contact>
    </FooterConatiner>
  );
};
const FooterConatiner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem 0;
  background: linear-gradient(
    to bottom,
    rgba(2, 2, 105, 0.9),
    rgba(0, 0, 20, 0.7)
  );
`;
const Logo = styled.div`
  font-size: 4rem;
  height: fit-content;

  background: linear-gradient(to bottom, #010d90, #dddffe, #010d90);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
`;
const Contact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  -webkit-background-clip: text;
  background-clip: text;
  color: white;
`;
const Link = styled.a`
  display: flex;

  align-items: center;
  gap: 10px;
  font-size: 2rem;

  color: white;
`;

export default Footer;
