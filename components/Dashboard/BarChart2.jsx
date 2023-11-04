import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, } from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x:{
      stacked:true,
      display: false

    },
    y:{
      beginAtZero:true,
      stacked:true,
      display: false

    }
  },
};

const labels = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];


export const data = {
  labels,
  datasets: [
    {
    barPercentage: 10,
    barThickness: 50,
    maxBarThickness: 25,
    minBarLength: 2,
    data: [50, 40, 35, 40, 30, 25, 20, 15, 13, 10, 8, 5, 4, 3, 1],
    backgroundColor: "#263238"
  },
  {
    barPercentage: 10,
    barThickness: 50,
    maxBarThickness: 25,
    minBarLength: 2,
    data: [10, 20, 25, 20, 10, 15, 10, 5, 18,40, 18, 15, 14, 13, 12],
    backgroundColor: "#855CF8"
  },
  {
    barPercentage: 10,
    barThickness: 50,
    maxBarThickness: 25,
    minBarLength: 2,
    data: [10, 20, 25, 20, 10, 15, 10, 5, 18,40, 18, 15, 14, 13, 12],
    backgroundColor: "rgba(44, 121, 224, 0.3)"
  },
]
};


const BarChart2 = () => {
  return (
    <div className="relative">
      <Bar data={data} options={options} width={"250%"} />
    </div>
  )
}

export default BarChart2
