import React from 'react';
import './App.css';
import {Header,Balance, IncomeExpense,TransactionHistory,AddTransaction} from './components/main'
import { GlobalProvider } from './context/GlobalContext'


function App() {
  return (
    <GlobalProvider>
    <div className="container">
      <Header />
      <Balance/>
      <IncomeExpense/>
      <TransactionHistory/>
      <AddTransaction/>
    </div>
    </GlobalProvider>
  );
}

export default App;
