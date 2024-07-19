import React, { useState } from 'react';

function TransactionForm({ onVerified }) {
  const [txid, setTxid] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://3ae2-95-26-227-239.ngrok-free.app/verify-payment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ txid }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          onVerified();
        } else {
          setError(data.message);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('An error occurred');
      });
  };

  return (
    <div className="transaction-form">
      <h1>Введите хэш транзакции</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={txid}
          onChange={(e) => setTxid(e.target.value)}
          placeholder="Transaction ID"
        />
        <button type="submit">Отправить</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default TransactionForm;
