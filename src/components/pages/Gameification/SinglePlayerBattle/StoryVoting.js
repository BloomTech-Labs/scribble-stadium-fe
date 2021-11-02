//** Import Modules */
import React, { useState } from 'react';
import { Slider, Rate } from 'antd';
import { ZoomInOutlined } from '@ant-design/icons';

//** Import Components */
import VotingExpandModal from './VotingExpandModal';

//** Temp Assets */
import tempStory from '../../../../assets/images/gamemodeimg/placeholder-story.png';

export default function StoryVoting() {
  // State to know what value you have for the voting
  const ratingInitialState = {
    story1: 0,
    story2: 0,
  };
  const [rating, setRating] = useState(ratingInitialState);

  // State to know which story to expand, and when it has expanded
  const [storyExpanded, setStoryExpanded] = useState(false);
  const [storyExpandedInfo, setStoryExpandedInfo] = useState({});

  // State that saves the reactions of each story
  const reactionInitialState = {
    story1: [],
    story2: [],
  };
  const [reactions, setReactions] = useState(reactionInitialState);

  //* Update the reactions list
  const updateReaction = (reaction, story) => {
    // First setup a variable to use for the updated reactions to add
    let updatedReactions;

    // We also make a copy of the original reactions so we can remove the needed one, if applicable
    let reactionsCopy = [...reactions[`story${story}`]];

    // Then, we check if the emoji is in. If it is, remove it. Else, add it.
    if (
      reactionsCopy.some(reactionItem => reactionItem.emoji === reaction.emoji)
    ) {
      const index = reactionsCopy.map(e => e.emoji).indexOf(reaction.emoji);

      reactionsCopy.splice(index, 1);

      console.log(reactionsCopy);

      updatedReactions = {
        ...reactions,
        [`story${story}`]: reactionsCopy,
      };
    } else {
      // We check if we've got the max of 5 emojis. If we don't, then start adding!
      if (reactions[`story${story}`].length < 5) {
        updatedReactions = {
          ...reactions,
          [`story${story}`]: [...reactions[`story${story}`], reaction],
        };
      } else {
        return;
      }
    }

    setReactions(updatedReactions);
  };

  //* Update the vote rating
  const updateRating = (value, story) => {
    setRating({
      ...rating,
      [`story${story}`]: value,
    });
  };

  //* Open the modal to read the story, as well as reacting with emojis
  const expandStory = story => {
    setStoryExpanded(true);

    const storyInfo = {
      title: 'Story 1',
      image: tempStory,
      story: story,
    };

    setStoryExpandedInfo(storyInfo);
  };

  //* Close the modal that expands the story
  const closeStory = () => {
    setStoryExpanded(false);
  };

  return (
    <div id="voting-section">
      <div className="inner-container">
        <div className="description">
          <h2>Vote For Your Favorite Story</h2>
          <p>
            Read and rate each story, then leave emoji feedback for each author.
            Keep in mind that another player is reading and rating your own work
            right now, so make sure to do your best to be fair.
          </p>
        </div>

        <div className="stories">
          <div className="story-wrapper">
            <h3>Story 1</h3>

            <div
              className="story-btn"
              role="button"
              onClick={() => expandStory(1)}
            >
              <span
                style={{ backgroundImage: `url(${tempStory})` }}
                className="story-thumbnail"
              ></span>
              <span className="magnifying-icon">
                <ZoomInOutlined />
              </span>
            </div>

            <div className="story-vote">
              <span className="stars">
                <Rate
                  defaultValue={0}
                  value={rating.story1}
                  onChange={value => updateRating(value, 1)}
                />
              </span>

              <span className="slider">
                <Slider
                  defaultValue={0}
                  max={5}
                  value={rating.story1}
                  onChange={value => updateRating(value, 1)}
                />
              </span>
            </div>
          </div>

          <div className="story-wrapper">
            <h3>Story 2</h3>

            <div
              className="story-btn"
              role="button"
              onClick={() => expandStory(2)}
            >
              <span
                style={{ backgroundImage: `url(${tempStory})` }}
                className="story-thumbnail"
              ></span>
              <span className="magnifying-icon">
                <ZoomInOutlined />
              </span>
            </div>

            <div className="story-vote">
              <span className="stars">
                <Rate
                  defaultValue={0}
                  value={rating.story2}
                  onChange={value => updateRating(value, 2)}
                />
              </span>

              <span className="slider">
                <Slider
                  defaultValue={0}
                  max={5}
                  value={rating.story2}
                  onChange={value => updateRating(value, 2)}
                />
              </span>
            </div>
          </div>
        </div>

        <div className="next-btn">
          <button className="general-btn">Vote</button>
        </div>
      </div>

      {storyExpanded && (
        <VotingExpandModal
          story={storyExpandedInfo}
          updateReaction={updateReaction}
          closeStory={closeStory}
          reactions={reactions}
        />
      )}
    </div>
  );
}
