import React,{useState} from 'react';
import './ExpenseItem.css'
import ExpenseDate from './ExpenseDate';
function ExpenseItem(props) {

    // let title=props.title;
    const [title,setTitle]=useState(props.title)


    // const date=new Date();
    // const title="TV";
    // const amount="$200";
    const clickHandler=()=>{
        
        setTitle("updated"); 
        console.log("user clicked");
    }
    return (
        <div className="expense-item"   >
            <ExpenseDate date={props.date}/>
            <div className="expense-item-description">
                <h3>{title}</h3>
            </div>
            <div className="expense-item-price">
                {props.amount}
            </div>
            <button onClick={clickHandler}>change title</button>

        </div>
    )
}
export default ExpenseItem;