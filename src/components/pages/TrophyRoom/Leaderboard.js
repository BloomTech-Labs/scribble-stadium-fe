import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { useHistory } from 'react-router-dom';

const Leaderboard = child => {
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([]);
  const [test, setGetTest] = useState(null);
  // const [index, setIndex] = useState([]);
  const { push } = useHistory();

  useEffect(() => {
    //Getting data from backend for leaderboard
    getLeaderboard(authState).then(res => {
      setDataInfo(res);
    });
    ischild();
  }, [authState]);

  const ischild = child => {
    //Checks if the child is correct with the one who is logged in
    if (child === data.Name) {
      setGetTest(true);
    } else {
      push('/');
    }
  };
  // const index = [];
  // useEffect(() => {
  //   for (let i = 1; i >= data.length; i++) {
  //     index.push(i);
  //   }
  // }, [setIndex]);
  const columns = [
    {
      title: 'Placement',
      // dataIndex: { index },
    },
    {
      title: 'Name',
      dataIndex: 'Name',
      key: 'Name',
    },
    {
      title: 'Writing Score',
      dataIndex: 'WritingPoints',
      key: 'WritingPoints',
      // sorter: (a, b) => a.WritingPoints - b.WritingPoints,
      sorter: {
        compare: (a, b) => a.WritingPoints - b.WritingPoints,
      },
    },
    {
      title: 'Drawing Score',
      dataIndex: 'DrawingPoints',
      key: 'DrawingPoints',
      sorter: {
        compare: (a, b) => a.DrawingPoints - b.DrawingPoints,
      },
    },
    {
      title: 'Total Score',
      dataIndex: 'Total_Points',
      key: 'Total_points',
      sorter: {
        compare: (a, b) => a.Total_Points - b.Total_Points,
      },
    },
  ];

  return (
    <div className="leaderboard">
      <Table
        rowClassName={(test ? 'test' : 'fail', 'parent')}
        columns={columns}
        key="index"
        dataSource={data}
        // pagination={{
        //   onChange(current) {
        //     setIndex(current);
        //   },
        // }}
      />
    </div>
  );
};

export default Leaderboard;
