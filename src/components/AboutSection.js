import React from 'react'

// Images and icons
import profile from '../img/profile.jpg'
import { About, Description, Image, Hide } from '../styles'

// Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim, scrollReveal } from '../animation'
import Wave from './Wave'
import { useScroll } from './useScroll'

const AboutSection = () => {
  const [element, controls] = useScroll()
  return (
    <About
      variants={scrollReveal}
      animate={controls}
      initial='hidden'
      ref={element}
    >
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Reginaldo Santos</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Software Engineer</span>
            </motion.h2>
          </Hide>

        </motion.div>
        <motion.p variants={fade}>
          I'm a software engineer who is passionate about making code more accessible, creating technology to elevate people, and building community. Some technologies I enjoy working with include chatbots, the MERN (Mongo, Express, React and Node) stack and PHP.
          I am currently working on an awesome startup called <span>Proposify</span>.
        </motion.p>
        <motion.button variants={fade}>Contact Me</motion.button>
      </Description>
      <Image>
        <motion.div variants={photoAnim}>
          <img alt='Reginaldo Santos' src={profile} />
        </motion.div>
      </Image>
      <Wave />
    </About>
  )
}

// Styled Components

export default AboutSection
