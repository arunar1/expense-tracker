import React, { useState } from 'react'
import './ExpensesForm.css'
const ExpensesForm = () => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        enteredTitle = event.target.value;
        setEnteredTitle(event.target.value);
        console.log(event.target.value);
    }
    const amountChangeHandler = (event) => {
        enteredAmount = event.target.value;
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler = (event) => {
        enteredDate = event.target.value;
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    }

    return (
        <div>
            <form>
                <div className='new-expense-control'>
                    <div className='new-expense-control'>
                        <label className='new-expense-control-label'>Title</label>
                        <input className='new-expense-control-input' type="text"
                            onChange={titleChangeHandler}></input>
                    </div>
                    <div className='new-expense-control'>
                        <label className='new-expense-control-label'>Amount</label>
                        <input className='new-expense-control-input' type="number"
                            min='0.02' onChange={titleChangeHandler}></input>
                    </div>
                    <div className='new-expense-control'>
                        <label className='new-expense-control-label'>Date</label>
                        <input className='new-expense-control-input' type="date"
                            min='2019-01-01' max='2023-01-01' onChange={titleChangeHandler}></input>
                    </div>
                    <div>
                        <button className='new-expense-action' type='submit'>Add Expense</button>
                    </div>
                </div>
            </form>

        </div>
    )
}
export default ExpensesForm; 