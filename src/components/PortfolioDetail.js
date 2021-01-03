import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

//Logo Languages
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//Temp
import {data} from '../fakedata';

const PortfolioDetail = ({ pathId }) => {
  const history = useHistory();

  const result = data.filter( item => pathId === item.id )[0];

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/portfolio");
    }
  };

  return (
    <>
    {pathId && (
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId.toString()}>
            <Stats>
              <div>
                <Title layoutId={`title ${pathId}`}>{result.name}</Title>
                <DescriptionShort>
                  <p>{result.shortDescription}</p>
                 </DescriptionShort>
              </div>
              <Info>
                <h3>Languages [{pathId.toString()}]</h3>
                <Languages>
                  { result.languages && result.languages.map(language => {
                    return (
                      <Language key={language.name}>
                        <FontAwesomeIcon icon={[language.type, language.icon]} size="4x" /> {language.name}
                      </Language>
                    )
                  })}
                </Languages>
              </Info>
            </Stats>
            <Description>
              <p>{result.fullDescription}</p>
            </Description>
            <motion.img src={result.image} layoutId={`image ${pathId}`} />
          </Detail>
        </CardShadow>
    )}
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;

const Detail = styled(motion.div)`
  width: 80%;
  min-height: 80vh;
  border-radius: 1rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 15%;
  margin-bottom: 10%;
  z-index: 10;
  img {
    width: 100%;
    object-fit: cover;
  }
  @media (max-width: 1300px) {
    top: 28%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  padding: 1rem 5rem;
`;

const Info = styled(motion.div)`
  text-align: center;
  min-width: 300px;
  h3{
    color: #696969;
  }
`;

const Languages = styled(motion.div)`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));
  grid-column-gap: 0.2rem;
  grid-row-gap: 0.1rem;
  padding-top: 1rem;
  svg {
    color: #416CD5;
  }
  img {
    margin-left: 3rem;
  }
`;

const Language = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #416CD5;
`;

const Title = styled(motion.h2)`
    color: #696969;
`

const Description = styled(motion.div)`
  padding: 2rem 5rem;
  p {
    color: black;
  }
`;

const DescriptionShort = styled(Description)`
  padding: 0;
`

export default PortfolioDetail;
