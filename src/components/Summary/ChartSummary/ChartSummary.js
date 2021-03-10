import { Doughnut } from "react-chartjs-2";

const ChartSummary = ({ deaths, recovered }) => {
  const dataPie = {
    labels: ["Deaths", "Recovered"],
    datasets: [
      {
        label: ["Deaths", "Recovered"],
        data: [deaths, recovered],
        backgroundColor: ["rgba(225, 14, 14, 0.7)", "rgba(54, 163, 10, 0.7)"],
        borderColor: ["rgba(225, 14, 14, 1)", "rgba(54, 163, 10, 1)"],
        borderWidth: 3,
      },
    ],
  };
  return (
    <div>
      <Doughnut data={dataPie} />
    </div>
  );
};

export default ChartSummary;
