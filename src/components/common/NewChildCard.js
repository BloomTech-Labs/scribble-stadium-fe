import React from 'react';
import { useHistory } from 'react-router-dom';
import { PlusCircleOutlined, EditOutlined } from '@ant-design/icons';
import { Card, Button } from 'antd';
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
  const editPlayerPush = () => {
    push('/parent/edit-players');
  };
  const addPlayerPush = () => {
    push('/parent/add-child');
  };

  return (
    <div className="newChildCardContainer">
      <div className="Players">
        <div className="playheading">
          <h2 className="playersTitle">Players</h2>

          <div className="child-divns">
            <Button className="addPlayerButton" onClick={addPlayerPush}>
              <PlusCircleOutlined /> Add Player
            </Button>
            {props.props.parent.children ? (
              <Button className="editPlayerButton" onClick={editPlayerPush}>
                <EditOutlined /> Edit Players
              </Button>
            ) : null}
          </div>
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
                        {/* Missions completed */}
                        <p>{MockDataTotalPoints}</p>
                      </div>
                      <h4>Total Pts.</h4>
                    </div>
                    <div className="statBox">
                      <div className="statBoxBackground">
                        {/* Total Points */}
                        <p>{MockDataWins}</p>
                      </div>
                      <h4>Wins</h4>
                    </div>
                    <div className="statBox">
                      <div className="statBoxBackground">
                        {/* Total Words */}
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
