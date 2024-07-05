import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import tradingData from '../data/trading.json';
import './TradingArticles.css';

function TradingArticles() {
  const { section } = useParams();
  const navigate = useNavigate();
  const articles = tradingData[section] || [];

  return (
    <div className="container trading-articles-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
      <div className="articles-list">
        {articles.map(article => (
          <Link key={article.id} to={`/trading/${section}/${article.id}`} className="article-item">
            <img src={`../assets/${article.image}`} alt={article.title} />
            <span>{article.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TradingArticles;
