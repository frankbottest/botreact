import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import lessons1 from '../data/lessons.json';
import lessons2 from '../data/lessons2.json';
import lessons3 from '../data/lessons3.json';
import './Course.css';

const lessonsData = {
  1: lessons1,
  2: lessons2,
  3: lessons3
};

const courseTitles = {
  1: "Курс 1: Основы криптовалют",
  2: "Курс 2: Продвинутые техники",
  3: "Курс 3: Торговые стратегии"
};

const Course = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const lessons = lessonsData[courseId];
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    const storedProgress = JSON.parse(localStorage.getItem(`completedLessons-${courseId}`)) || [];
    setCompletedLessons(storedProgress);
  }, [courseId]);

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

  if (!lessons) {
    return <div>Курс не найден</div>;
  }

  return (
    <div className="course-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{courseTitles[courseId]}</h1>
      <div className="lesson-list">
        {lessons.map((lesson, index) => (
          <Link
            key={lesson.id}
            to={isLessonCompleted(lesson.id) || index === 0 || isLessonCompleted(lessons[index - 1].id) ? `/learning/courses/${courseId}/lessons/${lesson.id}` : '#'}
            className={`lesson ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}
          >
            {lesson.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Course;
