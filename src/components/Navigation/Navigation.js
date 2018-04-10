import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import * as routes from '../../constants/routes';
import SignOutButton from '../SignOut';

let NavigationAuth = () => (
  <ul className="nav">
    <li className="nav-item"><Link href={routes.LANDING}><a className="nav-link">Landing</a></Link></li>
    <li className="nav-item"><Link href={routes.HOME}><a className="nav-link">Home</a></Link></li>
    <li className="nav-item"><Link href={routes.ACCOUNT}><a className="nav-link">Account</a></Link></li>
    <li className="nav-item"><SignOutButton /></li>
  </ul>
);

let NavigationNonAuth = () => (
  <ul className="nav">
    <li className="nav-item"><Link href={routes.LANDING}><a className="nav-link">Landing</a></Link></li>
    <li className="nav-item"><Link href={routes.SIGN_IN}><a className="nav-link">Sign In</a></Link></li>
  </ul>
);

class Navigation extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        {this.props.authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);