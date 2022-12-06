import React from "react";
import styled from "styled-components";
import Mac from "../Assets/Mac.jpg";
const SetUp = () => {
  return <SetUpContainer></SetUpContainer>;
};
const SetUpContainer = styled.div`
  height: 100vh;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 50, 0.9),
      rgba(0, 0, 20, 0.7)
    ),
    url(${Mac});
  background-repeat: no-repeat;
  background-size: cover;
`;
export default SetUp;
