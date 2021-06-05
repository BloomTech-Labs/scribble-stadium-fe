import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import { connect } from 'react-redux';
import cat from '../../assets/images/cat.svg';

function NewChildCard(props) {
  const { push } = useHistory();
  const MockDataWins = 5;
  const MockDataLosses = 10;
  const MockDataTotalPoints = 309;
  let noChildren = false;
  if (props.props.parent.children.length < 1) {
    noChildren = true;
  }
  const editPlayerPush = e => {
    push('/parent/edit-players');
  };
  const addPlayerPush = e => {
    push('/parent/add-child');
  };

  return (
    <div className="newChildCardContainer">
      <div className="Players">
        <div className="playheading">
          <h2>Players</h2>
        </div>
        <div className="childCardButtons">
          <button className="addPlayerButton" onClick={addPlayerPush}>
            <PlusCircleOutlined /> Add Player
          </button>
          {props.props.parent.children ? (
            <button className="editPlayerButton" onClick={editPlayerPush}>
              <EditOutlined /> Edit Players
            </button>
          ) : null}
        </div>
      </div>
      <div className="newChild">
        {noChildren === true ? (
          <div className="noPlayers">
            <p>No Players Added Yet.</p>
            <img src={cat} alt="No Players Added Yet!" />
          </div>
        ) : (
          props.props.parent.children.map((child, i) => (
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
          ))
        )}
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
