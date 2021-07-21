import { useState } from 'react';
import './App.css';
import ExpenseFilter from './components/Expense/ExpenseFilter';
import NewExpense from './components/newExpense/NewExpense';
import ExpensesList from './components/ExpensesList/ExpensesList';
import Expensechart from './components/ExpensesList/Expensechart';
import StoreData from './store/StoreData';

function App() {
  const default_expenses=[
    {description:"bike service", date: new Date(2021,1,12), amount:300,id:1},
    {description:"grocery",date: new Date(2021,3,12),amount:500,id:2},
    {description:"house rent", date: new Date(2021,3,12), amount:2000,id:3},
    {description:"internet bill",date: new Date(2021,1,12),amount:450,id:4}

  ]
  const[expenses,setExpense]=useState(default_expenses)
  
  const addNewExpense =data=>{
    console.log(data);
    setExpense([data, ...expenses])
  }
  const onYearchanges =data=>{
    console.log(data)
    SetYear(data);

  }
  const[choosenYear,SetYear]=useState('2021')
  var expenseYear=expenses.filter(exp=>{
    return exp.date.getFullYear().toString()===choosenYear
  })
  
 //console.log(expenseYear)

  return (
    <StoreData.Provider value={{ someData:false }}>

    <div className="App">
      <NewExpense onNewData={addNewExpense} />
      
      <div className="app-expenses">      
      <ExpenseFilter selected={choosenYear} getYear={onYearchanges} />
      <Expensechart chartData={expenseYear} />
      <ExpensesList expensedata={expenseYear} />
      </div>
     
    </div> 
    </StoreData.Provider>
  );
}

export default App;
