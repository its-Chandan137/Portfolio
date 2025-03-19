import React from 'react'
import './About.scss'
import { Button } from "react-bootstrap";
import { BodyOne, Title } from "../common/CustomeComponents";
import aboutImage from "../../assets/images/Me_png.png";

export const About = () => {
  return (

    <section className='bg-second-bg-color'>
        <div className="container">
            <div className='about_Section section' id='about'>

                <div className="about_img">
                    <img src={aboutImage} alt="holo" />
                </div>

                <div className="about_content">
                    <Title level={2} className={"heading"}>
                        About <span>Me</span>
                    </Title>
                    <Title level={3}>
                        Frontend Developer
                    </Title>
                    <BodyOne>
                    Frontend Developer with 1 year of experience specializing in JavaScript,
                    React, and web design. Passionate about creating intuitive, responsive user interfaces using CSS, SCSS, Bootstrap, and Tailwind. Currently
                    expanding skills in Angular and seeking opportunities to apply my expertise in Frontend Development, UI/UX Design, and modern web
                    technologies.
                    </BodyOne>

                    <div>
                        <Button>Read more</Button>
                    </div>
                </div>

            </div>
        </div>
    </section>


  )
}
