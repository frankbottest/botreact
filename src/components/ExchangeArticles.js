// src/components/ExchangeArticles.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ExchangeArticles.css';

const articlesData = {
  bybit: [
    { id: 1, title: 'Как зарегистрироваться на Bybit' }
  ],
  bingx: [],
  okx: [],
  binance: []
};

function ExchangeArticles() {
  const { exchange } = useParams();
  const articles = articlesData[exchange] || [];

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
