import { Card } from 'antd';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import AdminFilters from './AdminFilters';
import BacklogStoryCard from './BacklogStoryCard';

const StoryBacklog = ({ stories, filters }) => {
  const [storiesState, setStoriesState] = useState(stories);

  const multiFilter = () => {
    const statusFilteredData = stories
      .filter(story => {
        if (filters.status !== 'All') {
          return story.currentStatus === filters.status;
        } else {
          return story;
        }
      })
      .filter(story => {
        if (filters.assignedTo !== 'All') {
          return story.assignedTo === filters.assignedTo;
        } else {
          return story;
        }
      })
      .filter(story => {
        if (filters.submittedBy !== 'All') {
          return story.storyAuthor === filters.submittedBy;
        } else {
          return story;
        }
      });

    return statusFilteredData;
  };

  useEffect(() => {
    if (
      filters.status === 'All' &&
      filters.assignedTo === 'All' &&
      filters.submittedBy === 'All'
    ) {
      setStoriesState(stories);
    } else {
      setStoriesState(multiFilter());
    }
  }, [filters]);

  // useEffect(()=>{
  //   if(filters.status==="Approved"){
  //     const approvedStories = stories.filter(story=> story.currentStatus==="Approved");
  //     console.log(approvedStories);
  //     setStoriesState(approvedStories);
  //     setIsFilterActive
  //   }else if(filters.status==="Pending"){
  //     const pendingStories = stories.filter(story=> story.currentStatus==="Pending");
  //     setStoriesState(pendingStories);
  //   } else if(filters.status==="Rejected"){
  //     const rejectedStories = stories.filter(story=> story.currentStatus==="Rejected");
  //     setStoriesState(rejectedStories);
  //   }
  //     else{
  //       setStoriesState(stories);
  //       console.log(stories);
  //     }

  //   // if(filters.submittedBy==="All"){
  //   //   setStoriesState(stories);
  //   // }else{
  //   //   const submittedByStories = stories.filter(story=> story.storyAuthor===filters.submittedBy);
  //   //   setStoriesState(submittedByStories);
  //   // }

  // },[filters]);

  return (
    <div className="backlog-stories" style={{ overflowY: 'scroll' }}>
      {storiesState.map(story => (
        <div className="backlog-story">
          <BacklogStoryCard story={story} key={story.storyId} />
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => ({ stories: state.admin.stories });

export default connect(mapStateToProps, {})(StoryBacklog);
