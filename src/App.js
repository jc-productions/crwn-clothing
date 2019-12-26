import React from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      {/* exact = put all page/ component in a single page or pages will also be render on the same page if there is no exact key word */}
      {/* path = base url */}
      {/* component = the page that render */}

      <Switch>
        {/* Switch = if the path or url are matched any Route's path in Switch, will not be render */}
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
