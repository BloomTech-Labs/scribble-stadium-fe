import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';

const Leaderboard = props => {

  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([]);
  useEffect(() => {
    //Getting data from backend for leaderboard
    getLeaderboard(authState).then(res => {
      setDataInfo(res);
      console.log(res);
      console.log();
    });
  }, [authState]);

  const table = [
    // Structre of the Table
    //Person is still able to sort data even with sorter tooltip set to false
    //Might not be worth using ant Table and just using colomns and Rows since you have more flexiblity and
    // more freedom to do what you want and set up data the way youu want it to be displayed
    // Add Rankings to the table
    {
      title: 'Rank',
      dataIndex: 'Rank',
      key: 'Rank',
      width: 100,
      defaultSortOrder: 'descend',
    },
    {
      title: '',
      dataIndex: 'AvatarID',
      render: theAvatarID => (
        <img
          src={`https://labs28-b-storysquad.s3.amazonaws.com/hero-${theAvatarID}.svg`}
          alt="Avatar"
        />
      ),
      key: 'AvatarID',
      width: 150,
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
      width: 150,
    },

    {
      title: 'Total Points',
      dataIndex: 'Total_Points',
      key: 'Total_points',
      width: 100,
    },
    {
      title: 'Writing Points',
      dataIndex: 'WritingPoints',
      key: 'WritingPoints',
      width: 100,
      responsive: ['sm'],
    },
    {
      title: 'Drawing Points',
      dataIndex: 'DrawingPoints',
      key: 'DrawingPoints',
      width: 100,
      responsive: ['sm'],
    },
    {
      title: 'Total Points',
      dataIndex: 'Total_Points',
      key: 'Total_points',
      width: 100,
    },
  ];
  return (
    <div className="leaderboard">
      <h2 className="h2 leader_h2">Leaderboard</h2>
      <Table
        rowClassName={'parent'}
        columns={table}
        rowKey="uid"
        dataSource={data}
        size="middle"
      />
    </div>
  );
};

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Leaderboard);
