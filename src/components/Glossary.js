import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Glossary.css';
import termsData from '../data/glossary.json';

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [selectedLetter, setSelectedLetter] = useState('');
  const termsContainerRef = useRef(null);
  const alphabetRef = useRef([]);
  const alphabetSidebarRef = useRef(null);

  useEffect(() => {
    const allTerms = Object.values(termsData).flat();
    setFilteredTerms(allTerms);
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const allTerms = Object.values(termsData).flat();
      setFilteredTerms(
        allTerms.filter(term => term.term.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    } else {
      const allTerms = Object.values(termsData).flat();
      setFilteredTerms(allTerms);
    }
  }, [searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  };

  const scrollToLetter = (letter) => {
    setSelectedLetter(letter);
    const element = alphabetRef.current[letter];
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTouchStart = (e) => {
    handleTouchMove(e);
  };

  const handleTouchMove = (e) => {
    const touch = e.touches[0];
    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target && target.dataset.letter) {
      scrollToLetter(target.dataset.letter);
    }
  };

  const handleTouchEnd = () => {
    // Nothing to do on touch end for now
  };

  const alphabet = 'АБВГДЕЖЗИКЛМНОПРСТУФХЦЧШЭЮЯ'.split('');

  const groupedTerms = filteredTerms.reduce((acc, term) => {
    const firstLetter = term.term.charAt(0).toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(term);
    return acc;
  }, {});

  return (
    <div className="glossary">
      <h1>Словарь</h1>
      <input
        type="text"
        placeholder="Поиск..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
        className="search-input"
      />
      <div className="terms" ref={termsContainerRef}>
        {Object.keys(groupedTerms).sort().map(letter => (
          <div key={letter} ref={el => alphabetRef.current[letter] = el}>
            <h2 className="letter-divider">{letter}</h2>
            <div className="term-list">
              {groupedTerms[letter].map((term, index) => (
                <div key={index} className="glossary-term">
                  <Link to={`/glossary/${term.id}`}>{term.term}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className="alphabet-sidebar"
        ref={alphabetSidebarRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {alphabet.map(letter => (
          <button
            key={letter}
            data-letter={letter}
            onClick={() => scrollToLetter(letter)}
            className={selectedLetter === letter ? 'selected' : ''}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
