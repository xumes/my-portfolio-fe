import React from "react";

import { faGithubSquare, faLinkedin, faYoutubeSquare, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode, faGraduationCap, faImages } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ContactForm from '../components/ContactForm';
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, sliderContainer,
  slider } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in <span>touch</span>.</motion.h2>
        </Hide>
      </Title>
      <Areas>
        <ContactArea>
          <Hide>
            <Social variants={titleAnim} href="http://github.com/xumes" target="_blank">
              <FontAwesomeIcon icon={faGithubSquare} size="4x" />
              <h3>github.com/xumes</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href="http://linkedin.com/in/reginaldosantos" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="4x" />
              <h3>linkedin.com/in/reginaldosantos</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href="http://youtube.com/c/ReginaldoSantosBR" target="_blank">
              <FontAwesomeIcon icon={faYoutubeSquare} size="4x" />
              <h3>youtube.com/c/ReginaldoSantosBR</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href="http://udemy.com/user/reginaldo-marcelo-dos-santos-2" target="_blank">
              <FontAwesomeIcon icon={faGraduationCap} size="3x" />
              <h3>udemy.com/user/reginaldo-marcelo-dos-santos-2</h3>
            </Social>
          </Hide>
          <Hide>
            <Social variants={titleAnim} href="http://t.me/reginaldosantosbr" target="_blank">
              <FontAwesomeIcon icon={faTelegram} size="4x" />
              <h3>t.me/reginaldosantosbr</h3>
            </Social>
          </Hide>
        </ContactArea>
        <FormArea>
          <ContactForm />
        </FormArea>
      </Areas>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  margin-bottom: 4rem;
  h2 {
    color: white;
  }
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

const Areas = styled(motion.div)`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
`;

const ContactArea = styled(motion.div)`

`;

const FormArea = styled(motion.div)`
  padding: 2rem 5rem;
  &:hover{

  }
`;

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
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default ContactUs;
