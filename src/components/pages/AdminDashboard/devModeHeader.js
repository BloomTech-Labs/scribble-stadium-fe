import React from 'react';
import { connect } from 'react-redux';
import { devMode } from '../../../state/actions/index';
import styled from 'styled-components';

const DevHeader = styled.header`
  font-size: 50px;
  background: red;
  text-align: center;
`;

const DevModeHeader = ({ devMode }) => {
  return (
    <div>
      {devMode.isDevModeActive ? (
        <DevHeader> Dev Mode Active</DevHeader>
      ) : (
        console.log('')
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
