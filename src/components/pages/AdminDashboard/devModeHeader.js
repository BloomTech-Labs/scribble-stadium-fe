import React from 'react';
import { connect } from 'react-redux';
import { devMode } from '../../../state/actions/index';

const DevModeHeader = ({ devMode }) => {
  return (
    <div>
      {devMode.isDevModeActive ? (
        <header> Dev Mode Active</header>
      ) : (
        <header>Dev Mode Inactive</header>
      )}
    </div>
  );
};

export default connect(
  state => ({
    devMode: state.devMode,
  }),
  { setDevMode: devMode.setDevMode }
)(DevModeHeader);
