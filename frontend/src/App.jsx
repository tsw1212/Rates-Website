import { getRequest } from './modules/requests';
import React, { useEffect, useState } from "react";
import CurrencyDropdown from "./components/CurrencyDropdown";
import CurrencyTable from "./components/CurrencyTable";
import './css/App.css'
import WrongMessage from './components/WrongMessage';

function App() {
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [currenciesData, setCurrenciesData] = useState([]);
  const [currenciesNames, setcurrenciesNames] = useState([]);
  const [wrongRequest, setWrongRequest] = useState(false);

  async function onCurrencyChange() {
    const reqDataCurrencie = await getRequest(`http://localhost:5246/api/Currency/exchange-rates/${selectedCurrency}`);
    if (reqDataCurrencie.ok) {
      setCurrenciesData(reqDataCurrencie.body);
    }
    else {
      setWrongRequest(true);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const reqDatacurrenciesNames = await getRequest('http://localhost:5246/api/Currency/supported-currencies');
      if (reqDatacurrenciesNames.ok) {
        setcurrenciesNames(reqDatacurrenciesNames.body);
      }
      onCurrencyChange();
    }
    fetchData();
  }, [wrongRequest]);


  useEffect(() => {
    onCurrencyChange();
  }, [selectedCurrency]);

  return (
    <div className='page'>
      <div>
        <header>
          <img src='/Images/logo.jpeg' alt="logo" className='imgLogo' />
          <h2 >Currency Converter</h2>
        </header>

        <CurrencyDropdown
          setSelectedCurrency={setSelectedCurrency}
          currenciesNames={currenciesNames}
        />
      </div>
      <div >
        <CurrencyTable
          selectedCurrency={selectedCurrency}
          currenciesData={currenciesData}
        />
        {wrongRequest && <WrongMessage setWrongRequest={setWrongRequest} />}

      </div>
    </div>

  );
};


export default App
