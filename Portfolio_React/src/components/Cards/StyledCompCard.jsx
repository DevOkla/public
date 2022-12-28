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
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Red />
            </Bars>
            <h2>Styled Components</h2>
            &nbsp;
            <h4>Props-based Styling</h4>
            <h4>Pseudo & Nesting</h4>
            <h4>Animations & Props </h4>
            <h4>Extending Styles</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default StyledCompCard;
