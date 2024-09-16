// src/components/ProfilePhoto.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// Import the profile image
import jeetheshImage from './jeethesh.png';

const ProfilePhoto = () => {
  return (
    <div className="text-center">
      <img
        src={jeetheshImage}
        alt="Jeethesh"
        className="rounded-circle mb-4"
        style={{ width: '150px', border: '5px solid #fff' }}
      />
    </div>
  );
};

export default ProfilePhoto;
