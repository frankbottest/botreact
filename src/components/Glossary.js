import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Glossary.css';
import termsData from '../data/glossary.json';

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [filteredTerms, setFilteredTerms] = useState([]);
  const location = useLocation();
  const termsContainerRef = useRef(null);

  useEffect(() => {
    if (selectedLetter) {
      setFilteredTerms(termsData[selectedLetter] || []);
    } else {
      const allTerms = Object.values(termsData).flat();
      setFilteredTerms(allTerms);
    }
  }, [selectedLetter]);

  useEffect(() => {
    if (searchTerm) {
      const allTerms = Object.values(termsData).flat();
      setFilteredTerms(
        allTerms.filter(term => term.term.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
  }, [searchTerm]);

  useEffect(() => {
    const savedScrollPosition = sessionStorage.getItem('scrollPosition');
    if (savedScrollPosition && termsContainerRef.current) {
      termsContainerRef.current.scrollTop = savedScrollPosition;
    }
  }, [location]);

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedLetter('');
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.target.blur();
    }
  };

  const handleReset = () => {
    setSelectedLetter('');
    setSearchTerm('');
  };

  const handleLinkClick = () => {
    if (termsContainerRef.current) {
      sessionStorage.setItem('scrollPosition', termsContainerRef.current.scrollTop);
    }
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
        placeholder="Поиск.."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleSearchKeyPress}
        className="search-input"
      />
      <div className="alphabet">
        {alphabet.map(letter => (
          <button key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
        <button onClick={handleReset}>Сброс</button>
      </div>
      <div className="terms" ref={termsContainerRef}>
        {Object.keys(groupedTerms).sort().map(letter => (
          <div key={letter}>
            <h2 className="letter-divider">{letter}</h2>
            <div className="term-list">
              {groupedTerms[letter].map((term, index) => (
                <div key={index} className="glossary-term">
                  <Link to={`/glossary/${term.id}`} onClick={handleLinkClick}>{term.term}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Glossary;
