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
import { SiStyledcomponents } from "react-icons/si";

const StyledCompCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiStyledcomponents />
          </CardFront>
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default StyledCompCard;
