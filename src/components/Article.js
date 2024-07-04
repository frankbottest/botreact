import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import articlesData from '../data/articles.json';
import './Article.css';

function Article() {
  const { exchange, articleId } = useParams();
  const navigate = useNavigate();
  const article = articlesData[exchange]?.find(a => a.id === parseInt(articleId));

  if (!article) {
    return <div className="container article-page"><h1>Статья не найдена</h1></div>;
  }

  return (
    <div className="container article-page">
      <button className="back-button" onClick={() => navigate(-1)}>Назад</button>
      <h1>{article.title}</h1>
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default Article;
