import React, { useState } from 'react';
import { Button, Form, Radio } from 'antd';
import { useOktaAuth } from '@okta/okta-react';
import { useHistory } from 'react-router-dom';

import { postVotes } from '../../api';

const VotingForm = props => {
  const { push } = useHistory();
  const { authState } = useOktaAuth();
  const { subEmojis1, subEmojis2 } = props.subEmojis;
  const [value, setValue] = useState();

  const onChange = e => {
    setValue(e.target.value);
  };
  const onFinish = () => {
    console.log('AJ', value);
    const body = {
      Vote: value,
      MemberID: props.MemberID,
      FaceoffID: props.FaceoffID,
      subEmojis1,
      subEmojis2,
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
          {/*
            Change values to submission ids
          */}
          <Radio className="left-radio" value={props.SubmissionIDs[0]} />
          <Radio className="right-radio" value={props.SubmissionIDs[1]} />
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
