import Veggie from "../components/Veggie";
import Popular from "../components/Popular";
import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
function home() {
  return (
    <Motion
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Veggie />
      <Popular />
    </Motion>
  );
}
const Motion = styled(motion.div)`
  text-decoration: none;
`;
export default home;
