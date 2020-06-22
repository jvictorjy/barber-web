import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';

import SignIn from '../pages/Singin';
import SingUp from '../pages/Singup';

import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SingUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
