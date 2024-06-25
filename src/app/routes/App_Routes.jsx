import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';
import KeywordDetailsPage from '../pages/KeywordDetailsPage'; 

const AppRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/detail/:id" component={KeywordDetailsPage} />

        {/* Add more routes as needed */}
      </Switch>
    </Router>
  );
};

export default AppRoutes;
