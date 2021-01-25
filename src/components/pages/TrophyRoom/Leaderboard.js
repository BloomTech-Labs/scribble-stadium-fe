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

  const columns = [
    {
      title: 'Name',
      dataIndex: 'Name',
    },
    {
      title: 'Writing Score',
      dataIndex: 'WritingPoints',
      sorter: {
        compare: (a, b) => a.WritingPoints - b.WritingPoints,
      },
    },
    {
      title: 'Drawing Score',
      dataIndex: 'DrawingPoints',
      sorter: {
        compare: (a, b) => a.DrawingPoints - b.DrawingPoints,
      },
    },
    {
      title: 'Total Score',
      dataIndex: 'Total_Points',
      sorter: {
        compare: (a, b) => a.Total_Points - b.Total_Points,
      },
    },
  ];

  return (
    <div className="leaderboard">
      <Table rowClassName="parent" columns={columns} dataSource={data} />
    </div>
  );
};

export default Leaderboard;
