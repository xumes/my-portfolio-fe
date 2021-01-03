import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Card from '../components/Card';
import PortfolioDetail from '../components/PortfolioDetail';

//Animations
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import {fade} from "../animation";
import ScrollTop from "../components/ScrollTop";

//Temp
import {data} from '../fakedata';

const Portfolio = () => {
  //get the current location
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];


  return (
    <PortfolioList
      variants={fade} initial="hidden" animate="show"
    >

      <AnimateSharedLayout type="crossfade">
        <AnimatePresence>
          {pathId && <PortfolioDetail pathId={pathId} />}
        </AnimatePresence>
        <Hide>
        <Cards>
          {data && data.map(project => {
            return (
              <Card
                name={project.name}
                released={project.released}
                id={project.id}
                description= {project.shortDescription}
                image={project.image}
                key= {project.id}
              />
              )
          })}
        </Cards>
        </Hide>
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
