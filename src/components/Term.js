import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import termsData from '../data/glossary.json';
import './Term.css';

function Term() {
  const { termId } = useParams();
  const navigate = useNavigate();
  const term = Object.values(termsData)
    .flat()
    .find(term => term.id === parseInt(termId));

  if (!term) {
    return <div className="container term-page"><h1>Термин не найден</h1></div>;
  }

  return (
    <div className="container term-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{term.term}</h1>
      <p>{term.description}</p>
    </div>
  );
}

export default Term;
