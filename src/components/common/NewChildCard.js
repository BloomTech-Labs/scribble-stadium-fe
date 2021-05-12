import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import { Layout } from 'antd';

import { connect } from 'react-redux';

import { getLeaderboard } from '../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

function NewChildCard(props) {
  //       const { authState } = useOktaAuth();
  //       const [data, setDataInfo] = useState([]);

  //       useEffect(() => {
  //       //Getting data from backend for leaderboard
  //       getLeaderboard(authState).then(res => {
  //       setDataInfo(res);
  //       });
  //       }, [authState]);
  //       console.log("IS it saving here?", data)
  // console.log('This is on the NewChildCard component', props.props);
  return (
    <div>
      <div className="children">
        {props.props.parent.children.map((child, i) => (
          <div className="outerContainer">
            <div className="childrenContainer">
              <h3>{child.Name}</h3>
              <h4>Cohort #</h4>
              <p>{child.CohortID}</p>
              <h4>Total Pts</h4>

              <p>Total Points here</p>
              <h4>Wins</h4>
              <p>{child.Wins}</p>
              <h4>Losses</h4>
              <p>{child.Losses}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(NewChildCard);

// Players container will hold kid cards
// players container will also house the add player(put) and edit player
// Avatar situated to the left bottom of the card
// from top to bottom "status: matchup, mission accomplished, etc" , week# , total points, wins, losses
// AvatarURL, CohortID, GradeLevel, ID, IsDyslexic, Name, PIN, ParentID, type: "Child" is what comes from the Props/Parent API call
