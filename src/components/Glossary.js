import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Glossary.css';
import termsData from '../data/glossary.json';

function Glossary() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLetter, setSelectedLetter] = useState('');
  const [filteredTerms, setFilteredTerms] = useState([]);

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

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    setSearchTerm('');
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedLetter('');
  };

  const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'.split('');

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
      />
      <div className="alphabet">
        {alphabet.map(letter => (
          <button key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
      <div className="terms">
        {Object.keys(groupedTerms).sort().map(letter => (
          <div key={letter}>
            <h2 className="letter-divider">{letter}</h2>
            <div className="term-list">
              {groupedTerms[letter].map((term, index) => (
                <div key={index} className="term">
                  <Link to={`/glossary/${term.id}`}>{term.term}</Link>
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
