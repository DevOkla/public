import React from "react";

import {
  Cards,
  Card,
  CardBox,
  CardFront,
  CardBack,
  Bars,
  Green,
  Red,
} from "../../components/Card.Style.js";
import { SiHtml5 } from "react-icons/si";
import styled from "styled-components";

const HTMLCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiHtml5 />
          </CardFront>
          <CardBack>
            <Bars>
              <Green />
              <Green />
              <Green />
              <Green />
              <Green />
            </Bars>
            <h2>HTML5</h2>
            &nbsp;
            <h4>Elements & Attributes</h4>
            <h4>Web Design & Media</h4>
            <h4>Production & documentation</h4>
            <h4>Semantical & Validated</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default HTMLCard;
