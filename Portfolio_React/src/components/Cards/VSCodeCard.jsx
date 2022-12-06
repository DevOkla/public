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
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default VSCodeCard;
