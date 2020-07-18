import React from 'react';
import { Input, Button, Label, Form } from 'reactstrap';


export const Header = () => {
    return (
        <div><h2>
            Expense Tracker
        </h2>
        <br/></div>
    )
}

export const Balance = () => {
    return (
        <div className="center">
            <h3>
                Current Balance
            </h3>
            <h3>
                $ 500</h3 >
        </div>
    )
}

export const IncomeExpense = () => {
    return (
        <div className="incomeExpense">
            <h3 className="income">Income<span><br />$ 200 </span></h3>


            <h3 className="expense">Expense<span><br />$ 320 </span></h3>
        </div>
    )
}

export const TransactionHistory = () => {
    return (
        <h2>
            Transaction History
            <hr />
        </h2>
    )
}

export const AddTransaction = () => {
    return (
        <div>
            <h2>
                Add Transaction
            </h2>
            <hr />
            <Form>
                <h3> Add Discription</h3>
                <Label htmlFor="description">
                    <Input type="text" id="description" placeholder="Add Discription" /></Label>

                <h3> Add Amount</h3>
                <Label htmlFor="amount">
                    <Input id="amount" type="text" placeholder="Add Amount" ></Input></Label>
                <br />
                <br />
                <Button color="primary" >Add Transaction</Button>

            </Form>


        </div>
    )
}

