import React, { Component } from "react";
import "./App.css";

import { Route, Switch } from "react-router-dom";

// PAGES
import ShopPage from "./pages/shop/ShopPage";
import HomePage from "./pages/homepage/HomePage";
import Users from "./pages/sign-in-and-sign-out/Users";

// COMPONENTS
import HeaderComponent from "./components/header/HeaderComponent";

// FIREBASE
import { auth } from "./firebase/firebase.utils";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  // open subscription
  componentDidMount() {
    // get the user current state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  //close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Users} />
        </Switch>
      </div>
    );
  }
}

{
  /* exact = put all page/ component in a single page or pages will also be render on the same page if there is no exact key word */
  /* path = base url */
  /* component = the page that render */
  /* Switch = if the path or url are matched any Route's path in Switch, will not be render */
}
