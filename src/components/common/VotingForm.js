import React, { useState } from 'react';
import Picker from 'emoji-picker-react';
import { Button, Form, Radio } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import { postVotes } from '../../api';

const VotingForm = props => {
  const { push } = useHistory();
  const { authState } = useOktaAuth();
  const [value, setValue] = useState(1);
  const [chosenEmoji1, setChosenEmoji1] = useState(null);
  const [chosenEmoji2, setChosenEmoji2] = useState(null);

  const onEmojiClick1 = (event, emojiObject) => {
    setChosenEmoji1(emojiObject);
  };

  // const onEmojiClick2 = (e, emojiObj) = {
  //   setChosenEmoji2(emojiObj)
  // }

  const onChange = e => {
    setValue(e.target.value);
  };
  const onFinish = () => {
    const body = {
      Vote: value,
      MemberID: props.MemberID,
      FaceoffID: props.FaceoffID,
    };
    postVotes(authState, body).then(res => {
      push('/child/match-up');
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="vote" valuePropName="checked">
        <Radio.Group onChange={onChange} value={value}>
          <Radio className="left-radio" value={1} />
          {/* <div className="emoji-picker">
            {chosenEmoji1 ? (
              <span>You chose: {chosenEmoji1.emoji}</span>
            ) : (
              <span>No emoji Chosen</span>
            )}
            <Picker onEmojiClick1={onEmojiClick1} />
          </div> */}

          <Radio className="right-radio" value={2} />
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button className="votingSubmit-button" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VotingForm;
