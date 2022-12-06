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
import { SiCss3 } from "react-icons/si";

const CSSCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiCss3 />
          </CardFront>
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default CSSCard;
