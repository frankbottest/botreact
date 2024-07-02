import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Term.css';
import termsData from '../data/glossary.json';

function Term() {
  const { termId } = useParams();
  const term = Object.values(termsData)
    .flat()
    .find(term => term.id === parseInt(termId));

  if (!term) {
    return <div className="term"><h1>Термин не найден</h1></div>;
  }

  return (
    <div className="term">
      <Link to="/glossary" className="back-button">Назад</Link>
      <h1>{term.term}</h1>
      <p>{term.description}</p>
    </div>
  );
}

export default Term;
