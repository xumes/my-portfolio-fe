import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
//Redux
import { Link } from "react-router-dom";
import { popup } from "../animation";

const Card = ({ name, released, image, id }) => {
  const stringPathId = id.toString();

  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    // dispatch(loadDetail(id));
  };

  return (
    <StyledCard
      variants={popup}
      initial="hidden"
      animate="show"
      layoutId={stringPathId}
      onClick={loadDetailHandler}
    >
      <Link to={`/portfolio/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{released}</p>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={image}
          alt={name}
        />
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`;

export default Card;
