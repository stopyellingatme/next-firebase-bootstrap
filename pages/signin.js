import React, { Component } from 'react';
import Router from 'next/router';
import withRedux from 'next-redux-wrapper';

import initStore from '../src/store';
import { SignUpLink } from './signup';
import { PasswordForgetLink } from './pw-forget';
import { AppWithAuthentication } from '../src/components/App';
import { auth } from '../src/firebase';
import * as routes from '../src/constants/routes';

const SignInPage = () =>
  <AppWithAuthentication>
    <div className="sign-in-page-container">
      <h1>SignIn</h1>
      <br />
      <div className="sign-in-form-container">
        <SignInForm />
        <br />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    </div>
  </AppWithAuthentication>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};


/**
 *  CLASS: SIGN IN FORM 
 *  Used in the SignInPage constant above
 */
class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        Router.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form className="sign-in-form" onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            value={email}
            onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
            type="text"
            placeholder="Email Address"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
            placeholder="Password"
          />
        </div>
        <button className="btn btn-primary" disabled={isInvalid} type="submit">
          Sign In
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withRedux(initStore)(SignInPage);

export {
  SignInForm,
};




//<input
//  value={email}
//  onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
//  type="text"
//  placeholder="Email Address"
///>