import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import tradingData from '../data/trading.json';
import './TradingArticle.css';

function TradingArticle() {
  const { section, articleId } = useParams();
  const navigate = useNavigate();
  const article = tradingData[section]?.find(a => a.id === parseInt(articleId));

  if (!article) {
    return <div className="container"><h1>Статья не найдена</h1></div>;
  }

  // Dynamically import the image
  const articleImage = require(`../assets/${article.image}`).default;

  return (
    <div className="container article-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{article.title}</h1>
      <img src={articleImage} alt={article.title} className="article-image" />
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default TradingArticle;
