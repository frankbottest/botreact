// src/components/Article.js
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Article.css';
import articlesData from '../data/articles.json';

function Article() {
  const { exchange, articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const article = (articlesData[exchange] || []).find(a => a.id === parseInt(articleId));
    setArticle(article);
  }, [exchange, articleId]);

  if (!article) {
    return <div className="article"><h1>Статья не найдена</h1></div>;
  }

  return (
    <div className="article">
      <Link to={`/exchanges/${exchange}`} className="back-button">Назад</Link>
      <h1>{article.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
}

export default Article;
