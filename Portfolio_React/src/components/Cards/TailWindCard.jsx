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
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Red />
              <Red />
              <Red />
            </Bars>
            <h2>Tailwind</h2>
            &nbsp;
            <h4>Snytax & States</h4>
            <h4>componenet styling</h4>
            <h4>Sizing & Colors</h4>
            <h4>Typography & Shadows</h4>
            <h4>Mobile-first</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default TailWindCard;
