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
import { AiFillApi } from "react-icons/ai";

const APICard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <AiFillApi />
          </CardFront>
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default APICard;
