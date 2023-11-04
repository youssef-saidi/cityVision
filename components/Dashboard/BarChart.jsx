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
    yAxis: {
      display: false
    },
    x: {
      grid: {
        display: false
      }
    }
  },
};

const labels = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

export const data = {
  labels,
  datasets: [{
    barPercentage: 10,
    barThickness: 50,
    maxBarThickness: 10,
    minBarLength: 2,
    data: [10, 40, 30, 20, 50, 20, 11, 5, 30, 10, 20, 30, 10, 20, 30, 10, 40, 30, 20, 50, 20, 11, 5, 30, 10, 20, 30, 10, 20, 30, 5, 30, 10, 20, 30, 10, 20, 30],
    backgroundColor: "rgba(44, 121, 224, 0.4)"
  }]
};


const BarChart = () => {
  return (
    <div className="relative">
      <Bar data={data} options={options} width={"250%"} />
    </div>
  )
}

export default BarChart
