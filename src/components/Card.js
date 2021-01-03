import React from 'react'
// Styling and Animation
import styled from 'styled-components'
import { motion } from 'framer-motion'

import { Link } from 'react-router-dom'
import { popup } from '../animation'

const Card = ({ name, released, image, id, description }) => {
  const stringPathId = id.toString()

  const loadDetailHandler = () => {
    document.body.style.overflow = 'hidden'
    // dispatch(loadDetail(id));
  }

  return (
    <StyledCard
      variants={popup}
      initial='hidden'
      animate='show'
      layoutId={stringPathId.toString()}
      onClick={loadDetailHandler}
    >
      <Link to={`/portfolio/${id}`}>
        <Content>
          <InfoImage>
            <motion.img
              layoutId={`image ${stringPathId}`}
              src={image}
              alt={name}
            />
          </InfoImage>
          <InfoText>
            <Title layoutId={`title ${stringPathId}`}>{name}</Title>
            <h4>{released} [{stringPathId.toString()}]</h4>
            <p>{description}</p>
          </InfoText>
        </Content>
      </Link>
    </StyledCard>
  )
}

const StyledCard = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 10px rgba(240, 255, 0, 0.3);
  border-color: #416CD5;
  border-style: outset;
  text-align: center;
  border-radius: 1rem;

  cursor: pointer;
  overflow: hidden;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 100%;
`
const InfoImage = styled(motion.div)`
  width: 100%;
  height: 100%;
`

const InfoText = styled(InfoImage)`
  text-align: left;
  padding-left: 1rem;
`

const Title = styled(motion.h3)`
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
`

export default Card
