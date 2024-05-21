import { Pie } from "react-chartjs-2";

// Items
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register to use
ChartJS.register(ArcElement, Tooltip, Legend);

const GdpPie = ({ countries }) => {
  const data = {
    labels: countries.map((country) => (country.name ? country.name : "N/A")),
    datasets: [
      {
        label: "GDP (Billions)",
        data: countries.map((country) => country.gdp_billions),
        backgroundColor: [
          "#FF6384",
          "#D4D6B9",
          "#F0F66E",
          "#4BC0C0",
          "#9966FF",
          "#66717E",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#A8C686",
          "#FF9F40",
          "#D1CAA1",
        ],
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
  };

  return <Pie data={data} options={options} />;
};

export default GdpPie;
