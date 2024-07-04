import React from 'react';
import { Link } from 'react-router-dom';
import './Trading.css';

function Trading() {
  return (
    <div className="container trading-page">
      <h1>Трейдинг</h1>
      <div className="trading-sections">
        <Link to="/trading/patterns" className="trading-section">
          Паттерны
        </Link>
        <Link to="/trading/candles" className="trading-section">
          Свечи
        </Link>
        <Link to="/trading/strategies" className="trading-section">
          Стратегии
        </Link>
      </div>
    </div>
  );
}

export default Trading;
