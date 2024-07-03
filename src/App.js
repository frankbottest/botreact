import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Trading from './components/Trading';
import Learning from './components/Learning';
import Exchanges from './components/Exchanges';
import ExchangeArticles from './components/ExchangeArticles';
import Article from './components/Article';
import Glossary from './components/Glossary';
import Term from './components/Term';
import Menu from './components/Menu';
import LessonList from './components/LessonList';
import Lesson from './components/Lesson';
import Test from './components/Test';
import './App.css';

function App() {
  useEffect(() => {
    if (window.Telegram.WebApp) {
      window.Telegram.WebApp.ready();
      window.Telegram.WebApp.expand();
    }
  }, []);

  return (
    <Router basename="/botreact">
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/trading" element={<Trading />} />
            <Route path="/learning" element={<Learning />} />
            <Route path="/learning/lessons" element={<LessonList />} />
            <Route path="/learning/lessons/:lessonId" element={<Lesson />} />
            <Route path="/learning/lessons/:lessonId/test" element={<Test />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/exchanges/:exchange" element={<ExchangeArticles />} />
            <Route path="/exchanges/:exchange/:articleId" element={<Article />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/glossary/:termId" element={<Term />} />
            <Route path="*" element={<Navigate to="/" />} /> {/* Добавляем перенаправление для всех неизвестных маршрутов */}
          </Routes>
        </div>
        <Menu />
        <div className="footer-fill"></div> {/* Добавляем заливку под меню */}
      </div>
    </Router>
  );
}

export default App;
