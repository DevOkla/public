import React from "react";

import {
  Cards,
  Card,
  CardBox,
  CardFront,
  CardBack,
  Bars,
  Red,
  Green,
} from "../../components/Card.Style.js";
import { SiGit } from "react-icons/si";

const GithubCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiGit />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Red />
              <Red />
            </Bars>
            <h2>Git</h2>
            &nbsp;
            <h4>Git & GitHub </h4>
            <h4>Storing & Tracking</h4>
            <h4>Version & Source control </h4>
            <h4>Pushing & Pulling </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default GithubCard;
