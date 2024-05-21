import { Bar } from "react-chartjs-2";
import FetchAPI from "./FetchAPI";
import Loading from "./Loading";
import Error from "./Error";

// Items
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register to use
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const PopGraph = ({ countries }) => {
  const data = {
    labels: countries.map((country) => country.name),
    datasets: [
      {
        label: "Population",
        data: countries.map((country) => country.population),
        backgroundColor: "cyan",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "white",
        },
        title: {
          display: true,
          text: "Country Name",
          color: "white",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
      y: {
        suggestedMax: 214326223, // Largest pop: Brazil
        ticks: {
          color: "white",
          stepSize: 214326223 / 10,
        },
        title: {
          display: true,
          text: "Billions",
          color: "white",
          font: {
            size: 16,
            weight: "bold",
          },
        },
      },
    },
  };
  return <Bar data={data} options={options}></Bar>;
};

export default PopGraph;
