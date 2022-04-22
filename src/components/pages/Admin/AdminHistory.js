import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Card, Avatar, Alert } from 'antd';
import { useEffect } from 'react';

const AdminHistory = ({ stories }) => {
  const { Meta } = Card;

  const [order, setOrder] = useState('ASC');
  const [tableData, setTableData] = useState(stories);

  const sortTable = column => {
    if (order === 'ASC') {
      const sorted = [...tableData].sort((a, b) => {
        return a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1;
      });
      setTableData(sorted);
      setOrder('DSC');
    }

    if (order === 'DSC') {
      const sorted = [...stories].sort((a, b) => {
        return a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1;
      });
      setTableData(sorted);
      setOrder('ASC');
    }
  };
  useEffect(() => {
    sortTable('lastTimeUpdated');
  }, []);

  return (
    <div className="admin-history">
      <h3 className="admin-history-title">Latest activity</h3>
      <table className="admin-history-table">
        <tr>
          <th className="admin-history-story-column">Story</th>
          <>
            <th onClick={() => sortTable('assignedTo')}>Assigned To</th>
            <th onClick={() => sortTable('lastTimeUpdated')}>Updated</th>
            <th onClick={() => sortTable('currentStatus')}>Current Status</th>
          </>
        </tr>
        {tableData.map(story => {
          const {
            storyTitle,
            storyDescription,
            currentStatus,
            assignedTo,
            lastTimeUpdated,
            storyId,
          } = story;

          const date = new Date(parseInt(lastTimeUpdated));

          let statusColor =
            currentStatus == 'Approved'
              ? 'success'
              : currentStatus == 'Pending'
              ? 'warning'
              : 'error';

          return (
            <tr>
              <td className="admin-history-story-column">
                <Card key={storyId}>
                  <Meta
                    avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                    title={storyTitle}
                    description={storyDescription}
                  />
                </Card>
              </td>
              <td>{assignedTo}</td>
              <td>{date.toLocaleDateString()}</td>
              <td>
                <Alert message={currentStatus} type={statusColor} />
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
  };
};

export default connect(mapStateToProps, {})(AdminHistory);
