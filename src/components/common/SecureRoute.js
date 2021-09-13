// istanbul ignore file
import React from 'react';
import { SecureRoute } from '@okta/okta-react';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * This is a higher-order component wrapper around the standard Okta
 * SecureRoute component that allows us to check the redux store for
 * whether any users have selected a profile and, if they haven't,
 * we reroute the user back to the profile selection page.
 */
const ReduxSecureRoute = props => {
  const { pathname } = useLocation();
  // If parent OR child isn't logged in, redirect to profile modal
  return pathname === '/' || props.parentId || props.childId ? (
    <SecureRoute {...props} />
  ) : (
    <Redirect to="/" />
  );
};

export default connect(
  state => ({
    parentId: state.parent.id,
    childId: state.child.id,
  }),
  {}
)(ReduxSecureRoute);
