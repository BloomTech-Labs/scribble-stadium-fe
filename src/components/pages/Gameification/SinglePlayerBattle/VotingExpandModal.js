//** Import Modules */
import React, { useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { SmileOutlined, CloseOutlined } from '@ant-design/icons';

//** Import Components */
import VotingEmojiReaction from './VotingEmojiReaction';

export default function VotingExpandModal(props) {
  // Get component props
  const { story, closeStory, reactions, updateReaction } = props;

  // Open Emoji Box
  const [openEmoji, setOpenEmoji] = useState(false);

  // Get src url for the images folder. This is the images folder in the public directory
  const imgBaseUrl = window.location.origin + '/assets/images/emojis/svg';

  useEffect(() => {
    gsap.from('#expand-modal', { left: '100vw', opacity: 0, duration: 1 });
  }, []);

  //** Close the modal
  const closeModal = () => {
    gsap.to('#expand-modal', { x: '100vw', opacity: 0, duration: 1 });

    setTimeout(() => {
      closeStory();
    }, 1000);
  };

  //** Open Emoji Box
  const openEmojiBox = () => {
    setOpenEmoji(true);
  };

  //** Close Emoji Box
  const closeEmojiBox = () => {
    setOpenEmoji(false);
  };

  return (
    <div id="expand-modal">
      <div className="inner-modal">
        <div className="header">
          <h3>{story.title}</h3>
          <button className="close" onClick={closeModal}>
            Close <CloseOutlined />
          </button>
        </div>

        <div className="story">
          <img src={story.image} alt={story.title} />
        </div>

        <div className="reaction">
          <p>
            Choose 5 different emojis to express how you feel about this story.
          </p>

          <div className="emoji-field" onClick={openEmojiBox} role="button">
            <div className="emoji-list">
              {reactions[`story${story.story}`].map((item, index) => {
                return (
                  <img
                    key={index}
                    src={`${imgBaseUrl}/${item.emoji}.svg`}
                    alt={item.name}
                  />
                );
              })}
            </div>
            <div className="icon">
              <SmileOutlined />
              <span>Keyboard</span>
            </div>
          </div>

          {openEmoji && (
            <VotingEmojiReaction
              closeEmojiBox={closeEmojiBox}
              updateReaction={updateReaction}
              storyID={story.story}
              imgBaseUrl={imgBaseUrl}
              reactions={reactions}
            />
          )}
        </div>
      </div>
    </div>
  );
}
