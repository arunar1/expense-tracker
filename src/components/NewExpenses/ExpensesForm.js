import React from 'react'
import './ExpensesForm.css'
export default function ExpensesForm() {

  return (
    <div>
        <form>
            <div className='new-expense-control'>
                <div className='new-expense-control'>
                    <label className='new-expense-control-label'>Title</label>
                    <input className='new-expense-control-input' type="text"></input>
                </div>
                <div className='new-expense-control'>
                    <label className='new-expense-control-label'>Amount</label>
                    <input className='new-expense-control-input' type="number" min='0.02'></input>
                </div>
                <div className='new-expense-control'>
                    <label className='new-expense-control-label'>Date</label>
                    <input className='new-expense-control-input' type="date" min='2019-01-01' max='2023-01-01'></input>
                </div>
                <div>
                    <button className='new-expense-action' type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
      
    </div>
  )
}
