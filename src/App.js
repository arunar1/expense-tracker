
import Expense from './components/Expense'
import ExpensesForm from './components/NewExpenses/ExpensesForm';
function App() {
  const expense=[
    {
      id:1,
      title:"TV",
      amount:"$200",
      date:new Date(2020,4,14)
    },
    {
      id:2,
      title:"bike",
      amount:"$2000",
      date:new Date(2020,5,14)
    },
    {
      id:3,
      title:"Insurence",
      amount:"$120",
      date:new Date(2020,4,24)
    }
  ]
  return (
    <div className="App">
      <h1>Expense Tracker</h1>
      <ExpensesForm/>
      <Expense item={expense}/>
    </div>
  );
}

export default App;
