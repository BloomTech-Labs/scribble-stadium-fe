import { Card, Avatar, Alert } from 'antd';
import React from 'react';
import { connect } from 'react-redux';

const AdminHistory = ({ stories }) => {
  const { Meta } = Card;

  return (
    <div className="admin-history">
      <h3 className="admin-history-title">Latest activity</h3>
      <table className="admin-history-table">
        <tr>
          <th className="admin-history-story-column">Story</th>
          <>
            <th>Assigned To</th>
            <th>Updated</th>
            <th>Current Status</th>
          </>
        </tr>
        {stories.map(story => {
          const {
            storyTitle,
            storyDescription,
            currentStatus,
            assignedTo,
            lastTimeUpdated,
            storyId,
          } = story;

          const date = new Date(lastTimeUpdated);

          let statusColor =
            currentStatus == 'Approved'
              ? 'success'
              : currentStatus == 'Pending'
              ? 'warning'
              : 'error';

          return (
            <tr>
              <td className="admin-history-story-column">
                <Card>
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
    stories: state.admin,
  };
};

export default connect(mapStateToProps, {})(AdminHistory);
