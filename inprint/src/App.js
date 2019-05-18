import React from 'react';
import './App.scss';
import Home from "./components/pages/Home"
import Read from "./components/pages/Read"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {

  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/read/:id" component={Read} />
        <Route render={() => (
          <p>Not found</p>
        )} />
      </Switch>
    </Router>
  );
}

export default App;