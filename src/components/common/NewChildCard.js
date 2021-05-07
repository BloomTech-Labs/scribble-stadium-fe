import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import { Layout } from 'antd';

export default function NewChildCard(props) {
  console.log('This is on the NewChildCard component', props.props);
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
              <p>Total Points Here</p>
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

//Players container will hold kid cards
// players container will also house the add player(put) and edit player
// Avatar situated to the left bottom of the card
// from top to bottom "status: matchup, mission accomplished, etc" , week# , total points, wins, losses
//AvatarURL, CohortID, GradeLevel, ID, IsDyslexic, Name, PIN, ParentID, type: "Child"
