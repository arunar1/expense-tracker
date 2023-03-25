import React from 'react'
import ExpenseItem from './ExpenseItem'
import './Expense.css'
function Expense(props) { 
  return (
    <div className="expense">
      <ExpenseItem date={props.item[0].date} title={props.item[0].title} amount={props.item[0].amount}/>
      <ExpenseItem date={props.item[1].date} title={props.item[1].title} amount={props.item[1].amount}/>
      <ExpenseItem date={props.item[2].date} title={props.item[2].title} amount={props.item[2].amount}/>
    </div>
  )
}
export default Expense;   