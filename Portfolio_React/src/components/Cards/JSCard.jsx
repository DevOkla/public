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
import { SiJavascript } from "react-icons/si";

const JSCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiJavascript />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Red />
            </Bars>
            <h2>Vanilla JS </h2>
            <h4>Functions & Objects</h4>
            <h4>Events & Local Storage</h4>
            <h4>OOP & DOM-Manipulation</h4>
            <h4>Ajax & JSON</h4>
            <h4>Consume REST API</h4>
            <h4>Fetch & Error Handling </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default JSCard;
