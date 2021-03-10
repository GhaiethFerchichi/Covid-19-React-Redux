import React, { Suspense } from "react";
import "carbon-components/css/carbon-components.min.css";
import "./App.css";
import { Redirect, Route, Switch } from "react-router";
import NavigationBar from "./components/Navigation/NavigationBar";
import Spinner from "./UI/Spinner/Spinner";

const Chart = React.lazy(() => import("./components/Chart/Chart"));
const Summary = React.lazy(() => import("./components/Summary/Summary"));
const CountryPicker = React.lazy(() =>
  import("./components/CountryPicker/CountryPicker")
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <div style={{ marginBottom: 55 }} />
        <Switch>
          <Route
            exavt
            path="/summary"
            render={(props) => (
              <Suspense fallback={<Spinner />}>
                <Summary {...props} />
              </Suspense>
            )}
          />
          <Route
            path="/ByCountry"
            exact
            render={(props) => (
              <Suspense fallback={<Spinner />}>

                <CountryPicker {...props} />
                <hr />
                <Chart {...props} />
              </Suspense>
            )}
          />
          <Redirect to="/summary" />
        </Switch>
      </header>
    </div>
  );
}

export default App;
