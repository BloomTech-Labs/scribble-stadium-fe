import React, { useState, useEffect } from 'react';
import { Select } from 'antd';
import { connect } from 'react-redux';

const { Option } = Select;

const AdminFilters = ({ filters, setFilters, stories, moderators }) => {
  const submittedByList = stories.map(story => story.storyAuthor);
  const assignedToList = moderators.map(moderator => moderator.name);

  const handleFilter = e => {
    console.log(e);
    let newFilter = {
      ...filters,
      [e.target.name]: e.target.value,
    };
    setFilters(newFilter);
  };

  return (
    <div className="library-body-filters">
      <select name="status" onChange={handleFilter}>
        <option value="" disabled>
          Select Status
        </option>
        <option value="All">All</option>
        <option value="Approved">Approved</option>
        <option value="Pending">Pending</option>
        <option value="Rejected">Rejected</option>
      </select>

      <select name="submittedBy" onChange={handleFilter}>
        <option value="" disabled>
          Submitted By
        </option>
        <option value="All">All</option>
        {submittedByList.map(author => (
          <option value={`${author}`}>{author}</option>
        ))}
      </select>

      <select name="assignedTo" onChange={handleFilter}>
        <option value="" disabled>
          Assignee
        </option>
        <option value="All">All</option>
        {assignedToList.map(admin => (
          <option value={`${admin}`}>{admin}</option>
        ))}
      </select>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    stories: state.admin.stories,
    moderators: state.admin.moderators,
  };
};

export default connect(mapStateToProps, {})(AdminFilters);
