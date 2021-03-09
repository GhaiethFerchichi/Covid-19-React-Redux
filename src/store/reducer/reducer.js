import * as actionTypes from "../action/actionTypes";

const initialState = {
  summaryState: {
    summaryData: null,
    summaryLoading: false,
    summaryError: null,
  },
  countryState: {
    countriesState: {
      countries: [],
      countriesLoading: true,
      countriesError: null,
    },
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

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.GET_COUNTRIES_BEGIN:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countriesState: {
            ...state.countryState,
            countries: [],
            countriesLoading: true,
            countriesError: null,
          },
        },

        loading: true,
        error: null,
      };

    case actionTypes.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countriesState: {
            ...state.countryState.countriesState,
            countries: payload.countries,
            countriesLoading: false,
          },
        },
        loading: false,
        error: null,
      };

    case actionTypes.GET_COUNTRIES_FAILURE:
      return {
        ...state,
        countryState: {
          ...state.countryState,
          countriesState: {
            ...state.countryState.countriesState,
            countriesLoading: false,
            countriesError: payload.error,
          },
        },
        loading: false,
        error: payload.error,
      };

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

    case actionTypes.GET_SUMMARY_BEGIN:
      return {
        ...state,
        summaryState: {
          ...state.summaryState,
          summaryLoading: true,
          summaryError: null,
        },
      };

    case actionTypes.GET_SUMMARY_DATA_SUCCESS:
      return {
        ...state,
        summaryState: {
          ...state.summaryState,
          summaryLoading: false,
          summaryData: payload.summaryData,
        },
      };

    case actionTypes.GET_SUMMARY_DATA_FAILURE:
      return {
        ...state,
        summaryState: {
          ...state.summaryState,
          summaryLoading: false,
          summaryError: payload.summaryError,
        },
      };

    default:
      return state;
  }
};

export default reducer;
