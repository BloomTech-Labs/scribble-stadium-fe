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
      console.log(res);
      setDataInfo(res);
    });
  }, [authState]);

  let index = [];
  for (let i = 0; i <= data.length; i++) {
    index.push({ key: i, index: i });
  }

  const writingTable = [
    {
      title: 'Placement',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Score',
      dataIndex: 'WritingPoints',
      key: 'WritingPoints',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.WritingPoints - b.WritingPoints,
      sortDirections: ['ASC', 'DESC'],
      showSorterTooltip: false,
    },
  ];
  const drawingTable = [
    {
      title: 'Placement',
      key: 'index',
      dataIndex: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Score',
      dataIndex: 'DrawingPoints',
      key: 'DrawingPoints',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.DrawingPoints - b.DrawingPoints,
      sortDirections: ['ASC', 'DESC'],
      showSorterTooltip: false,
    },
  ];

  const totalsTable = [
    {
      title: 'Placement',
      key: 'index',
      dataIndex: 'index',
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Score',
      dataIndex: 'Total_Points',
      key: 'Total_points',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.Total_Points - b.Total_Points,
      sortDirections: ['ASC', 'DESC'],
      showSorterTooltip: false,
    },
  ];
  return (
    <div className="leaderboard">
      <h3>Overall Ranking</h3>
      <Table
        rowClassName={'parent'}
        columns={totalsTable}
        dataSource={data}
        rowKey="uid"
        size="middle"
      />
      <h3>Writing Ranking</h3>
      <Table
        rowClassName={'parent'}
        columns={writingTable}
        rowKey="uid"
        dataSource={data}
        size="middle"
      />
      <h3>Drawing Ranking</h3>
      <Table
        rowClassName={'parent'}
        columns={drawingTable}
        dataSource={data}
        rowKey="uid"
        size="middle"
      />
    </div>
  );
};

export default Leaderboard;
