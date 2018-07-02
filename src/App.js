import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PhotoList from "./components/PhotoList";
import Details from "./components/PhotoDetails";
import Description from "./components/Description";
import Hello from "./components/Hello";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { showHello: true };

    setTimeout(() => {
      this.setState({ showHello: false });
    }, 2000);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {this.state.showHello ? (
            <Hello />
          ) : (
            <Switch>
              <Route exact path="/" component={PhotoList} />
              <Route path="/details/:photoId" component={Details} />
              <Route path="/description/" component={Description} />
            </Switch>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
