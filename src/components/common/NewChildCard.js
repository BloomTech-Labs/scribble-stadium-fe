import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PlusCircleFilled } from '@ant-design/icons';
import { Layout, Card } from 'antd';

export default function NewChildCard(props) {
  console.log('This is on the NewChildCard component', props);
  return (
    <div>
      <Layout className="children" style={{ flexFlow: 'row wrap' }}>
        {props.props.parent.children.map((child, i) => (
          <div
            key={child.ID}
            id={child.ID}
            name={child.Name}
            AvatarURL={child.AvatarURL}
            update="PROGRESS"
          />
        ))}
        <Card>
          <h2>
            <Link to="/parent/add-child">
              <PlusCircleFilled /> Add a Child!
            </Link>
          </h2>
        </Card>
      </Layout>
    </div>
  );
}

//Players container will hold kid cards
// players container will also house the add player(put) and edit player
// Avatar situated to the left bottom of the card
// from top to bottom "status: matchup, mission accomplished, etc" , week# , total points, wins, losses
