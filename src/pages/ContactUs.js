import React from 'react'

import { faGithubSquare, faLinkedin, faYoutubeSquare, faTelegramPlane } from '@fortawesome/free-brands-svg-icons'
import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import ContactForm from '../components/ContactForm'
// Animations
import { motion } from 'framer-motion'
import {
  pageAnimation, titleAnim, sliderContainer,
  slider
} from '../animation'
import styled from 'styled-components'

const ContactUs = () => {
  return (
    <ContactStyle
      exit='exit'
      variants={pageAnimation}
      initial='hidden'
      animate='show'
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider} />
        <Frame2 variants={slider} />
        <Frame3 variants={slider} />
        <Frame4 variants={slider} />
      </motion.div>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in <span>touch</span>.</motion.h2>
        </Hide>
      </Title>
      <Areas>
        <FormArea>
          <ContactForm />
        </FormArea>
        <ContactArea>
          <Hide>
            <Social variants={titleAnim} href='http://github.com/xumes' target='_blank'>
              <FontAwesomeIcon icon={faGithubSquare} size='4x' />
              <h3>github.com/xumes</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href='http://linkedin.com/in/reginaldosantos' target='_blank'>
              <FontAwesomeIcon icon={faLinkedin} size='4x' />
              <h3>linkedin.com/in/reginaldosantos</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href='http://youtube.com/c/ReginaldoSantosBR' target='_blank'>
              <FontAwesomeIcon icon={faYoutubeSquare} size='4x' />
              <h3>youtube.com/c/ReginaldoSantosBR</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href='http://udemy.com/user/reginaldo-marcelo-dos-santos-2' target='_blank'>
              <FontAwesomeIcon icon={faGraduationCap} size='3x' />
              <h3>udemy.com/user/reginaldo-marcelo-dos-santos-2</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href='http://t.me/reginaldosantosbr' target='_blank'>
              <FontAwesomeIcon icon={faTelegramPlane} size='4x' />
              <h3>t.me/reginaldosantosbr</h3>
            </Social>
          </Hide>
        </ContactArea>
      </Areas>
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 1rem 10rem;
  color: #353535;
  min-height: 90vh;
`

const Title = styled.div`
  margin-bottom: 4rem;
  h2 {
    color: white;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`

const Areas = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 2rem;
`

const ContactArea = styled(motion.div)`
  padding: 1rem 5rem;
`

const FormArea = styled(motion.div)`
  min-width: 80vh;
`

const Social = styled(motion.a)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 15px 50px;
  padding-left: 2rem;
  text-decoration: none;
  &:hover{
    background: yellow;
    cursor: pointer;
  }
  h3 {
    color: grey;
    margin: 2rem;
  }
  color: inherit;
  @media (max-width: 1385px) {
    h3: {
      font-size: 1rem;
      background-color: blue;
    }
  }
`

// Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`
const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default ContactUs
