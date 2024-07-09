import React from 'react';
import { Link } from 'react-router-dom';
import './Learning.css';
import course1Image from '../assets/course1.png';
import course2Image from '../assets/course2.png';
import course3Image from '../assets/course3.png';

const courses = [
  { id: 1, title: "Основы криптовалют", description: "Изучите базовые понятия и принципы работы криптовалют.", image: course1Image, label: "Новичок", labelClass: "beginner-label" },
  { id: 2, title: "Продвинутые техники", description: "Углубленные знания и продвинутые техники работы с криптовалютами.", image: course2Image, label: "Продвинутый", labelClass: "advanced-label" },
  { id: 3, title: "Торговые стратегии", description: "Освойте эффективные торговые стратегии и тактики.", image: course3Image, label: "Продвинутый", labelClass: "advanced-label" }
];

function Learning() {
  return (
    <div className="learning">
      <h1>Обучение</h1>
      <p>Выберите курс для обучения:</p>
      <div className="courses">
        {courses.map(course => (
          <Link key={course.id} to={`/learning/courses/${course.id}`} className="course-button">
            <img src={course.image} alt={course.title} className="course-image" />
            <div className="course-text">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
            </div>
            <div className={`course-label ${course.labelClass}`}>{course.label}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Learning;
