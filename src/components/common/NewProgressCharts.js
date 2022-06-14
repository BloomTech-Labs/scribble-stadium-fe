import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Table } from 'antd';

function NewProgressCharts(props) {
  //hardcoded child data
  const childData = [
    {
      name: 'SubmarineBoy',
      MissionsCompleted: 7,
      TotalPoints: 460,
      TotalWords: 100,
      key: '1',
    },
    {
      name: 'Pinky Winky',
      MissionsCompleted: 6,
      TotalPoints: 500,
      TotalWords: 115,
      key: '2',
    },
    {
      name: 'Dad',
      MissionsCompleted: 8,
      TotalPoints: 390,
      TotalWords: 80,
      key: '3',
    },
  ];

  //Data structure
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'key' },
    {
      title: 'Missions Completed',
      dataIndex: 'MissionsCompleted',
      key: 'key',
      sorter: (a, b) => a.MissionsCompleted - b.MissionsCompleted,
    },
    {
      title: 'Total Points',
      dataIndex: 'TotalPoints',
      key: 'key',
      sorter: (a, b) => a.TotalPoints - b.TotalPoints,
    },
    {
      title: 'Total Words',
      dataIndex: 'TotalWords',
      key: 'key',
      sorter: (a, b) => a.TotalWords - b.TotalWords,
    },
  ];
  // FAKE DATA WILL NEED TO BE REPLACED WITH ACCURATE CHILD DATA


  return (
    <div className="ProgressContainer">
      <div className="ProgressHeader">
        <h2>Progress Charts</h2>
      </div>
      <div className="ProgressBox">
        <Table
          pagination={false}
          columns={columns}
          dataSource={childData}
        ></Table>
      </div>
    </div>
  );
}
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(NewProgressCharts);
