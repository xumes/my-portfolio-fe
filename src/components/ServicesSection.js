import React from "react";
import ReactPlayer from 'react-player'
import styled from "styled-components";

//Import Icons
import { IconContext } from 'react-icons'
import { FaLaptopCode, FaGraduationCap, FaImages, FaGithubSquare } from 'react-icons/fa';

//Styles and animations
import { About, Description, Image } from "../styles";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          Things I <span>do</span>
        </h2>
        <Cards>
          <IconContext.Provider value={{ color: "#416CD5", size:"5rem"}}>
            <Card>
              <div className="icon">
                <FaLaptopCode />
                <h3>Portfolio</h3>
              </div>
              <p>Check my work on my Portfolio.</p>
            </Card>
            <Card>
              <div className="icon">
                <FaGraduationCap />
                <h3>Courses</h3>
              </div>
              <p>Courses at Udemy and other platforms (Portuguese only).</p>
            </Card>
            <Card>
              <div className="icon">
                <FaImages />
                <h3>Hobbies</h3>
              </div>
              <p>Some photos and videos of my experience in Halifax, Canada.</p>
            </Card>
            <Card>
              <div className="icon">
                <FaGithubSquare />
                <h3>My code</h3>
              </div>
              <p>Check my Github Portfolio.</p>
            </Card>
          </IconContext.Provider>
        </Cards>
      </Description>
      <Image>
        <ReactPlayer
              url="https://youtu.be/ClvFciFWSbo"
              volume="0.1"
              loop="true"
          />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    img{
      fill: blue;
    }

    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
