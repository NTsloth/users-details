import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import Details from "./components/Details";
import { UserProvider } from "./helpers/UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Table />
          </Route>
          <Route path="/user/:userId">
            <Details />
          </Route>
        </Switch>
      </Router>
    </UserProvider>
  );
}

export default App;
