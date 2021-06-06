import React, { useState, useEffect } from 'react';
// import { submissions } from '../../../state/actions';
// import { getGallerySubmissionsById } from '../../../api/index';
import { connect } from 'react-redux';
// import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { ButtonBar } from '../../common';
const YourMission = props => {
  //   const { authState } = useOktaAuth();
  //   const [data, setDataInfo] = useState([
  //     {
  //       WritingUrl: '',
  //       DrawingUrl: '',
  //       children_id: 0,
  //     },
  //   ]);

  //   useEffect(() => {
  //     //Getting data from backend for leaderboard
  //     getGallerySubmissionsById(authState).then(res => {
  //       setDataInfo(res);

  //       console.log('this is res: ', res);
  //     });
  //   }, [authState]);

  //   console.log('this is data: ', data[0].WritingUrl);

  return (
    <>
      <ButtonBar
        id={props.id}
        {...props}
        write={true}
        draw={false}
        read={true}
      />
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(YourMission);
