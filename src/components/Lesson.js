import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import lessonsData from '../data/lessons.json';
import './Lesson.css';

function Lesson() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const lesson = lessonsData.find(lesson => lesson.id === parseInt(lessonId));

  if (!lesson) {
    return <div className="lesson-page"><h1>Урок не найден</h1></div>;
  }

  return (
    <div className="lesson-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{lesson.title}</h1>
      <div className="lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <Link to={`/learning/lessons/${lessonId}/test`} className="test-button">Пройти тест</Link>
    </div>
  );
}

export default Lesson;
