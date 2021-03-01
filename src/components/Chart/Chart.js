import { connect } from "react-redux";
import Spinner from "../../UI/Spinner/Spinner";

import { Line } from "react-chartjs-2";

const Chart = (props) => {
  console.log("Chart = ", props);
  const { country } = props;

  if (country.countryId)
    if (country.loadingCountryData) return <Spinner />;
    else {
      const data = {
        labels: country.countryData.map((el) => el.Date.split("T")[0]),
        datasets: [
          {
            label: "Confirmed dataset",
            data: country.countryData.map((el) => el.Confirmed),
            fill: true,
            backgroundColor: "rgba(14, 81, 225, 0.6)",
            borderColor: "rgba(14, 81, 225, 1)",
          },
          {
            label: "Deaths dataset",
            data: country.countryData.map((el) => el.Deaths),
            fill: true,
            backgroundColor: "rgba(225, 14, 14, 0.6)",
            borderColor: "rgba(225, 14, 14, 1)",
          },
          {
            label: "Recovered dataset",
            data: country.countryData.map((el) => el.Recovered),
            fill: true,
            backgroundColor: "rgba(54, 163, 10, 0.6)",
            borderColor: "rgba(54, 163, 10, 1)",
          },
        ],
      };
      return (
        <div>
          <Line data={data} width={1000} height={600} />
        </div>
      );
    }
  return <></>;
};

const mapStateToProps = (state) => ({
  country: state.countryState.countrySelected,
});

export default connect(mapStateToProps)(Chart);
