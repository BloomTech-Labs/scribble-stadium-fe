import React from 'react';
import { connect } from 'react-redux';
import { devMode } from '../../../state/actions/index';
import styled from 'styled-components';

const DevHeader = styled.header`
  font-size: 20px;
  background: red;
  text-align: center;
`;
// This is the DevModeHeader this will be displayed on all pages when DevMode option is toggled
// One thing to note as more components are added this will have to be updated with all the pages.
// Along the line there might be an easier method to implement this
const DevModeHeader = ({ devMode }) => {
  return (
    <div>
      {devMode.isDevModeActive ? ( //Essentially it check if DevMode option is Active
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
