import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { getLeaderboard } from '../../../api';
import { getSquadPoints } from '../../../api/index';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import { connect } from 'react-redux';

const Leaderboard = props => {
  const { authState } = useOktaAuth();
  const [data, setDataInfo] = useState([]);
  const [squadData, setSquadData] = useState([]);

  useEffect(() => {
    //Getting data from backend for leaderboard
    getLeaderboard(authState).then(res => {
      setDataInfo(res);
      console.log(res);
    });
  }, [authState]);

  useEffect(() => {
    //Getting data from backend for leaderboard
    getSquadPoints(authState).then(res => {
      setSquadData(res);
      console.log(res);
    });
  }, [authState]);

  // Testing for ranking/ placements for the table

  // let index = [];
  // for (let i = 0; i <= data.length; i++) {
  //   index.push({ key: i, index: i });
  // }

  // For the future of the table the backend endpoints have been set up in the points table to connect it to the front end in order to receive the back end logic that tallys up the squad points. I have setup a blank column as of now to bring in the Squad points.

  // You mat want to consider using something other than ant design in order to create the table as it is very limited as for as editing goes and may pose issues bringing in data from both the child table and the points table that is needed for the Squad points display.

  const table = [
    // Structure of the Table
    {
      //logic to display auto-indexing for the Rank column
      title: 'Rank',
      key: 'Rank',
      render: (text, record, index) => '#' + (index + 1),
      width: 100,
      defaultSortOrder: 'descend',
    },
    {
      // renders the avatar via the avatar url that is provided by the backend child table
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
      // sorting logic for sort by wins
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
    // Per the last stakeholder meeting they wanted to hide the total points column for now as Squad points will likely be taking it's place. If that stays the case the sort by points logic below can be userd for Squad points instead of Total_Points

    // {
    //   title: 'Total Points',
    //   dataIndex: 'Total_Points',
    //   key: 'Total_points',
    //   width: 100,
    //   defaultSortOrder: 'descend',
    //   sorter: (a, b) => a.Total_Points - b.Total_Points,
    //   sortDirections: ['ASC', 'DESC'],
    //   showSorterTooltip: false,
    // },
    {
      title: 'Squad Points',
      squadDataIndex: 'SquadPoints',
      key: 'SquadPoints',
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
