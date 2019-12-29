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
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

// REDUX
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";

class App extends Component {
  unsubscribeFromAuth = null;

  // open subscription
  componentDidMount() {
    const { setCurrentUser } = this.props;

    // get the user current state
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log(snapShot.data());
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  //close subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={Users} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});
// connect(state, action )
export default connect(null, mapDispatchToProps)(App);

{
  /* exact = put all page/ component in a single page or pages will also be render on the same page if there is no exact key word */
  /* path = base url */
  /* component = the page that render */
  /* Switch = if the path or url are matched any Route's path in Switch, will not be render */
}
