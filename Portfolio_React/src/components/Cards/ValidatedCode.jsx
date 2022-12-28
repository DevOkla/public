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
} from "../Card.Style.js";
import { HiCheckBadge } from "react-icons/hi2";

const ValidatedCode = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <HiCheckBadge />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Green />
            </Bars>
            <h2>
              Validation <br /> & Guidlines
            </h2>

            <h4>Validated Code</h4>
            <h4>WCAG Friendly</h4>
            <h4>Well-Commented Code </h4>
            <h4>Documentations</h4>
            <h4>Optimized Production</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default ValidatedCode;
