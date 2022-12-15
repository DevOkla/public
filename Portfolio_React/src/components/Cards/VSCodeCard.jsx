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
import { SiVisualstudiocode } from "react-icons/si";

const VSCodeCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiVisualstudiocode />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Green />
            </Bars>
            <h2>
              Visutal <br /> Studio Code
            </h2>
            &nbsp;
            <h4>Extensions & git tooling </h4>
            <h4>Run & Debug code </h4>
            <h4>Formatting & Snippets </h4>
            <h4>Synchronize with GitHub </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default VSCodeCard;
