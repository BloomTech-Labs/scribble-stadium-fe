import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Card, Avatar, Alert } from 'antd';

const AdminHistory = ({ stories }) => {
  /* 
      - parse Meta component from Card component in antd library 
      - this is used for displaying storycard's with title, description and img
  */
  const { Meta } = Card;

  /*
      - declare a local state to handle sorting for three columns (assignedTo, Updated, Current Status)
      - default value is DSC so that on initial render of the component table is sorted by latest update dates
  */
  const [order, setOrder] = useState('DSC');

  /*
      - declare a local state that holds the required data to populate all table columns in the UI
      - default value is taken from global state's "stories" array that connects to the component's props
  */
  const [tableData, setTableData] = useState(stories);

  /*
      - declare a function to handle sorting by one of sorted 3 columns 
        (Assigned To, Uupdated, Current Status)
      - Function sorts the table data per column either ASC or DSC and updates "tableData"
        state, so that UI is rendered accordingly
  */
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

  /*
    - When the component renders sort the table by "lastTimeUpdated" column by default
      so that data is displayed by latest updated story
  */
  useEffect(() => {
    sortTable('lastTimeUpdated');
  }, []);

  return (
    <div className="admin-history">
      <h3 className="admin-history-title">Latest activity</h3>

      {/* 
        - Create a table with 4 columns: Story, Assigned To, Updated, Current Status 
        - OnClick to Assigned To, Updated and Current status columns call sortTable function
          to sort the table accordingly
      */}
      <table className="admin-history-table">
        <tr>
          <th className="admin-history-story-column">Story</th>
          <>
            <th onClick={() => sortTable('assignedTo')}>Assigned To</th>
            <th onClick={() => sortTable('lastTimeUpdated')}>Updated</th>
            <th onClick={() => sortTable('currentStatus')}>Current Status</th>
          </>
        </tr>

        {/* 
          - For each story on "tableData" state, parse required fields (storyTitle,
            storyDescription and etc.) and render a table row (<tr>) with a Card and 
            data for each row
          - Convert lastTimeUpdated value to a Date format and save into a "date" variable
          - Declare statusColor, that is used to determinee color/type for the <Alert> 
         */}
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

/*
  - declare a variable to get stories from global state via connect
*/
const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
  };
};

/*
  - connect to global state (adminReducer) to pass the state data (stories) to props
*/
export default connect(mapStateToProps, {})(AdminHistory);
