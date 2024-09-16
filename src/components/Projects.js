// src/components/Projects.js
import React from 'react';

const Projects = () => {
  const linkStyle = {
    color: '#00bcd4', // Example color, change as needed
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  const descriptionStyle = {
    fontSize: '1rem', // Example font size, adjust as needed
    color: '#e0e0e0' // Example color, change as needed
  };

  return (
    <section className="p-5 bg-dark text-light">
      <div className="container">
        <h2>Projects</h2>
        <ul className="list-unstyled">
          <li>
            <i className="fas fa-book"></i> 
            <a href="https://github.com/Jeetheshc/bookapp" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Book Application
            </a>
            <p style={descriptionStyle}>
              Developed a full-stack book management application using the MERN stack, with data storage in MongoDB and a user-friendly interface in React.
            </p>
          </li>
          <li>
            <i className="fas fa-envelope"></i> 
            <a href="https://github.com/Jeetheshc/contact" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Contact Form
            </a>
            <p style={descriptionStyle}>
              Built a contact form application using React and Node.js, with server-side form validation and responsive design via Bootstrap.
            </p>
          </li>
          <li>
            <i className="fas fa-table"></i> 
            <a href="https://github.com/Jeetheshc/table" target="_blank" rel="noopener noreferrer" style={linkStyle}>
              Table Project
            </a>
            <p style={descriptionStyle}>
              Designed a dynamic table with sorting and filtering capabilities using React, improving data management functionality for users.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
