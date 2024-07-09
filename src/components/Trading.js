import React from 'react';
import { Link } from 'react-router-dom';
import './Trading.css';
import patternsImage from '../assets/patterns.png';
import candlesImage from '../assets/candles.png';
import strategiesImage from '../assets/strategies.png';

function Trading() {
  return (
    <div className="trading">
      <h1>Трейдинг</h1>
      <div className="course-list">
        <Link to="/trading/patterns" className="course-item">
          <img src={patternsImage} alt="Паттерны" className="course-image" />
          <div className="course-content">
            <h2>Паттерны</h2>
            <p>Изучите различные графические паттерны для успешного трейдинга.</p>
          </div>
        </Link>
        <Link to="/trading/candles" className="course-item">
          <img src={candlesImage} alt="Свечи" className="course-image" />
          <div className="course-content">
            <h2>Свечи</h2>
            <p>Понимание свечных графиков и их использование в трейдинге.</p>
          </div>
        </Link>
        <Link to="/trading/strategies" className="course-item">
          <img src={strategiesImage} alt="Стратегии" className="course-image" />
          <div className="course-content">
            <h2>Стратегии</h2>
            <p>Различные стратегии для успешной торговли криптовалютами.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Trading;
