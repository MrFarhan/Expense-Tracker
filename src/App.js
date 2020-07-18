import React from 'react';
import './App.css';
import {Header,Balance, IncomeExpense,TransactionHistory,AddTransaction} from './components/main'



function App() {
  return (
    <div className="container">
      <Header />
      <Balance/>
      <IncomeExpense/>
      <TransactionHistory/>
      <AddTransaction/>
    </div>
  );
}

export default App;
