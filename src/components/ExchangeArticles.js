// src/components/ExchangeArticles.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ExchangeArticles.css';
import articlesData from '../data/articles.json';

function ExchangeArticles() {
  const { exchange } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setArticles(articlesData[exchange] || []);
  }, [exchange]);

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
