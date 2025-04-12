import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.scss';
import fileIcon from '../../../public/images/icons/files.svg';
import projectImage from '../../../public/images/projectImage1.webp';
import vibhImage from '../../../public/images/Projects/Vibhu-Image.png';
import vibhuLogo from '../../../public/images/logos/vibhu-logo-final.png';
import vibhuIcon from '../../../public/images/logos/vibhuLogoPng.png';

const projects = [
  { id: '01', title: 'Vibhu', logo: vibhuLogo, image: vibhImage },
  { id: '02', title: 'Gloster', logo: fileIcon, image: projectImage },
  { id: '03', title: 'Linea Vol.I', logo: fileIcon, image: projectImage },
  { id: '04', title: 'Cube 2.0', logo: fileIcon, image: projectImage },
];

export default function ProjectPage() {
  return (
    <div className="container">
      <div className="project-page">
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}