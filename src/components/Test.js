import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import testsData from '../data/tests.json';
import './Test.css';

function Test() {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);

  const questions = testsData[lessonId];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      handleTestCompletion();
    }
  };

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
    <div className="test-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>Тест по уроку {lessonId}</h1>
      <p>{questions[currentQuestionIndex].question}</p>
      {questions[currentQuestionIndex].options.map((option, index) => (
        <label key={index} className="option-label">
          <input
            type="radio"
            value={option}
            checked={selectedOption === option}
            onChange={handleOptionChange}
            className="option-input"
          />
          {option}
        </label>
      ))}
      <button onClick={handleNextQuestion}>
        {currentQuestionIndex < questions.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
      </button>
    </div>
  );
}

export default Test;
