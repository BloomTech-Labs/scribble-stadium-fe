import React, { useState, useEffect } from 'react';
import { Modal } from 'antd';

const EmojiCard = ({ emojiRow }) => {
  return (
    <div className="EmojiCard">
      <span className="emoji-row">{emojiRow}</span>
    </div>
  );
};

const EmojiFeedback = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [emojis, setEmojis] = useState([]);
  const onClick = () => {
    setModalVisible(true);
  };
  //Parse feedback into array of multiple submissions for rendering EmojiCards
  useEffect(() => {
    const emojiArr = props.emojis.split(',').filter(string => string);
    setEmojis(emojiArr);
    console.log(emojiArr);
  }, [props]);

  return (
    <div className="EmojiFeedback">
      <button onClick={onClick}></button>
      <Modal
        visible={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => setModalVisible(false)}
        footer={null}
        title={'Feedback about your submission'}
      >
        <div className="modal-content">
          {emojis.length &&
            emojis.map((emojiRow, i) => (
              <EmojiCard key={i} emojiRow={emojiRow} />
            ))}
        </div>
      </Modal>
    </div>
  );
};
export default EmojiFeedback;
