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
import { SiReact } from "react-icons/si";

const ReactCard = () => {
  return (
    <Cards>
      <Card>
        <CardBox>
          <CardFront>
            <SiReact />
          </CardFront>
          <CardBack>
            <h2>React</h2>
            &nbsp;
            <h4>React fundamentals</h4>
            <h4>JSX</h4>
            <h4>Virtual DOM</h4>
            <h4>Node.js</h4>
          </CardBack>
        </CardBox>
      </Card>
    </Cards>
  );
};

export default ReactCard;
