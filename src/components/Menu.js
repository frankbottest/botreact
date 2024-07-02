// src/components/Menu.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaChartLine, FaBook, FaExchangeAlt, FaBookOpen } from 'react-icons/fa';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <NavLink to="/" className="menu-item" activeClassName="active" exact>
        <FaHome />
        <span>Главная</span>
      </NavLink>
      <NavLink to="/trading" className="menu-item" activeClassName="active">
        <FaChartLine />
        <span>Трейдинг</span>
      </NavLink>
      <NavLink to="/learning" className="menu-item" activeClassName="active">
        <FaBook />
        <span>Обучение</span>
      </NavLink>
      <NavLink to="/exchanges" className="menu-item" activeClassName="active">
        <FaExchangeAlt />
        <span>Биржи</span>
      </NavLink>
      <NavLink to="/glossary" className="menu-item" activeClassName="active">
        <FaBookOpen />
        <span>Словарь</span>
      </NavLink>
    </div>
  );
}

export default Menu;
