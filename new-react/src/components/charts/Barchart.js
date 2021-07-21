import './Barchart.css'

function Barchart(props)
{
let BarchartHeight="0%";
if(props.max>0){
    BarchartHeight= Math.round((props.value/props.max)*100)+'%';
}
//console.log(props.value)

return(
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{height:BarchartHeight}}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
)
}

export default Barchart