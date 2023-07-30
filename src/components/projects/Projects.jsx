import React from 'react'
import './projects.css';
import Works from './Works';

const Projects = () => {
  return (
    <section className="project section" id='projects'>
        <h2 className="section__title">Projects</h2>
        <span className="section__subtitle">My recent works</span>

        <Works/>
    </section>
  );
};

export default Projects;