import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';

import fileIcon from '../../../public/images/icons/files.svg';
import projectImage from '../../../public/images/projectImage1.webp';

import amplifyLogo from '../../../public/images/logos/Amplify-Logo.png';
import amplifyImage from '../../../public/images/Projects/Amplify-Infra.png';

import vibhuLogo from '../../../public/images/logos/vibhu-logo-final.png';
import vibhImage from '../../../public/images/Projects/Vibhu-prjct.png';

import internBoxLogo from '../../../public/images/logos/InternboxNewLogo.png';
import internBoxImage from '../../../public/images/Projects/InternBoxImage.png';

import smartHealthLogo from '../../../public/images/logos/SmartHealthLogo.png';
import smartHealthImage from '../../../public/images/Projects/SmartHealthImage.png';



  
const projects = [
  { id: '01', title: 'Vibhu', logo: vibhuLogo, image: vibhImage },
  { id: '02', title: 'Amplify', logo: amplifyLogo, image: amplifyImage },
  { id: '03', title: 'InternBox', logo: internBoxLogo, image: internBoxImage },
  { id: '04', title: 'Smart Health', logo: smartHealthLogo, image: smartHealthImage },
];

export default function ProjectPage() {

  var mergeAlternately = function(word1, word2) {
    let temp = "";
        for(let i; i>word1.length; i++){
            temp = word1[i]+word2[i]
        }
    return temp;
};


console.log(mergeAlternately("abc", "vvv"))
  return (
    <div className="container">
      <div className="project-page">
        <div className="projects-box">

          <div className="project-grid">
            <div className="project-page-card-container">
              {projects.map((project, index) => (
                <ProjectCard
                  className="each-card"
                  index={index}
                  key={project.id}
                  {...project}
                />
              ))}
              <div className="card-container-background">
                <div className="card-section-background"></div>
                <div className="card-section-background"></div>
                <div className="card-section-background wavy-box">
                  <svg
                    className="wavy-pattern"
                    viewBox="0 0 300 350"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array.from({ length: 80 }).map((_, i) => {
                      const startX = 10 + i * 10; // Shift starting X to spread across
                      const cp1X = startX - 190;
                      const cp2X = startX - 100;
                      const endX = startX - 200;
                      const strokeWidth = i % 4 === 0 ? 2.5 : 1.3; // 1 in 3 is thick
                      return (
                        <path
                          key={i}
                          d={`M${startX} 0 C${cp1X} 100, ${cp2X} 1000, ${endX} 350`}
                          stroke="#00eeff81"
                          strokeWidth={strokeWidth}
                          fill="none"
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="card-section-background"></div>
              </div>
            </div>
          </div>

          <div className="project-grid">
            <div className="project-page-card-container">
              {projects.map((project, index) => (
                <ProjectCard
                  className="each-card"
                  index={index}
                  key={project.id}
                  {...project}
                />
              ))}
              <div className="card-container-background">
                <div className="card-section-background"></div>
                <div className="card-section-background wavy-box">
                  <svg
                    className="wavy-pattern"
                    viewBox="0 0 300 350"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {Array.from({ length: 80 }).map((_, i) => {
                      const startX = 10 + i * 10; // Shift starting X to spread across
                      const cp1X = startX - 190;
                      const cp2X = startX - 100;
                      const endX = startX - 200;
                      const strokeWidth = i % 4 === 0 ? 2.5 : 1.3; // 1 in 3 is thick
                      return (
                        <path
                          key={i}
                          d={`M${startX} 0 C${cp1X} 100, ${cp2X} 1000, ${endX} 350`}
                          stroke="#00eeff81"
                          strokeWidth={strokeWidth}
                          fill="none"
                        />
                      );
                    })}
                  </svg>
                </div>
                <div className="card-section-background"></div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}