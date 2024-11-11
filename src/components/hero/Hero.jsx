import React from "react";
import "../../styles/Hero.scss";
import { Button } from "react-bootstrap";

// import facebook from "../../assets/icons/facebook.svg";
// import twitter from "../../assets/icons/twitter.svg";
// import instagram from "../../assets/icons/instagram.svg";
// import linkedin from "../../assets/icons/linkedin.svg";

import heroImage from "../../assets/images/Chandan image fill.png";
import heroImageHolo from "../../assets/images/Chandan image holo.png";
import heroImage2 from "../../assets/images/hero.png";
import { BodyOne, Title } from "../common/CustomeComponents";


export const Hero = () => {
  return (
    <div className="hero_section">
      <div className="hero-content section">
        <Title level={3}>Hello, It's Me</Title>
        <Title level={1}>Little Demon</Title>
        <Title level={3} className={"Live_span_container"}>
          And I'm a <span>Frontend Developer</span>
        </Title>
        <BodyOne>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          ipsam voluptatum vel perspiciatis, illo debitis veritatis ipsum?
        </BodyOne>

        <div className="social-media">

          <a href="#" className="social_icon">
            <i class='bx bxl-facebook'></i>
          </a>
          <a href="#" className="social_icon">
            <i class='bx bxl-instagram-alt' ></i>
          </a>
          <a href="#" className="social_icon">
            <i class='bx bxl-twitter' ></i>
          </a>
          <a href="#" className="social_icon">
            <i class='bx bxl-linkedin' ></i>
          </a>

        </div>

        <div>
          <Button>Download Resume</Button>
        </div>

      </div>
      <div className="hero_image_box">
        <img src={heroImage} alt="" className="hero_image"/>
      </div>
    </div>
  );
};
