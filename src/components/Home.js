import React from 'react';
import { FaYoutube, FaTelegram } from 'react-icons/fa';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="channel-title">CryptoDex Academy</div>
      <div className="links">
        <a href="https://youtube.com" className="link-button">
          <FaYoutube />
          <span>YouTube</span>
        </a>
        <a href="https://t.me" className="link-button">
          <FaTelegram />
          <span>Telegram</span>
        </a>
      </div>
      <div className="ad-block">Реклама</div>
    </div>
  );
}

export default Home;
