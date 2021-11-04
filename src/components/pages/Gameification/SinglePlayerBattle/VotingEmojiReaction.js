//** Import Modules */
import React from 'react';
import { emojiList } from './EmojiList';

export default function VotingEmojiReaction(props) {
  // Get props
  const {
    closeEmojiBox,
    updateReaction,
    storyID,
    imgBaseUrl,
    reactions,
  } = props;

  return (
    <div className="emoji-box">
      {emojiList.map((item, index) => {
        const emojiInfo = {
          emoji: item.emoji,
          name: item.name,
        };

        let selectedClass;

        if (
          reactions[`story${storyID}`].some(
            reaction => reaction.emoji === item.emoji
          )
        ) {
          selectedClass = 'selected';
        }

        return (
          <div
            className={`emoji-item ${selectedClass}`}
            key={index}
            role="button"
            onClick={() => updateReaction(emojiInfo, storyID)}
          >
            <img src={`${imgBaseUrl}/${item.emoji}.svg`} alt={item.name} />
          </div>
        );
      })}

      <div className="close-btn">
        <button onClick={closeEmojiBox} className="general-btn">
          Done
        </button>
      </div>
    </div>
  );
}
