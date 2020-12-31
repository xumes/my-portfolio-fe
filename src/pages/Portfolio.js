import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Card from '../components/Card';
import PortfolioDetail from '../components/PortfolioDetail';

//Animations
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {pageAnimation} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const Portfolio = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];

  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <PortfolioList
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >

      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <PortfolioDetail pathId={pathId} />}
        </AnimatePresence>

        <h4>My portfolio</h4>
        <Cards>
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="123"
              image="img"
              key= "123"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="456"
              image="img"
              key= "456"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="789"
              image="img"
              key= "789"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="87"
              image="img"
              key= "098"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="87"
              image="img"
              key= "123"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="76"
              image="img"
              key= "76"
            />
            <Card
              name="Meu projeto"
              released="2020-12-30"
              id="54"
              image="img"
              key= "54"
            />
        </Cards>
      </AnimateSharedLayout>

      <ScrollTop />
    </PortfolioList>
  );
};

const PortfolioList = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Cards = styled(motion.div)`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;
const Hide = styled.div`
  overflow: hidden;
`;

export default Portfolio;
