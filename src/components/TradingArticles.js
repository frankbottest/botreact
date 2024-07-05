import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import tradingData from '../data/trading.json';
import './TradingArticles.css';

function TradingArticles() {
  const { section } = useParams();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const articles = tradingData[section] || [];

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="container trading-articles-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <div className="articles-list">
        {filteredArticles.map(article => (
          <Link key={article.id} to={`/trading/${section}/${article.id}`} className="article-item">
            <img src={require(`../assets/${article.image}`).default} alt={article.title} />
            <span>{article.title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TradingArticles;
