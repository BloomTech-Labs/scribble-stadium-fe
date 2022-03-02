import React, { useState } from 'react';
// import UploadStoryPopup from './UploadStoryPopup';
// import { connect } from 'react-redux';
// import StoryPopup from './StoryPopup';

// const StoryManager = ({stories}) => {
const StoryManager = () => {
  // const [addButtonState, setAddButtonState] = useState(false)

  // const[storyState, setStoryState] = useState(false)

  // const [story, setStory] = useState()

  // const reviewStory = (story) => {
  //     setStory(story)
  //     setStoryState(true)
  // }

  return (
    <div className="story-manager">
      <div className="library">
        <div className="library-top">
          <h2>Story Library</h2>
          {/* <button onClick={() => setAddButtonState(true)}>Add +</button>   */}
        </div>
        <div>
          <div className="review-checkboxes">
            checkboxes
            {/* {stories.map(story => {
                            return story.status === "review" ?
                            <div key={story.title}>
                                <p onClick={() => reviewStory(story)}><b>{story.title}</b> by {story.author}</p>
                            </div>
                            : ""
                        })} */}
          </div>
        </div>
      </div>
      {/* <UploadStoryPopup trigger={addButtonState} setTrigger={setAddButtonState} />
            <StoryPopup story={story} trigger={storyState} setTrigger={setStoryState}/> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//     return {
//         stories : state
//     }
// }

export default StoryManager;
// export default connect(mapStateToProps,{})(StoryManager)
