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
import { SiTailwindcss } from "react-icons/si";

const TailWindCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiTailwindcss />
          </CardFront>
          <CardBack></CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default TailWindCard;
