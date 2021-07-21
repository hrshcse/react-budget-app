import "./Expense.css"
import ExpenseDate from "./ExpenseDate"
function Expense(props){
    
    return (
    <div className="expense-head">
        <div className="expense-main">
        <ExpenseDate date={props.data.date} />     
        <h2 className="expense-data">{props.data.description}</h2>
        </div>
         <div className="expense-price">${props.data.amount}</div>
        
         
    </div>)
}

export default Expense;
