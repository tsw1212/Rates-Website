import React from 'react';
import '../css/CurrencyDropdown.css';

function CurrencyDropdown({ currenciesNames, setSelectedCurrency }) {
  return (
    <div className='CurrencyDropdown'>
      <label htmlFor="currency-select">Select Currency:</label>
      <select id="currency-select" onChange={(e) => setSelectedCurrency(e.target.value)}>
        {currenciesNames.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CurrencyDropdown;
