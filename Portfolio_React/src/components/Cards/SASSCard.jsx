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
import { SiSass } from "react-icons/si";

const SASSCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiSass />
          </CardFront>
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default SASSCard;
