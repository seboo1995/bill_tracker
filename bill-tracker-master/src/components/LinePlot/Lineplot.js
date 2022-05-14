import { Line } from 'react-chartjs-2';

import { Chart as ChartJS, registerables } from 'chart.js';
ChartJS.register(...registerables);
const backgroundColor =  "rgba(75,192,192,0.2)"
const borderColor = "rgba(75,192,192,1)"

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      maintainAspectRatio: false,
     
      datalabels: {
        display: true,
        color: "black",
        formatter: Math.round,
        anchor: "end",
        offset: -30,
        align: "start"
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Month"
          
        }
      }
    }
    
  
  };

function Lineplot(props) {
const electricityBills  = props.props 
console.log(electricityBills)
  const month_array = electricityBills.map(function (obj) {
    return obj.month;
  });
  const spentKwh = electricityBills.map(function (obj){
    return obj.spentKwh
  })


  const data = {
    labels: month_array,
    datasets: [
      {
        label: "Electricity(in kwh)",
        data: spentKwh,
        fill: false,
        backgroundColor: backgroundColor,
        borderColor: borderColor,
  
      },
    ]
  };





  return <div> <Line data={data} options={options}/> </div> ;
}
export default Lineplot