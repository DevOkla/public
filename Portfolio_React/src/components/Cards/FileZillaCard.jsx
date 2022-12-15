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
            <Bars>
              <Green />
              <Green />
              <Red />
              <Red />
              <Red />
            </Bars>
            <h2>FileZilla</h2>
            &nbsp;
            <h4>File Transfer Protocols </h4>
            <h4>Safely Exchanging Files </h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default FileZillaCard;
