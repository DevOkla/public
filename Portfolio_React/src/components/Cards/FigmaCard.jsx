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
import { SiFigma } from "react-icons/si";

const FigmaCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiFigma />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Red />
              <Red />
            </Bars>
            <h2>Figma</h2>
            &nbsp;
            <h4>Basics & Wireframes </h4>
            <h4>Animations & Clickability </h4>
            <h4>Prototyping & Exporting </h4>
            <h4>Plugins & Design libraries </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default FigmaCard;
