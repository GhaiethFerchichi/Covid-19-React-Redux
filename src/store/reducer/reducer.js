import * as actionTypes from "../action/actionTypes";

const initialState = {
  countryState: {
    countries: [],
    countrySelected: {
      countryId: null,
      countryData: null,
      loadingCountryData: false,
      errorCountryData: null,
    },
  },
  loading: false,
  error: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_COUNTRIES_BEGIN:
      return { ...state, loading: true, error: null };

    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countryState: { ...state.countryState, countries: payload.countries },
        loading: false,
        error: null,
      };

    case actionTypes.GET_COUNTRIES_FAILURE:
      return { ...state, loading: false, error: payload.error };

    case actionTypes.SELECT_COUNTRY:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countrySelected: {
            ...state.countryState.countrySelected,
            countryId: payload.countryId,
            countryData: null,
            errorCountryData: null,
            loadingCountryData: true,
          },
        },
        loading: false,
        error: null,
      };

    case actionTypes.GET_COUNTRY_DATA_SUCCESS:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countrySelected: {
            ...state.countryState.countrySelected,
            countryData: payload.countryData,
            errorCountryData: null,
            loadingCountryData: false,
          },
        },
        loading: false,
        error: null,
      };
    case actionTypes.GET_COUNTRY_DATA_FAILURE:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countrySelected: {
            ...state.countryState.countrySelected,
            countryData: payload.countryData,
            errorCountryData: payload.error,
            loadingCountryData: false,
          },
        },
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
