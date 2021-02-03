import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Home, Browse, Signin, Signup} from './pages';
import * as ROUTES from './constants/routes';


export default function App() {
  return (
  <Router>
    <Route  path={ROUTES.HOME}>
      <Home />
    </Route>

    <Route  path={ROUTES.SIGN_IN}>
      <Signin />
    </Route>

    <Route  path={ROUTES.SIGN_UP}>
      <Signup />
    </Route>

    <Route  path={ROUTES.BROWSE}>
      <Browse />
    </Route>
  </Router>
  );
}

