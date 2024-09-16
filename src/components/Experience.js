// src/components/Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section className="p-5 bg-light">
      <div className="container">
        <h2>Professional Experience</h2>
        <div>
          <h4>Technical Assistant</h4>
          <p>Manjeshwar Grama Panchayat | 2015 – Present</p>
          <ul className="list-unstyled">
            <li><i className="fas fa-laptop-code"></i> Installed, configured, and troubleshot software and hardware systems, ensuring the office’s IT infrastructure operated efficiently.</li>
            <li><i className="fas fa-network-wired"></i> Managed office network systems, including setting up network devices and resolving connectivity issues.</li>
            <li><i className="fas fa-print"></i> Provided technical support for printers, scanners, and other peripheral devices, ensuring smooth office operations.</li>
            <li><i className="fas fa-database"></i> Administered databases and websites, applying updates and troubleshooting bugs to maintain optimal performance.</li>
            <li><i className="fas fa-laptop"></i> Assembled and configured laptops and desktops, ensuring all systems were up-to-date and functioning correctly.</li>
            <li><i className="fas fa-user-cog"></i> Guided staff on software usage, troubleshooting, and technical processes, enhancing their ability to work with IT systems effectively.</li>
            <li><i className="fas fa-tools"></i> Demonstrated strong problem-solving skills by identifying and resolving technical issues quickly, minimizing downtime and ensuring continuous office operations.</li>
            <li><i className="fas fa-vote-yea"></i> Supported the entire process of the Local Self Government Department (LSGD) elections, assisting with technical setups, managing voting systems, and ensuring all IT-related functions ran smoothly during the election.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
