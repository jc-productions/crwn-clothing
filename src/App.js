import React from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

// PAGES
import ShopPage from "./pages/shop/ShopPage";
import HomePage from "./pages/homepage/HomePage";

// const HatsPage = () => {
//   return (
//     <div>
//       <h1>HATS PAGE</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

{
  /* exact = put all page/ component in a single page or pages will also be render on the same page if there is no exact key word */
}
{
  /* path = base url */
}
{
  /* component = the page that render */
}
{
  /* Switch = if the path or url are matched any Route's path in Switch, will not be render */
}
