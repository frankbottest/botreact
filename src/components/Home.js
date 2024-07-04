import React from 'react';
import './Home.css';
import youtubeIcon from '../assets/youtube.png';
import telegramIcon from '../assets/telegram.png';

function Home() {
  return (
    <div className="home">
      <h1 className="home-title">CryptoDex Academy</h1>
      <div className="button-container">
        <a href="https://www.youtube.com" className="home-button youtube">
          <img src={youtubeIcon} alt="YouTube" />
          <span>YouTube</span>
        </a>
        <a href="https://www.telegram.org" className="home-button telegram">
          <img src={telegramIcon} alt="Telegram" />
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
