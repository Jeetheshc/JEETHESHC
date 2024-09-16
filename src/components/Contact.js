// src/components/Contact.js
import React from 'react';

const Contact = () => {
  // Inline style object for the contact links
  const linkStyle = {
    color: '#ffffff', // White text color
    textDecoration: 'none' // Remove underline
  };

  const linkHoverStyle = {
    textDecoration: 'underline' // Underline on hover
  };

  return (
    <section className="p-5 bg-dark text-light">
      <div className="container">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:jeetheshc@gmail.com" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>jeetheshc@gmail.com</a></p>
        <p>Phone: <a href="tel:+917994055880" style={linkStyle} onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>+91 7994055880</a></p>
        <p>Location: Manjeshwar, Kasaragod, Kerala - 671323</p>
        <p><a href="https://www.linkedin.com/in/jeetheshc/" style={linkStyle} target="_blank" rel="noopener noreferrer" onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>LinkedIn</a></p>
        <p><a href="https://github.com/Jeetheshc" style={linkStyle} target="_blank" rel="noopener noreferrer" onMouseOver={(e) => e.target.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={(e) => e.target.style.textDecoration = linkStyle.textDecoration}>GitHub</a></p>
      </div>
    </section>
  );
};

export default Contact;
