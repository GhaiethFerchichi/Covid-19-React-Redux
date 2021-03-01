import axios from "axios";
import * as actionTypes from "./actionTypes";

export const getCountries = () => ({
  type: actionTypes.GET_COUNTRIES_BEGIN,
});

export const getCountriesSuccess = (countries) => ({
  type: actionTypes.GET_COUNTRIES_SUCCESS,
  payload: { countries },
});

export const getCountriesFailure = (error) => ({
  type: actionTypes.GET_COUNTRIES_FAILURE,
  payload: { error },
});

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(getCountries());
    return axios
      .get("https://api.covid19api.com/countries")
      .then((response) => dispatch(getCountriesSuccess(response.data)))
      .catch((error) => dispatch(getCountriesFailure(error)));
  };
};
/* ********************************************************* */
export const selectCountry = (countryId) => ({
  type: actionTypes.SELECT_COUNTRY,
  payload: { countryId },
});

export const getCountryDataSuccess = (countryData) => ({
  type: actionTypes.GET_COUNTRY_DATA_SUCCESS,
  payload: { countryData },
});

export const getCountryDataFailure = (error) => ({
  type: actionTypes.GET_COUNTRY_DATA_FAILURE,
  payload: { error },
});

export const fetchCountryData = (countryId) => {
  return (dispatch) => {
    dispatch(selectCountry(countryId));
    axios
      .get("https://api.covid19api.com/live/country/" + countryId)
      .then((response) => dispatch(getCountryDataSuccess(response.data)))
      .catch((error) => dispatch(getCountryDataFailure(error)));
  };
};
