import React from 'react';
import './Projects.scss';

const ProjectPopup = ({ image, title, onClose }) => {
  return (
    <div className="project-popup" onClick={onClose}>
      <div className="popup-content" onClick={e => e.stopPropagation()}>
        <img src={image} alt={`${title} image`} />
        <h2>{title}</h2>
        <p>Personal Project</p>
        <button className='close' onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectPopup;