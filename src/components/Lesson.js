import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import lessons1 from '../data/lessons.json';
import lessons2 from '../data/lessons2.json';
import lessons3 from '../data/lessons3.json';
import './Lesson.css';

const lessonsData = {
  1: lessons1,
  2: lessons2,
  3: lessons3
};

function Lesson() {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const lessons = lessonsData[courseId];
  const lesson = lessons ? lessons.find(lesson => lesson.id === parseInt(lessonId)) : null;

  if (!lesson) {
    return <div className="page"><h1>Урок не найден</h1></div>;
  }

  return (
    <div className="page lesson-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{lesson.title}</h1>
      <div className="page-content lesson-content" dangerouslySetInnerHTML={{ __html: lesson.content }} />
      <Link to={`/learning/courses/${courseId}/lessons/${lessonId}/test`} className="test-button">Пройти тест</Link>
    </div>
  );
}

export default Lesson;
