import React from 'react';
import { connect } from 'react-redux';

const AdminFilters = ({ filters, setFilters, stories, moderators }) => {
  /* 
     - parse needed params from props
     - declare 2 new variables to get list of story authors (submittedBy) 
       and moderator/admin name to be displayed in filter options
  */
  const submittedByList = stories.map(story => story.storyAuthor);
  const assignedToList = moderators.map(moderator => moderator.name);

  /*
    - a function to update "filters" state data in this component's parent (StoryManager)
      everytime there is a change in any of the filter values
  */
  const handleFilter = e => {
    let newFilter = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilter);
  };
  /*
    - render UI for 3 different filters: status, submittedBy, assignedTo
    - "Status" filter has 3 static options for each status (Approved, Pending, Rejected)
    - "Submitted by" options are populated from a list declared above (submittedByList)
    - "Assigned To" options are populated from a list declared above (assignedToList)
    - All 3 filters call handleFilter function to update "filters" state when there is a change
 */
  return (
    <div className="library-body-filters">
      <label htmlFor="status">
        <span>Status</span>
        <select name="status" onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Approved">Approved</option>
          <option value="Pending">Pending</option>
          <option value="Rejected">Rejected</option>
        </select>
      </label>

      <label htmlFor="submittedBy">
        <span>Submitted By</span>
        <select name="submittedBy" onChange={handleFilter}>
          <option value="All">All</option>
          {submittedByList.map(author => (
            <option value={`${author}`}>{author}</option>
          ))}
        </select>
      </label>

      <label htmlFor="assignedTo">
        <span>Assigned To</span>
        <select name="assignedTo" onChange={handleFilter}>
          <option value="All">All</option>
          {assignedToList.map(admin => (
            <option value={`${admin}`}>{admin}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

/*
  - declare a variable to get stories and list of moderators from 
    global state via connect and pass to this component's props
  - "stories" array is used to generate a "submittedBy" list above
  - "moderators" array is used to generate a "assignedTo" list above
*/
const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
    moderators: state.admin.moderators,
  };
};

/* 
  - connect to global state (adminReducer) to pass the state data (stories) to props
*/
export default connect(mapStateToProps, {})(AdminFilters);
