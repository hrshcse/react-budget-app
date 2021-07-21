import Expense from "../Expense/Expense"

function ExpensesList(props)
{
    
    var expense_data=<p className="no-data">No data found</p>
  if(props.expensedata.length>0)
  expense_data=props.expensedata.map((expense)=>(<Expense  data={expense} key={expense.id} />))


return (
   <div>
    
     {expense_data}
</div>)
}

export default ExpensesList;