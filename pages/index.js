import React from 'react';
import withRedux from 'next-redux-wrapper';

import initStore from '../src/store';
import { AppWithAuthentication } from '../src/components/App';
import "../styles/style.scss";
import '../styles/bootstrap.min.css'
// import 'semantic-ui-css/semantic.min.css';
// import "../semantic/dist/semantic.min.css";

const LandingPage = () =>
  <AppWithAuthentication>
    <div className="landing-page-content">
      <h1>Landing Page for everyone, yo...</h1>
      <p>NOT SIGNED IN!!!</p>
      <p>NOT SIGNED IN!!!</p>
      <p>NOT SIGNED IN!!!</p>
      <p>NOT SIGNED IN!!!</p>
      <p>NOT SIGNED IN!!!</p>
      <p>NOT SIGNED IN!!!</p>
    </div>
  </AppWithAuthentication>

export default withRedux(initStore)(LandingPage);
