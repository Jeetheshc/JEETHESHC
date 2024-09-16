// src/components/Projects.js
import React from 'react';

const Projects = () => {
  return (
    <section className="p-5 bg-light">
      <div className="container">
        <h2>Projects</h2>
        <ul className="list-unstyled">
          <li><a href="https://github.com/Jeetheshc/bookapp" target="_blank" rel="noopener noreferrer">Book App</a></li>
          <li><a href="https://github.com/Jeetheshc/contact" target="_blank" rel="noopener noreferrer">Contact Project</a></li>
          <li><a href="https://github.com/Jeetheshc/table" target="_blank" rel="noopener noreferrer">Table Project</a></li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
