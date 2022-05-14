import react from "react";
import { Bar, Chart } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';



const backgroundColor =  "rgba(75,192,192,0.2)"
const borderColor = "rgba(75,192,192,1)"
 const options = {
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
     pan: {
       enabled: true,
       mode: "xy"
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

function Histogram(props){
const electricityBills  = props.props
console.log(electricityBills)
const spend_money = electricityBills.map(function (obj){
    return obj.toBePaid
  })

const month_array = electricityBills.map(function (obj) {
    return obj.month;
  });
    return (
  
        <Bar 
          data={{
            labels: month_array,
            datasets: [
              {
                borderColor: "blac",
                label: "Spent(MKD)",
                lineTension: 0,
                fill: false,
                borderJoinStyle: "round",
                data: spend_money,
                borderWidth: 0.2,
                barPercentage: 1,
                categoryPercentage: 1,
                hoverBackgroundColor: "darkgray",
                barThickness: "flex",
                backgroundColor : "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"

              }
            ]
          }}
          options={options}
        
        />
  
       
    
    );



    
}

export default Histogram