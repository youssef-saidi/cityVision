import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from "react-redux";
import { calculateCategorySums, getCategoriesAndZones } from "@/constants/filter";

ChartJS.register(ArcElement, Tooltip, Legend);
const options = {
  responsive: true,
  plugins: {
    legend: {
      display: true
    },
  }
};



const Doughnutt = () => {

  const filteredData = useSelector((state) => state.data.filteredData);

  const categorySumsByDay = calculateCategorySums(filteredData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: false,
      },
    },
  };

  const Days = Object.keys(categorySumsByDay);

  // Initialize labels and datasets arrays
  const datasets = [];
  const { categories } = getCategoriesAndZones(filteredData);
  const labels = categories;
  console.log(categorySumsByDay)

  const dataa = labels.map((category) => categorySumsByDay[Days[0]][category] || 0);
  const colors = labels.map((category) => `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.5)`);
  console.log(dataa)
  console.log(colors)
  datasets.push({
    label: '# of Votes',
    data:dataa,
    backgroundColor: colors,
    borderWidth: 1,

  });
console.log(datasets)
  const data = {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    // datasets: [
    //   {
    //     label: '# of Votes',
    //     data: [12, 19, 3, 5, 2, 3],
    //     backgroundColor: [
    //       'rgba(255, 99, 132, 0.2)',
    //       'rgba(54, 162, 235, 0.2)',
    //       'rgba(255, 206, 86, 0.2)',
    //       'rgba(75, 192, 192, 0.2)',
    //       'rgba(153, 102, 255, 0.2)',
    //       'rgba(255, 159, 64, 0.2)',
    //     ],
    //     borderColor: [
    //       'rgba(255, 99, 132, 1)',
    //       'rgba(54, 162, 235, 1)',
    //       'rgba(255, 206, 86, 1)',
    //       'rgba(75, 192, 192, 1)',
    //       'rgba(153, 102, 255, 1)',
    //       'rgba(255, 159, 64, 1)',
    //     ],
    //   },
    // ],
    labels,
    datasets,
  };
  return (
    <div className="relative">
      <Doughnut data={data} options={options} />
    </div>

  )
}

export default Doughnutt