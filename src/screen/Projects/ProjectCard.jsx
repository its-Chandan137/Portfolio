import React, { useState } from 'react';
import './Projects.scss';
import ProjectPopup from './ProjectPopup';

const ProjectCard = ({ id, title, logo, image, className, index }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div 
      className={`card ${className}`}
      onClick={() => setIsPopupOpen(true)}
      style={{ '--delay-index-project': index }}
    >
        <div className='outer-card-display'>
          <img src={logo} alt={`${title} logo`} className="logo" />
          <div className='outer-card-texts'>
            <h3>{title}</h3>
            <span className="id">{id}</span>
          </div>
        </div>
      <div className={`card-content`}>
        <div className="inner-card-display">
          <img src={image} alt={`${title} image`} className="project-image" />
        </div>
      </div>
      {isPopupOpen && <ProjectPopup image={image} title={title} onClose={() => setIsPopupOpen(false)} />}
        <div className="animated-border">
          <div className="animated-border-inner"></div>
        </div>
    </div>
  );
};

export default ProjectCard;