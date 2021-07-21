import { useContext, useReducer, useRef, useState } from 'react'
import StoreData from '../../store/StoreData';
import './NewExpense.css'

const changeReducer=(state,action)=>{
  if(action.type==="check_input")
  {   const condition = (action.val.current.value==='')? "false-done-on-reducer":"true-done-on-reducer";
        console.log(action.val.current.value,"---from red")
      return {isValid: condition}
  }
}
function NewExpense(props){


const Input_Amount=useRef();
const Input_Date=useRef();
const Input_Title=useRef()
  
    const [valid,setValid]=useState(false);
    const[validReducer,setReducer]=useReducer(changeReducer,{isValid:"false"})
    
const submitted = event =>{
    event.preventDefault();
    //eslint-disable-next-line
    setReducer({type:'check_input',val:Input_Title})
    console.log(validReducer)
    if(Input_Date ==='' || Input_Title ==='' || Input_Amount === ''){
        setValid(true);                   
        return; 
    }
    const expenseData =
        {
        description:Input_Title.current.value,
        amount:+Input_Amount.current.value,
        date: new Date(Input_Date.current.value),
        id: Math.random()
        }
    console.log(Input_Date.current.value)
    props.onNewData(expenseData)
    setEdit(false)
    setValid(false)  
   }
    const [edit,setEdit]=useState(false);
    const addExpense= ()=>{
    setEdit(true);
}
const cancelExpense=()=>{
    setEdit(false)
    setValid(false)
}
const ctx=useContext(StoreData)
    return (
        
                    <div className={`new-expense ${valid ? 'danger':''}`} onClick={console.log(ctx,"looggg")}>
                    {!edit && <div className="add-new"> <button className="add-button" onClick={addExpense}>Add Expenses</button> </div>}
                    { edit && <form onSubmit={submitted}>
                         <div className="new-expense-controls">
                             <div className="new-expense-control">
                                 {valid && <h4 style={{color:'red',textAlign:'center'}} >Please Fill All The Fields</h4>}
                             </div>
                             <div className="new-expense-control">
                                 <label htmlFor="title">Title</label>
                                 <input id="title" type="text" ref={Input_Title}   />
                             </div>
                             <div className="new-expense-control">
                                 <label htmlFor="amount">Amount</label>
                                 <input id="amount"  type="number" min="0.01" ref={Input_Amount} step="0.01"  />
                             </div>
         
                             <div className="new-expense-control">
                                 <label htmlFor="date">Date</label>
                                 <input id="date" type="date" min="2020-01-01" max="2022-01-01" ref={Input_Date} />
         
                             </div>
         
                             <div className="new-expense-submit">
                                 <button onClick={cancelExpense}>Cancel</button>
                                 <button type="submit" >Add</button>
         
                             </div>
                             
         
                         </div>
                     </form> }
                   
                     </div>
                 )
             
            
}

export default NewExpense;
