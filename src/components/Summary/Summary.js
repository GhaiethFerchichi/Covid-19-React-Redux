import {
  ContentSwitcher,
  SkeletonPlaceholder,
  Switch,
} from "carbon-components-react";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import { connect } from "react-redux";

import { fetchSummaryData } from "../../store/action/summaryAction";

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
    console.log(data.summaryData[`New${content}`]);
    const [dateInfo, timeInfo] = data.summaryData.Date.split("T");

    contentToDisplay = (
      <>
        <div style={{ padding: 10 }}>
          Last Update : {dateInfo} at {timeInfo.split(".")[0]}
        </div>
        <br />
        <ContentSwitcher onChange={(e) => setContent(e.text)}>
          <Switch name="one" text="Confirmed" />
          <Switch name="two" text="Deaths" />
          <Switch name="three" text="Recovered" />
        </ContentSwitcher>
        <br />
        <div style={{ width: "100%", fontSize: 20 }}>
          Total {content} :
          <span style={{ color: "white" }}>
            <CountUp end={data.summaryData[`Total${content}`]} duration={2} />
          </span>
          <br /> New {content} :{" "}
          <span style={{ color: "white" }}>
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
