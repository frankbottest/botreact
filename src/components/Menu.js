// src/components/Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartLine, FaBook, FaExchangeAlt, FaBookOpen } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <Link to="/" className="menu-item">
        <FaHome />
        <span>Главная</span>
      </Link>
      <Link to="/trading" className="menu-item">
        <FaChartLine />
        <span>Трейдинг</span>
      </Link>
      <Link to="/learning" className="menu-item">
        <FaBook />
        <span>Обучение</span>
      </Link>
      <Link to="/exchanges" className="menu-item">
        <FaExchangeAlt />
        <span>Биржи</span>
      </Link>
      <Link to="/glossary" className="menu-item">
        <FaBookOpen />
        <span>Словарь</span>
      </Link>
    </div>
  );
}

export default Menu;
