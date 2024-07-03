import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import lessonsData from '../data/lessons.json';
import './LessonList.css';

function LessonList() {
  const [completedLessons, setCompletedLessons] = useState([]);

  useEffect(() => {
    // Загружаем прогресс пользователя из localStorage или Telegram Web App storage
    const storedProgress = JSON.parse(localStorage.getItem('completedLessons')) || [];
    setCompletedLessons(storedProgress);
  }, []);

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId);

  return (
    <div className="lesson-list">
      {lessonsData.map((lesson, index) => (
        <div key={lesson.id} className={`lesson ${isLessonCompleted(lesson.id) ? 'completed' : ''}`}>
          <Link to={isLessonCompleted(lesson.id) || index === 0 || isLessonCompleted(lessonsData[index - 1].id) ? `/learning/lessons/${lesson.id}` : '#'}>
            {lesson.title}
            <span className={`status-icon ${isLessonCompleted(lesson.id) ? 'completed' : 'pending'}`}>✔</span>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LessonList;
