// src/components/Skills.js
import React from 'react';

const Skills = () => {
  return (
    <section className="p-5 bg-dark text-light">
      <div className="container">
        <h2>Skills</h2>
        <ul className="list-unstyled">
          <li><i className="fas fa-code"></i> <strong>JavaScript (ES6+)</strong></li>
          <li><i className="fab fa-react"></i> <strong>React.js (Frontend)</strong></li>
          <li><i className="fab fa-node"></i> <strong>Node.js (Backend)</strong></li>
          <li><i className="fas fa-database"></i> <strong>MongoDB (Database)</strong></li>
          <li><i className="fas fa-cogs"></i> <strong>Express.js (Backend Framework)</strong></li>
          <li><i className="fas fa-tools"></i> <strong>Problem Solving & Troubleshooting</strong></li>
          <li><i className="fas fa-network-wired"></i> <strong>Network Administration</strong></li>
          <li><i className="fas fa-cogs"></i> <strong>Software Installation & Configuration</strong></li>
        </ul>
        <h3 className="mt-4">Technical Skills</h3>
        <ul className="list-unstyled">
          <li><i className="fas fa-server"></i> <strong>System Administration:</strong> Installation, configuration, and troubleshooting of software and hardware systems, including laptops, desktops, printers, and scanners.</li>
          <li><i className="fas fa-network-wired"></i> <strong>Networking:</strong> Office network setup, troubleshooting, and management of network devices.</li>
          <li><i className="fas fa-database"></i> <strong>SQL & Databases:</strong> Microsoft SQL Server, MongoDB, database administration, data extraction, transformation, and loading (ETL).</li>
          <li><i className="fas fa-laptop-code"></i> <strong>Software Development:</strong> MERN Stack (MongoDB, Express.js, React, Node.js), HTML, CSS, JavaScript.</li>
          <li><i className="fas fa-tools"></i> <strong>Tools:</strong> Microsoft SQL Server, Git, GitHub, Visual Studio Code, Postman, MS Office Suite.</li>
          <li><i className="fas fa-chart-line"></i> <strong>Business Intelligence:</strong> Performance tuning and automation of reporting processes.</li>
          <li><i className="fas fa-laptop"></i> <strong>Hardware:</strong> Assembling, configuring, and maintaining laptops, desktops, and other office devices.</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
