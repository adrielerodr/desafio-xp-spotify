import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to="/">
        <img
          alt="Spotify"
          className="logo-img"
          src={require('../../assets/Spotify_Icon.png')}
        />
      </Link>
    </div>
  </nav>
);

export default Navigation;
