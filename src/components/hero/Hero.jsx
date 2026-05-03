import React, { useState } from "react";
import "./Hero.scss";
import { Button } from "react-bootstrap";

import heroImage from "../../assets/images/Me_png.png";
import { BodyOne, Title } from "../common/CustomeComponents";
import { Design } from "../common/Particle/Design";
import Toaster from "../common/Toaster/Toaster";

export const Hero = () => {
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  };

  const handleSocialClick = (platform) => {
    const socialLinks = {
      linkedin: "https://www.linkedin.com/",
      instagram: "https://www.instagram.com/",
      twitter: "https://twitter.com/",
    };

    if (platform === "facebook") {
      console.log("Facebook !");
    } else {
      window.open(socialLinks[platform], "_blank");
    }
  };

  const socialIcons = [
    { platform: "linkedin", iconClass: "bx bxl-linkedin" },
    { platform: "instagram", iconClass: "bx bxl-instagram-alt" },
    { platform: "twitter", iconClass: "bx bxl-twitter" },
    { platform: "facebook", iconClass: "bx bxl-facebook" },
  ];

  return (
    <section className="hero-page">
      <Design />
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
            <BodyOne className="w-[50%]">
              Frontend Developer with 1 year of experience in JavaScript, React,
              and modern web design,
              <br />
              skilled in creating responsive interfaces using CSS, SCSS,
              Bootstrap, and Tailwind, while expanding expertise in Angular and seeking opportunities to apply my expertise in Frontend Development, UI/UX Design, and modern web
                    technologies.
              <br />
            </BodyOne>

            <div className="social-media">
              {socialIcons.map(({ platform, iconClass }, index) => (
                <a
                  key={platform}
                  href={index}
                  className={`social_icon Index-${index}`}
                  style={{ '--delay-index': index }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSocialClick(platform);
                  }}
                >
                  <i className={iconClass}></i>
                </a>
              ))}
            </div>

            <div>
              <Button
              className="download-resume-btn"
                onClick={() => showToast("error", "Resume not uploaded yet.")}
              >
                Download Resume
              </Button>
            </div>
          </div>
          <div className="hero_image_box section">
            <img src={heroImage} alt="" className="hero_image" />
          </div>
        </div>
      </div>
    </section>
  );
};
