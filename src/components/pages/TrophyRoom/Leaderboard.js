import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { useAuth0 } from '@auth0/auth0-react';
import { connect } from 'react-redux';

const Leaderboard = props => {
  const { user } = useAuth0();
  const [data, setDataInfo] = useState([]);
  useEffect(() => {
    //Getting data from backend for leaderboard.
    getLeaderboard(user).then(res => {
      setDataInfo(res);
      console.log(res);
      console.log();
    });
  }, [user]);

  const table = [
    // Structure of the Table.
    {
      title: 'Rank',
      key: 'Rank',
      render: (text, record, index) => index + 1,
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
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Total_Points - b.Total_Points,
      sortDirections: ['ASC', 'DESC'],
      showSorterTooltip: false,
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
