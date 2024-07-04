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
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState(0);

  const questions = testsData[lessonId];

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore(score + 1);
    } else {
      setErrors(errors + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleTestCompletion = () => {
    if (score === questions.length) {
      // Обновляем прогресс пользователя
      const storedProgress = JSON.parse(localStorage.getItem('completedLessons')) || [];
      if (!storedProgress.includes(parseInt(lessonId))) {
        storedProgress.push(parseInt(lessonId));
        localStorage.setItem('completedLessons', JSON.stringify(storedProgress));
      }
    }
    setShowResult(true);
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setErrors(0);
    setSelectedOption('');
    setShowResult(false);
  };

  const handleNextLesson = () => {
    navigate(`/learning/lessons/${parseInt(lessonId) + 1}`);
  };

  return (
    <div className="test-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      {!showResult ? (
        <>
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
        </>
      ) : (
        <>
          {score === questions.length ? (
            <>
              <h1>Тест пройден!</h1>
              <button onClick={handleNextLesson}>Следующий урок</button>
            </>
          ) : (
            <>
              <h1>Тест не пройден. Количество ошибок: {errors}</h1>
              <button onClick={handleRetry}>Пройти заново</button>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default Test;
