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

  // Testing for ranking/ placements for the table

  // let index = [];
  // for (let i = 0; i <= data.length; i++) {
  //   index.push({ key: i, index: i });
  // }

  const table = [
    // Structre of the Table
    {
      title: 'Rank',
      key: 'Rank',
      render: (text, record, index) => '#' + (index + 1),
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
      title: 'Wins',
      dataIndex: 'Wins',
      width: 100,
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Wins - b.Wins,
      sortDirections: ['ASC', 'DESC'],
      showSorterTooltip: false,
    },
    {
      title: 'Losses',
      dataIndex: 'Losses',
      width: 100,
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
    },
    {
      title: 'Drawing Points',
      dataIndex: 'DrawingPoints',
      key: 'DrawingPoints',
      width: 100,
    },
  ];

  return (
    <div className="leaderboard">
      <div className="content-box">
        <div className="shaped">
          <div className="dark">
            <h2 className="h2">Leaderboard</h2>
          </div>
        </div>
      </div>

      <Table
        rowClassName={'parent'}
        columns={table}
        rowKey="uid"
        dataSource={data}
        pagination={false}
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
