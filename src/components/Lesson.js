import React from 'react';
import { useParams, Link } from 'react-router-dom';
import lessonsData from '../data/lessons.json';
import './Lesson.css';

function Lesson() {
  const { lessonId } = useParams();
  const lesson = lessonsData.find(lesson => lesson.id === parseInt(lessonId));

  if (!lesson) {
    return <div className="lesson"><h1>Урок не найден</h1></div>;
  }

  return (
    <div className="lesson">
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
      <Link to={`/learning/lessons/${lessonId}/test`} className="test-button">Пройти тест</Link>
    </div>
  );
}

export default Lesson;
