import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

const PortfolioDetail = ({ pathId }) => {
  const history = useHistory();

  //Exit Detail
  const exitDetailHander = (e) => {
    const element = e.target;
    if (element.classList.contains("shadow")) {
      document.body.style.overflow = "auto";
      history.push("/");
    }
  };

  return (
    <>
        <CardShadow className="shadow" onClick={exitDetailHander}>
          <Detail layoutId={pathId}>
            <Stats>
              <Rating>
                <Title layoutId={`title ${pathId}`}>Nome deve aparecer aqui</Title>
                <h3>Rating: </h3>

              </Rating>
              <Info>
                <h3>Platforms</h3>
                {/* <Platforms>
                  {game.platforms.map((data) => (
                    <img
                      alt={data.platform.name}
                      key={data.platform.id}
                      src={data.platform.name}
                    ></img>
                  ))}
                </Platforms> */}
              </Info>
            </Stats>
            <Description>
              <p>Bla Bla Bla</p>
            </Description>
          </Detail>
        </CardShadow>
    </>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  padding: 5rem 10rem;
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
  padding: 2rem 5rem;
  background: white;
  position: absolute;
  left: 10%;
  top: 15%;
  color: black;
  z-index: 10;
  img {
    width: 100%;
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2rem;
    height: 2rem;
    display: inline;
  }
  h3: {
    color: black;
  }
`;
const Info = styled(motion.div)`
  text-align: center;
  h3{
    color: #696969;
  }
`;
const Rating = styled(motion.div)`
  h3{
      color: #696969;
    }
`
const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  img {
    margin-left: 3rem;
  }
`;
const Title = styled(motion.h3)`
    color: #696969;
`
const Media = styled(motion.div)`
  margin-top: 5rem;
  img {
    width: 100%;
  }
`;

const Description = styled(motion.div)`
  margin: 5rem 0rem;
`;

export default PortfolioDetail;
