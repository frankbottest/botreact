import React from 'react';
import { Link } from 'react-router-dom';
import './Trading.css';
import patternsImage from '../assets/patterns.png';
import candlesImage from '../assets/candles.png';
import strategiesImage from '../assets/strategies.png';

const sections = [
  { id: 'patterns', title: "Паттерны", description: "Изучите различные графические паттерны для успешного трейдинга.", image: patternsImage },
  { id: 'candles', title: "Свечи", description: "Понимание свечных графиков и их использование в трейдинге.", image: candlesImage },
  { id: 'strategies', title: "Стратегии", description: "Различные стратегии для успешной торговли криптовалютами.", image: strategiesImage }
];

function Trading() {
  return (
    <div className="trading">
      <h1>Трейдинг</h1>
      <p>Изучите различные аспекты трейдинга, включая паттерны, свечи и стратегии.</p>
      <div className="sections">
        {sections.map(section => (
          <Link key={section.id} to={`/trading/${section.id}`} className="section-button">
            <div className="section-image-wrapper">
              <img src={section.image} alt={section.title} className="section-image" />
            </div>
            <div className="section-text">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Trading;
