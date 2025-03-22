import React, { useEffect, useState } from "react";
import "./Hero.scss";
import { Button } from "react-bootstrap";

// import facebook from "../../assets/icons/facebook.svg";
// import twitter from "../../assets/icons/twitter.svg";
// import instagram from "../../assets/icons/instagram.svg";
// import linkedin from "../../assets/icons/linkedin.svg";

import heroImage from "../../assets/images/Me_png.png";
import heroImage2 from "../../assets/images/Me_With_Background.png";
import { BodyOne, Title } from "../common/CustomeComponents";
import { Design } from "../common/Particle/Design";
import Toaster from "../common/Toaster/Toaster";




export const Hero = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  }

  return (
    <section>
          <Design/>
      <div className="container">

      <div className="hero_section section" id="hero">
        {toast && (
          <Toaster
            type={toast.type}
            message={toast.message}
            onClose={() => setToast(null)}
            duration={5000}
          />
        )}
        <div className="hero-content section">
          <Title level={3}>Hello, It's Me</Title>
          <Title level={1}>Chandan Swarnakar</Title>
          <Title level={3} className={"Live_span_container"}>
            And I'm a <span></span>
          </Title>
          <BodyOne>
          Frontend Developer with 1 year of experience in JavaScript, React, and modern web design,
          <br/>
          skilled in creating responsive interfaces using CSS, SCSS, Bootstrap, and Tailwind, while expanding expertise in 
          <br/>
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
            <Button onClick={() => showToast("error", "Resume not uploaded yet.")}>Download Resume</Button>
          </div>

        </div>
        <div className="hero_image_box section">
          <img src={heroImage} alt="" className="hero_image"/>
        </div>
      </div>
      </div>
    </section>
  );
};
