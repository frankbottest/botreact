import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';
import beginnerImage from '../assets/beginner.png';
import intermediateImage from '../assets/intermediate.png';
import advancedImage from '../assets/advanced.png';

function Learning() {
  return (
    <div className="learning">
      <h1>Обучение</h1>
      <div className="course-list">
        <Link to="/learning/beginner" className="course-item">
          <img src={beginnerImage} alt="Начальный курс" className="course-image" />
          <div className="course-content">
            <h2>Начальный курс</h2>
            <p>Основы криптовалют и блокчейна для начинающих.</p>
          </div>
        </Link>
        <Link to="/learning/intermediate" className="course-item">
          <img src={intermediateImage} alt="Продвинутый курс" className="course-image" />
          <div className="course-content">
            <h2>Продвинутый курс</h2>
            <p>Углубленное изучение криптовалют и трейдинга.</p>
          </div>
        </Link>
        <Link to="/learning/advanced" className="course-item">
          <img src={advancedImage} alt="Курс для экспертов" className="course-image" />
          <div className="course-content">
            <h2>Курс для экспертов</h2>
            <p>Передовые техники и стратегии для профессионалов.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Learning;
