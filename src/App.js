import React, { Component } from "react";

import { HashRouter, Route, Switch} from "react-router-dom";
import { enquireScreen } from "enquire-js";
import Home from "./Home/main";
import Page2 from "./Home/history";
import Entry from "./Entry";
import Login from "./components/Login";
import ChooseTime from "./components/ChooseTime"

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <div>
        <HashRouter>
          <Switch>
            <Route exact path="/history" component={Page2} />
            <Route exact path="/ticket" component={Entry} />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/time/:guid" component={ChooseTime}/>
          </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
