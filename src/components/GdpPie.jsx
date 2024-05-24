import { Pie } from "react-chartjs-2";

// Items
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register to use
ChartJS.register(ArcElement, Tooltip, Legend);

const GdpPie = ({ countries }) => {
  const gdpCountries = countries.filter(
    (country) => country.gdp_billions > 0 && country.gdp_billions
  );

  const data = {
    labels: gdpCountries.map((country) =>
      country.gdp_billions !== 0 ? country.name : ""
    ),
    datasets: [
      {
        label: "GDP (Billions)",
        data: gdpCountries.map((country) => country.gdp_billions),
        backgroundColor: [
          "#635255",
          "#10FFCB",
          "#F0F66E",
          "#8F3985",
          "#9966FF",
          "#66717E",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#A8C686",
          "#E7DFC6",
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
