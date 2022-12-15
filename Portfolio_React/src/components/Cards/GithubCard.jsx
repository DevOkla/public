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
import { SiGithub } from "react-icons/si";

const GithubCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiGithub />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Red />
              <Red />
              <Red />
            </Bars>
            <h2>Github</h2>
            &nbsp;
            <h4>Storing & Tracking</h4>
            <h4>Version & Source control </h4>
            <h4>Pushing & Pulling </h4>
            <h4>Github Desktop </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default GithubCard;
