import React from 'react';
import AppContext from '../../context';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import Navbar from '../../components/Navbar';

const App = () => {
  const pages = routes.map((route) => (
    <Route
      key={route.key}
      component={route.component}
      exact={route.exact}
      path={route.path}
    />
  ));

  return (
    <AppContext.Provider>
      <Router>
        <Navbar />
        <Switch>{pages}</Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
