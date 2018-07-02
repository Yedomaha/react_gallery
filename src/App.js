import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import Details from "./components/PhotoDetails";
import Description from "./components/Description";
import Hello from "./components/Hello";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Hello />
          <Switch>
            <Route exact path="/" component={PhotoList} />
            <Route path="/details/:photoId" component={Details} />
            <Route path="/description/" component={Description} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
