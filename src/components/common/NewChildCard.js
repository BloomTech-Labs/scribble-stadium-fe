import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import { Card, Button,Layout } from 'antd';

export default function NewChildCard(props) {
  console.log('This is on the NewChildCard component', props.props);
  return (
    <div>
      <div className="newChild">
        {props.props.parent.children.map((child, i) => (
          <Card>
            <div className="childrenContainer">
              {/* This is hard coded right now, once data is ready, can replace it */}
              <h4>Status: Matchup</h4>
              <div className="avatarContainer">
                <div className="avatarbackground">
                  <img src={child.AvatarURL} alt="avatar"/>  
                </div>
                <h2>{child.Name}</h2>
              </div>
              <div className="stats">
              <p>{child.CohortID}</p>
              <h4>Week #</h4>
              <p>Total Points Here</p>
              <h4>Total Pts</h4>
              <p>{child.Wins}</p>
              <h4>Wins</h4>
              <p>{child.Losses}</p>
              <h4>Losses</h4>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}

//Players container will hold kid cards
// players container will also house the add player(put) and edit player
// Avatar situated to the left bottom of the card
// from top to bottom "status: matchup, mission accomplished, etc" , week# , total points, wins, losses
//AvatarURL, CohortID, GradeLevel, ID, IsDyslexic, Name, PIN, ParentID, type: "Child"
// "status" - matchup, i story , in drawing,