
import './ExpenseFilter.css'
function ExpenseFilter(props)
{  
    
    const SelectedYear = event=>{
      props.getYear(event.target.value);
    }
    
    return(
        <div className="expense-filter">
            <div className="expense-filter-control">
                <label>filter by year</label>
                <select value={props.selected} onChange={SelectedYear}>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
        </div>
    )
}

export default ExpenseFilter;