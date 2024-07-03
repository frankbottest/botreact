import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

function Learning() {
  return (
    <div className="learning">
      <h1>Курс "Основы криптовалют"</h1>
      <p>Этот курс состоит из 15 уроков, которые помогут вам освоить основы криптовалют.</p>
      <Link to="/learning/lessons" className="start-button">Начать обучение</Link>
    </div>
  );
}

export default Learning;
