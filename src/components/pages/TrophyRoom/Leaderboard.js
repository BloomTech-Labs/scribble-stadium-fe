import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';

const Leaderboard = () => {
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([]);

  useEffect(() => {
    //Getting data from backend for leaderboard
    getLeaderboard(authState).then(res => {
      setDataInfo(res);
    });
  }, [authState]);

  // Testing for ranking/ placements for the table

  // let index = [];
  // for (let i = 0; i <= data.length; i++) {
  //   index.push({ key: i, index: i });
  // }

  const table = [
    // Structre of the Table

    //Person is still able to sort data even with sorter tooltip set to false
    //Might not be worth using ant Table and just using colomns and Rows since you have more flexiblity and
    // more freedom to do what you want and set up data the way youu want it to be displayed
    // Add Rankings to the table

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
      <h2 className="h2">Leaderboard</h2>
      <Table
        rowClassName={'parent'}
        columns={table}
        rowKey="uid"
        dataSource={data}
      />
    </div>
  );
};

export default Leaderboard;
