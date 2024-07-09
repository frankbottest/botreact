import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tests1 from '../data/tests.json';
import tests2 from '../data/tests2.json';
import tests3 from '../data/tests3.json';
import './Test.css';

const testsData = {
  1: tests1,
  2: tests2,
  3: tests3
};

const Test = () => {
  const { courseId, lessonId } = useParams();
  const navigate = useNavigate();
  const tests = testsData[courseId];
  const test = tests ? tests[lessonId] : null;

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [errors, setErrors] = useState(0);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    if (selectedOption === test[currentQuestionIndex].answer) {
      setScore(score + 1);
    } else {
      setErrors(errors + 1);
    }
    setSelectedOption('');
    if (currentQuestionIndex < test.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setErrors(0);
    setSelectedOption('');
    setShowResult(false);
  };

  const handleNextLesson = () => {
    navigate(`/learning/courses/${courseId}/lessons/${parseInt(lessonId) + 1}`);
  };

  if (!tests || !test) {
    return <div className="page"><h1>Тест не найден</h1></div>;
  }

  return (
    <div className="page test-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      {!showResult ? (
        <>
          <h1>Тест по уроку {lessonId}</h1>
          <p>{test[currentQuestionIndex].question}</p>
          {test[currentQuestionIndex].options.map((option, index) => (
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
            {currentQuestionIndex < test.length - 1 ? 'Следующий вопрос' : 'Завершить тест'}
          </button>
        </>
      ) : (
        <>
          {score === test.length ? (
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
};

export default Test;
