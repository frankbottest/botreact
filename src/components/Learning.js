import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';

const courses = [
  { id: 1, title: "Основы криптовалют" },
  { id: 2, title: "Продвинутые техники" },
  { id: 3, title: "Торговые стратегии" }
];

function Learning() {
  return (
    <div className="learning">
      <h1>Обучение</h1>
      <p>Выберите курс для обучения:</p>
      <div className="courses">
        {courses.map(course => (
          <Link key={course.id} to={`/learning/courses/${course.id}`} className="course-button">
            {course.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Learning;
