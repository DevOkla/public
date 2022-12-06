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
import { SiFilezilla } from "react-icons/si";

const FileZillaCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiFilezilla />
          </CardFront>
          <CardBack>
            <h2>HTML</h2>
            &nbsp;
            <h4>Elements & Attributes</h4>
            <h4>Web Design & Media</h4>
            <h4>Production & documentation</h4>
            <h4>Strong Analytical Skills</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default FileZillaCard;
