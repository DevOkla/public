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
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Red />
            </Bars>
            <h2>CSS3</h2>
            &nbsp;
            <h4>Positioning, Flex, Grid</h4>
            <h4>Selectors & Pseudo </h4>
            <h4>Animations & Shadows</h4>
            <h4>Responsive Design </h4>
            <h4> Media Queries</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default CSSCard;
