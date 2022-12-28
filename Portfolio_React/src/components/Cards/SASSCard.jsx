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
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Red />
              <Red />
            </Bars>
            <h2>SASS</h2>
            &nbsp;
            <h4>Variables & Nesting</h4>
            <h4>Pseudo & Operators</h4>
            <h4>Mixins & Partials </h4>
            <h4>Extending Styles</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default SASSCard;
