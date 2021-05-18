import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import { Card, Button, Layout } from 'antd';

import { connect } from 'react-redux';

import { getLeaderboard } from '../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

function NewChildCard(props) {
  const MockDataWins = 5;
  const MockDataLosses = 10;
  const MockDataTotalPoints = 309;
  return (
    <div>
      <div className="newChild">
        {props.props.parent.children.map((child, i) => (
          <Card key={i}>
            <div className="inner">
              {/* This is hard coded right now, once data is ready, can replace it */}
              <div className="statusContainer">
                <h4>Status: Matchup</h4>
              </div>
              <div className="innerChildContainer">
                <div className="avContainer">
                  <img
                    src={child.AvatarURL}
                    alt="avatar"
                    className="avBackground"
                  />
                  <h2>{child.Name}</h2>
                </div>

                <div className="statContainer">
                  <div className="statBox">
                    <div className="statBoxBackground">
                      <p>{child.CohortID}</p>
                    </div>
                    <h4>Week #</h4>
                  </div>
                  <div className="statBox">
                    <div className="statBoxBackground">
                      <p>{MockDataTotalPoints}</p>
                    </div>
                    <h4>Total Pts.</h4>
                  </div>
                  <div className="statBox">
                    <div className="statBoxBackground">
                      <p>{MockDataWins}</p>
                    </div>
                    <h4>Wins</h4>
                  </div>
                  <div className="statBox">
                    <div className="statBoxBackground">
                      <p>{MockDataLosses}</p>
                    </div>
                    <h4>Losses</h4>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
// Avatar tuated to the left bottom of the card
// from top to bottom "status: matchup, mission accomplished, etc" , week# , total points, wins, losses
// AvatarURL, CohortID, GradeLevel, ID, IsDyslexic, Name, PIN, ParentID, type: "Child" is what comes from the Props/Parent API call
