// src/components/Article.js
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Article.css';

const articleContent = {
  bybit: {
    1: {
      title: 'Как зарегистрироваться на Bybit',
      content: `
        <h2>Шаг 1: Перейдите на сайт Bybit</h2>
        <p>Откройте браузер и перейдите на официальный сайт Bybit по адресу: <a href="https://www.bybit.com" target="_blank">https://www.bybit.com</a>.</p>
        <h2>Шаг 2: Нажмите кнопку "Регистрация"</h2>
        <p>На главной странице сайта найдите и нажмите кнопку "Регистрация".</p>
        <h2>Шаг 3: Заполните регистрационную форму</h2>
        <p>Введите ваш адрес электронной почты, придумайте пароль и подтвердите его. Нажмите "Зарегистрироваться".</p>
        <h2>Шаг 4: Подтвердите адрес электронной почты</h2>
        <p>Перейдите в вашу почту и найдите письмо от Bybit. Следуйте инструкциям в письме для подтверждения вашего адреса электронной почты.</p>
        <h2>Шаг 5: Вход в аккаунт</h2>
        <p>После подтверждения адреса электронной почты, вернитесь на сайт Bybit и войдите в ваш аккаунт, используя ваш адрес электронной почты и пароль.</p>
        <h2>Поздравляем!</h2>
        <p>Вы успешно зарегистрировались на Bybit и можете начинать торговать.</p>
      `
    }
  }
};

function Article() {
  const { exchange, articleId } = useParams();
  const article = articleContent[exchange]?.[articleId];

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
