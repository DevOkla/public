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
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default JSCard;
