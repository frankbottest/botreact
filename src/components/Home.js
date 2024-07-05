import React from 'react';
import './Home.css';
import { FaYoutube, FaTelegramPlane } from 'react-icons/fa';

function Home() {
  const latestVideoId = '2aE9C3otSr8'; // Замените на ID последнего видео

  return (
    <div className="home">
      <h1 className="home-title">CryptoDex Academy</h1>
      <h2 className="home-subtitle">Твой карманный помощник в мире криптовалют</h2>
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
      <div className="latest-video">
        <h3>Последнее видео:</h3>
        <div className="video-container">
          <iframe
            src={`https://www.youtube.com/embed/${latestVideoId}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
      <div className="ad-block">
        <p>Реклама</p>
      </div>
    </div>
  );
}

export default Home;
