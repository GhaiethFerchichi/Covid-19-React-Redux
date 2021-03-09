import { connect } from "react-redux";

import "carbon-components/css/carbon-components.min.css";
import "./App.css";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Chart from "./components/Chart/Chart";
import Summary from "./components/Summary/Summary";

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <Summary />
        <CountryPicker />
        <Chart />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countries: state.countryState,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(App);
