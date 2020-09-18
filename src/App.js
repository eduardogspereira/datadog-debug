import React from "react";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

const ChangeRoute = ({ history }) => {
  return (
    <div>
      <button onClick={() => history.push("route-a")}>Rota A</button>
      <button onClick={() => history.push("route-b")}>Rota B</button>
      <button onClick={() => history.push("route-c")}>Rota C</button>
      <button onClick={() => history.push("route-d")}>Rota D</button>
    </div>
  );
};

/**
 * Can't track route changes with HashRouter.
 */
const FirstScenario = () => {
  window.addEventListener(
    "hashchange",
    (l) => console.log(window.location.hash),
    false
  );

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route component={ChangeRoute} path="/route-a" />
          <Route component={ChangeRoute} path="/route-b" />
          <Route component={ChangeRoute} path="/route-c" />
          <Route component={ChangeRoute} path="/route-d" />
          <Route component={ChangeRoute} path="/" />
        </Switch>
      </HashRouter>
    </div>
  );
};

/**
 * Can't track route changes when basename is set to #.
 */
const SecondScenario = () => {
  return (
    <div className="App">
      <BrowserRouter basename="#">
        <Switch>
          <Route component={ChangeRoute} path="/route-a" />
          <Route component={ChangeRoute} path="/route-b" />
          <Route component={ChangeRoute} path="/route-c" />
          <Route component={ChangeRoute} path="/route-d" />
          <Route component={ChangeRoute} path="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default FirstScenario;
