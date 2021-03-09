import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getSummaryBegin = () => ({
  type: actionTypes.GET_SUMMARY_BEGIN,
});

export const getSummaryDataSucces = (summaryData) => ({
  type: actionTypes.GET_SUMMARY_DATA_SUCCESS,
  payload: { summaryData },
});

export const getSummaryDataFailed = (summaryError) => ({
  type: actionTypes.GET_SUMMARY_DATA_FAILURE,
  payload: { summaryError },
});

export const fetchSummaryData = () => {
  return (dispatch) => {
    dispatch(getSummaryBegin());
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        dispatch(getSummaryDataSucces(response.data.Global));
      })
      .catch((error) => {
        console.error(error);
        getSummaryDataFailed(getSummaryDataFailed(error));
      });
  };
};
