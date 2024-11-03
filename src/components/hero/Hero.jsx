import React from "react";
import "../../styles/Hero.scss";
import { Button } from "react-bootstrap";

import facebook from "../../assets/icons/facebook.svg";
import heroImage from "../../assets/images/hero.png";
import { BodyOne, Title } from "../common/CustomeComponents";


export const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero-content section">
        <Title level={3}>Hello, It's Me</Title>
        <Title level={6}>Little Demon</Title>
        <Title level={3}>
          And I'm a <span>Frontend Devloper</span>
        </Title>
        <BodyOne>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          ipsam voluptatum vel perspiciatis, illo debitis veritatis ipsum?
        </BodyOne>

        <div className="social-media">
          <img src={facebook} className="social_icon" alt="FB"/>
          <img src={facebook} className="social_icon" alt="FB"/>
          <img src={facebook} className="social_icon" alt="FB" />
          <img src={facebook} className="social_icon" alt="FB" />
        </div>

        <Button>Download Resume</Button>

      </div>
      <div className="hero_image_box">
        <img src={heroImage} alt="" className="hero_image"/>
      </div>
    </div>
  );
};
