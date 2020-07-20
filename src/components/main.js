import React, { useState, useContext } from 'react';
import { Input, Button, Label, Form } from 'reactstrap';
import { GlobalContext } from '../context/GlobalContext'


export const Header = () => {
    return (
        <div><h2>
            Expense Tracker
        </h2>
            <br /></div>
    )
}

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="center">
            <h4>
                Current Balance
            </h4>
            <h1 className={total > 0 ? "plus" : "minus"}>
                $ {total}</h1 >
        </div>
    )
}

export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const expense = (
// eslint-disable-next-line
        amounts.filter(item => item < 0).reduce((acc, item) => (acc, item), 0) * -1).toFixed(2)
        
    return (
        <div className="incomeExpense">

            <h3 className="income">Income<span><br />$ {income} </span></h3>
            <h3 className="expense">Expense<span><br />$ {expense} </span></h3>
        </div>
    )
}

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);
    // console.log(context, "is context");

    return (
        <div>
            <h3>Transaction History</h3>
            <ul>
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />
                ))}
            </ul>

        </div>
    )
}


export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount
        }
        addTransaction(newTransaction);
    }
    return (
        <div>
            <h4>
                Add Transaction
            </h4>
            <hr />
            <Form onSubmit={onSubmit}>
                <h4> Add Discription</h4>
                <Label htmlFor="description">
                    <Input type="text" id="description" placeholder="Add Discription" value={text} onChange={(e) => setText(e.target.value)} /></Label>

                <h4> Add Amount</h4>
                <Label htmlFor="amount">
                    <Input id="amount" type="text" placeholder="Add Amount" value={amount} onChange={(e) => setAmount(e.target.value)} ></Input></Label>
                <br />
                <br />
                <Button color="primary" >Add Transaction</Button>

            </Form>


        </div>
    )
}

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.amount > 0 ? "+" : "-"
    return (
        <div>
            <li className={transaction.amount > 0 ? "plus" : "minus"}>{transaction.text} <span>{sign}${Math.abs(transaction.amount)}   </span> <Button onClick={() => deleteTransaction(transaction.id)} className="delete-btn"> X</Button></li>
        </div>
    )
}
