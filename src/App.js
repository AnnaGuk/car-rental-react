import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Searchbar from "./components/Searchbar/Searchbar";
import FourOuFour from "./components/FourOuFour/FourOuFour";
import CarElementList from "./components/CarElementList/CarElementList";
import BikeElementList from "./components/BikeElementList/BikeElementList";

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <Router>
          <Switch>
            <Route path="/" exact component={Searchbar} />
            <Route path="/cars" component={CarElementList} />
            <Route path="/bikes" component={BikeElementList} />
            <Route path="*" component={FourOuFour} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
