// src/components/Education.js
import React from 'react';

const Education = () => {
  const titleStyle = {
    fontWeight: 'bold',
    color: '#333' // Example color, change as needed
  };

  const descriptionStyle = {
    fontSize: '1rem', // Example font size, adjust as needed
    color: '#666' // Example color, change as needed
  };

  return (
    <section className="p-5 bg-light">
      <div className="container">
        <h2>Education</h2>
        <ul className="list-unstyled">
          <li>
            <i className="fas fa-graduation-cap"></i> 
            <span style={titleStyle}> Full Stack Web Development Course</span>
            <p style={descriptionStyle}>Entry App | MERN Stack | 2024</p>
          </li>
          <li>
            <i className="fas fa-school"></i> 
            <span style={titleStyle}> Bachelor of Computer Application</span>
            <p style={descriptionStyle}>Amrutha College, Padil, Mangalore | 2012 – 2015</p>
          </li>
          <li>
            <i className="fas fa-building"></i> 
            <span style={titleStyle}> Commerce</span>
            <p style={descriptionStyle}>Sarojini Madhusudhana PU College, Attavar, Mangalore | 2010 – 2012</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
