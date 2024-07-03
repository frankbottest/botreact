import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Test.css';

function Test() {
  const { lessonId } = useParams();
  const navigate = useNavigate();

  const handleTestCompletion = () => {
    // Обновляем прогресс пользователя
    const storedProgress = JSON.parse(localStorage.getItem('completedLessons')) || [];
    if (!storedProgress.includes(parseInt(lessonId))) {
      storedProgress.push(parseInt(lessonId));
      localStorage.setItem('completedLessons', JSON.stringify(storedProgress));
    }

    navigate(`/learning/lessons`);
  };

  return (
    <div className="test">
      <h1>Тест по уроку {lessonId}</h1>
      <p>Тестовое задание...</p>
      <button onClick={handleTestCompletion}>Завершить тест</button>
    </div>
  );
}

export default Test;
