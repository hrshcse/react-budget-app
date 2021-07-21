import './Charts.css'
import Barchart from './Barchart';
function Charts(props){
    const dataValues= props.values.map(data=> data.value)
    const maxValue=Math.max(...dataValues)
  //  console.log(maxValue)
return(  <div className="chart">
            {props.values.map((data)=>{return <Barchart 
                                           key={data.month}
                                           value={data.value}
                                           max={maxValue}
                                           label={data.month} />})}
         </div>)
}

export default Charts;