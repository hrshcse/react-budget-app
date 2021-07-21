import './ExpenseDate.css'
function ExpenseDate(props){
    const year=props.date.getFullYear();
    const month=props.date.toLocaleString('en-US',{month:'long'});
    const day=props.date.toLocaleString('en-US',{day:'2-digit'});

    return (
        <div className="expense-date">
        <div className="date-year">{year}</div>
        <div className="date-day">{day}</div>
        <div className="date-month">{month}</div>
        </div>
    )
}

export default ExpenseDate;