import React from 'react'
import './About.scss'
import { Button } from "react-bootstrap";
import { BodyOne, Title } from "../common/CustomeComponents";
import aboutImage from "../../assets/images/Chandan image holo.png";

export const About = () => {
  return (
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
                ipsam voluptatum vel perspiciatis, illo debitis veritatis ipsu ipsum dolor sit amet, consectetur adipisicing elit. Possimus
                ipsam voluptatum vel perspiciatis, illo debitis veritatis ipsu ipsum dolor sit amet, consectetur adipisicing elit. Possimus
                ipsam voluptatum vel perspiciatis, illo debitis veritatis ipsum?
            </BodyOne>

            <div>
                <Button>Read more</Button>
            </div>
        </div>

    </div>
  )
}
