import Charts from "../charts/Charts";

function Expensechart(props){
   // console.log("works"+ [...props.chartData])

   var dataItems=[
    {month:'jan', value:0},
    {month:'feb', value:0},
    {month:'mar', value:0},
    {month:'apr', value:0},
    {month:'may', value:0},
    {month:'jun', value:0},
    {month:'jul', value:0},
    {month:'aug', value:0},
    {month:'sep', value:0},
    {month:'oct', value:0},
    {month:'nov', value:0},
    {month:'dec', value:0}

];
for( const expense in props.chartData)
{      
// console.log("E-charts"+ props.chartData[expense].amount)
const e_month=props.chartData[expense].date.getMonth();
dataItems[e_month].value += props.chartData[expense].amount
}

  
return(
    <Charts values={dataItems} />
)
}

export default Expensechart