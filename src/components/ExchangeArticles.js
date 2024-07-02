// src/components/ExchangeArticles.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ExchangeArticles.css';

function ExchangeArticles() {
  const { exchange } = useParams();
  const articles = [
    { id: 1, title: 'Article 1' },
    { id: 2, title: 'Article 2' },
    { id: 3, title: 'Article 3' },
  ];

  return (
    <div className="exchange-articles">
      <Link to="/exchanges" className="back-button">Назад</Link>
      <h1>Статьи для {exchange}</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/exchanges/${exchange}/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExchangeArticles;
