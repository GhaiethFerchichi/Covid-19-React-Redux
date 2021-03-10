import { connect } from "react-redux";

import { Line } from "react-chartjs-2";
import { DataTableSkeleton } from "carbon-components-react";

const Chart = (props) => {
  const { country } = props;

  if (country.countryId)
    if (country.loadingCountryData)
      return (
        <div style={{ width: "800px" }}>
          <DataTableSkeleton headers={null} />
          <br />
        </div>
      );
    else {
      const data = {
        labels: country.countryData.map((el) => el.Date.split("T")[0]),
        datasets: [
          {
            label: "Confirmed dataset",
            data: country.countryData.map((el) => el.Confirmed),
            backgroundColor: "rgba(14, 81, 225, 0.2)",
            fill: true,
            borderColor: "rgba(14, 81, 225, 1)",
          },
          {
            label: "Deaths dataset",
            data: country.countryData.map((el) => el.Deaths),
            backgroundColor: "rgba(225, 14, 14, 0.2)",
            fill: true,
            borderColor: "rgba(225, 14, 14, 1)",
          },
          {
            label: "Recovered dataset",
            data: country.countryData.map((el) => el.Recovered),
            fill: true,
            backgroundColor: "rgba(54, 163, 10, 0.1)",
            borderColor: "rgba(54, 163, 10, 1)",
          },
        ],
      };
      return (
        <div>
          <h1>{country.countryId}</h1>
          <Line
            data={data}
            width={(window.innerWidth * 80) / 100}
            height={(window.innerHeight * 60) / 100}
          />
        </div>
      );
    }
  return <></>;
};

const mapStateToProps = (state) => ({
  country: state.countryState.countrySelected,
});

export default connect(mapStateToProps)(Chart);
