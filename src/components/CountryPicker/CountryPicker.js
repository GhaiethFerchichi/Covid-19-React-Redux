import { connect } from "react-redux";
import {
  fetchCountries,
  fetchCountryData,
} from "../../store/action/countryAction";

import { Select, SelectItem, SelectSkeleton } from "carbon-components-react";
import { useEffect } from "react";

const CountryPicker = ({
  countriesState,
  fetchCountriesOnLoad,
  fetchCountryDataHandler,
}) => {
  useEffect(() => {
    fetchCountriesOnLoad();
  }, []);

  const selectCountryHandler = (e) => {
    fetchCountryDataHandler(e.target.value);
  };

  if (countriesState.countriesLoading) return <SelectSkeleton />;

  const { countries } = countriesState;
  return (
    <div>
      <Select
        defaultValue="placeholder-item"
        helperText="you must select a country to display the chart"
        id="select-1"
        invalidText="A valid value is required"
        labelText="Select Country"
        onChange={selectCountryHandler}
        light
      >
        <SelectItem
          text="Select Country"
          value="placeholder-item"
          disabled
          hidden
        />
        {countries.map((opt) => (
          <SelectItem key={opt.Slug} text={opt.Country} value={opt.Slug} />
        ))}
      </Select>
    </div>
  );
};

const mapStateToProps = (state) => ({
  countriesState: state.countryState.countriesState,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCountriesOnLoad: () => dispatch(fetchCountries()),
  fetchCountryDataHandler: (countryId) => dispatch(fetchCountryData(countryId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryPicker);
