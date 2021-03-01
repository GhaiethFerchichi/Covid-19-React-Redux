import { connect } from "react-redux";
import { fetchCountryData } from "../../store/action/countryAction";

import SelectSearch from "react-select-search";

const CountryPicker = ({ countries, dispatch }) => {
  const selectCountryHandler = (e) => {
    console.log(e.target.value);
    dispatch(fetchCountryData(e.target.value));
  };

  const options = countries.map((el) => ({ name: el.Country, value: el.Slug }));

  return (
    <div>
      <h3>Select Country</h3>
      <select onChange={selectCountryHandler}>
        <option></option>
        {countries.map((option) => (
          <option key={option.Slug} value={option.Slug}>
            {option.Country}
          </option>
        ))}
      </select>
      {/* <div>
        <SelectSearch
          options={countries}
          // multiple
          search
          // filterOptions={fuzzySearch}
          placeholder="Select your country"
        />
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  countries: state.countryState.countries,
});

export default connect(mapStateToProps)(CountryPicker);
