// src/components/Article.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Article.css';

function Article() {
  const { exchange, articleId } = useParams();
  const article = {
    id: articleId,
    title: `Article ${articleId}`,
    content: `This is the content of Article ${articleId} for ${exchange}.`
  };

  return (
    <div className="article">
      <Link to={`/exchanges/${exchange}`} className="back-button">Назад</Link>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
}

export default Article;
