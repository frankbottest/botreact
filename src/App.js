import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Trading from './components/Trading';
import Learning from './components/Learning';
import Exchanges from './components/Exchanges';
import Glossary from './components/Glossary';
import Menu from './components/Menu';
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
        <Menu />
        <Routes>
          <Route path="/trading" element={<Trading />} />
          <Route path="/learning" element={<Learning />} />
          <Route path="/exchanges" element={<Exchanges />} />
          <Route path="/glossary" element={<Glossary />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
