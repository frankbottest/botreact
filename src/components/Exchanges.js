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
      <div className="exchange-list">
        <Link to="/exchanges/bybit" className="exchange-item">
          <img src={bybitLogo} alt="Bybit" className="exchange-image" />
          <div className="exchange-content">
            <h2>Bybit</h2>
            <p>Торговая платформа с фокусом на деривативы.</p>
          </div>
        </Link>
        <Link to="/exchanges/bingx" className="exchange-item">
          <img src={bingxLogo} alt="BingX" className="exchange-image" />
          <div className="exchange-content">
            <h2>BingX</h2>
            <p>Биржа с широким спектром криптовалют.</p>
          </div>
        </Link>
        <Link to="/exchanges/okx" className="exchange-item">
          <img src={okxLogo} alt="OKX" className="exchange-image" />
          <div className="exchange-content">
            <h2>OKX</h2>
            <p>Популярная криптовалютная биржа с множеством инструментов.</p>
          </div>
        </Link>
        <Link to="/exchanges/binance" className="exchange-item">
          <img src={binanceLogo} alt="Binance" className="exchange-image" />
          <div className="exchange-content">
            <h2>Binance</h2>
            <p>Крупнейшая биржа по объему торгов и пользователям.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Exchanges;
