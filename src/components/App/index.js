import React from 'react';
import { compose } from 'recompose';

import Navigation from '../Navigation/Navigation';
import SideBar from '../SideBar/SideBar'
import withAuthentication from '../Session/withAuthentication';
import withAuthorization from '../Session/withAuthorization';
import * as routes from '../../constants/routes';

const App = ({ children }) =>
  <div className="app">
    <Navigation />

    {children}

  </div>

const AppWithAuthentication = compose(
  withAuthentication,
  withAuthorization(false),
)(App);

const AppWithAuthorization = compose(
  withAuthentication,
  withAuthorization(true),
)(App);

export {
  AppWithAuthentication,
  AppWithAuthorization,
};
