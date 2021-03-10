import {
  ContentSwitcher,
  SkeletonPlaceholder,
  Switch,
} from "carbon-components-react";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";

import { fetchSummaryData } from "../../store/action/summaryAction";
import ChartSummary from "./ChartSummary/ChartSummary";

const Summary = ({ data, fetchSummary }) => {
  const [content, setContent] = useState("Confirmed");

  useEffect(() => {
    fetchSummary();
  }, []);

  let contentToDisplay = <></>;

  if (data.summaryLoading) {
    contentToDisplay = (
      <SkeletonPlaceholder style={{ width: "50%", height: "50px" }} />
    );
  } else if (data.summaryError) {
    contentToDisplay = data.summaryError;
  } else if (data.summaryData) {
    const [dateInfo, timeInfo] = data.summaryData.Date.split("T");
    const chartProps = {
      confirmed: data.summaryData.TotalConfirmed,
      deaths: data.summaryData.TotalDeaths,
      recovered: data.summaryData.TotalRecovered,
    };
    // console.log("data to filter = ", data.summaryData);

    contentToDisplay = (
      <>
        <div style={{ padding: 10 }}>
          Last Update : {dateInfo} at {timeInfo.split(".")[0]}
          <ChartSummary {...chartProps} />
        </div>
        <br />
        <ContentSwitcher
          onChange={(e) => setContent(e.text)}
          defaultValue={"Recovered"}
        >
          <Switch name="Confirmed" text="Confirmed" value="Confirmed" />
          <Switch name="Deaths" text="Deaths" value="Deaths" />
          <Switch name="Recovered" text="Recovered" value="Recovered" />
        </ContentSwitcher>
        <br />
        <div style={{ width: "100%", fontSize: 20 }}>
          Total {content} :
          <span
            style={{
              color:
                content === "Confirmed"
                  ? "rgba(14, 81, 225, 1)"
                  : content === "Deaths"
                  ? "rgba(225, 14, 14, 1)"
                  : "rgba(54, 163, 10, 1)",
            }}
          >
            <CountUp end={data.summaryData[`Total${content}`]} duration={2} />
          </span>
          <br /> New {content} :{" "}
          <span
            style={{
              color:
                content === "Confirmed"
                  ? "rgba(14, 81, 225, 1)"
                  : content === "Deaths"
                  ? "rgba(225, 14, 14, 1)"
                  : "rgba(54, 163, 10, 1)",
            }}
          >
            <CountUp end={data.summaryData[`New${content}`]} duration={2} />
          </span>
        </div>
      </>
    );
  }

  // console.log(contentToDisplay);
  return <div style={{ width: "70%", margin: 10 }}>{contentToDisplay}</div>;
};

const mapStateToProps = (state) => ({
  data: state.summaryState,
});
const mapDispatchToProps = (dispatch) => ({
  fetchSummary: () => dispatch(fetchSummaryData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Summary);
