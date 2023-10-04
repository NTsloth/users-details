import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Table from "./components/Table";
import Details from "./components/Details";
import axios from "axios"; // Import axios
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Table users={users} />
        </Route>
        <Route path="/user/:userId">
          <Details users={users} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
