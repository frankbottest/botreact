// src/components/Exchanges.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Exchanges.css';
import bybitLogo from '../assets/bybit.png';
import bingxLogo from '../assets/bingx.png';
import okxLogo from '../assets/okx.png';
import binanceLogo from '../assets/binance.png';

function Exchanges() {
  return (
    <div className="exchanges">
      <h1>Биржи</h1>
      <div className="exchange-buttons">
        <Link to="/exchanges/bybit" className="exchange-button">
          <img src={bybitLogo} alt="Bybit" />
          <span>Bybit</span>
        </Link>
        <Link to="/exchanges/bingx" className="exchange-button">
          <img src={bingxLogo} alt="BingX" />
          <span>BingX</span>
        </Link>
        <Link to="/exchanges/okx" className="exchange-button">
          <img src={okxLogo} alt="OKX" />
          <span>OKX</span>
        </Link>
        <Link to="/exchanges/binance" className="exchange-button">
          <img src={binanceLogo} alt="Binance" />
          <span>Binance</span>
        </Link>
      </div>
    </div>
  );
}

export default Exchanges;
