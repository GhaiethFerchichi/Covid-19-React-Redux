import { useEffect } from "react";
import { connect } from "react-redux";

import { fetchCountries } from "./store/action/countryAction";

import "./App.css";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import Spinner from "./UI/Spinner/Spinner";
import Chart from "./components/Chart/Chart";

function App(props) {
  useEffect(() => {
    props.dispatch(fetchCountries());
  }, []);

  const { loading, error } = props;
  // console.log("app :", props);

  let content = (
    <>
      <CountryPicker />
      <Chart />
    </>
  );
  if (error) content = <h6>{error.stack}</h6>;
  if (loading) {
    console.info("loading");
    content = <Spinner />;
  }

  return (
    <div className="App">
      <header className="App-header">{content}</header>
    </div>
  );
}

const mapStateToProps = (state) => ({
  countries: state.countryState,
  loading: state.loading,
  error: state.error,
});

export default connect(mapStateToProps)(App);
