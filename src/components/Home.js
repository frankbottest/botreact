import React from 'react';
import './Home.css';
import { FaYoutube, FaTelegramPlane } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">CryptoDex Academy</h1>
      <div className="button-container">
        <a href="https://www.youtube.com/@CryptoDexxx" className="home-button youtube">
          <FaYoutube className="icon" />
          <span>YouTube</span>
        </a>
        <a href="https://t.me/cryptodexxx" className="home-button telegram">
          <FaTelegramPlane className="icon" />
          <span>Telegram</span>
        </a>
      </div>
      <div className="ad-block">
        <p>Реклама</p>
      </div>
    </div>
  );
}

export default Home;
