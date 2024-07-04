import React from 'react';
import { useParams, Link } from 'react-router-dom';
import tradingData from '../data/trading.json';
import './TradingArticles.css';

function TradingArticles() {
  const { section } = useParams();
  const articles = tradingData[section] || [];

  return (
    <div className="container trading-articles-page">
      <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
      <div className="articles-list">
        {articles.map(article => (
          <Link key={article.id} to={`/trading/${section}/${article.id}`} className="article-item">
            {article.title}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TradingArticles;
