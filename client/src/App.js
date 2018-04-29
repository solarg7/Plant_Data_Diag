import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import WalkDown_1 from "./pages/WalkDown_1";
import WalkDown_3 from "./pages/WalkDown_3";
import LoadData from "./pages/LoadData";
import Home from "./pages/Home";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact path="/variables" component={WalkDown_1} />
        <Route exact path="/Variables/:id" component={Detail} /> */}
        <Route exact path="/historics" component={WalkDown_3} />
        <Route exact path="/historics/:id" component={LoadData} /> 

        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
