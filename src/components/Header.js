// src/components/Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfilePhoto from './ProfilePhoto';

const Header = () => {
  return (
    <header className="bg-dark text-light text-center p-5">
      {/* Use the ProfilePhoto component */}
      <ProfilePhoto />
      <h1 className="display-4">Jeethesh C</h1>
      <p className="lead">Full Stack Developer | Technical Assistant | Problem Solver</p>
    </header>
  );
};

export default Header;
