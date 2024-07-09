import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

const courses = [
  { id: 1, title: "Курс 1: Основы криптовалют" },
  { id: 2, title: "Курс 2: Продвинутые техники" },
  { id: 3, title: "Курс 3: Торговые стратегии" }
];

const Learning = () => {
  return (
    <div className="learning">
      <h1>Обучение</h1>
      <p>Изучите курсы по криптовалютам, чтобы стать экспертом в этой области.</p>
      <div className="courses">
        {courses.map(course => (
          <div key={course.id} className="course">
            <h2>{course.title}</h2>
            <Link to={`/learning/courses/${course.id}`} className="start-button">Начать курс</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Learning;
