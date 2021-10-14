import React, { useState } from 'react';
import { Button, Form, Radio } from 'antd';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom';

import { postVotes, updateChildData } from '../../api';

const VotingForm = props => {
  const { push } = useHistory();
  const { user } = useAuth0();
  const { subEmojis1, subEmojis2 } = props.subEmojis;
  const [value, setValue] = useState();
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const onChange = e => {
    setValue(e.target.value);
  };
  const onFinish = () => {
    const body = {
      Vote: value,
      MemberID: props.child.memberId,
      FaceoffID: props.faceoffToVote.ID,
      VotesCasted: props.faceoffToVote.VotesCasted + 1,
      subEmojis1,
      subEmojis2,
    };

    const child = {
      Name: props.child.name,
      ParentID: props.child.parentId,
      CohortID: props.child.cohortId,
      GradeLevel: props.child.gradeLevel,
      VotesRemaining: props.child.VotesRemaining - 1,
    };

    updateChildData(user, child, props.child.id);
    postVotes(user, body).then(res => {
      push('/child/match-up');
    });
  };
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onValuesChange = () => {
    setButtonDisabled(false);
  };

  return (
    <Form
      onValuesChange={onValuesChange}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item name="vote" valuePropName="checked">
        <Radio.Group onChange={onChange} value={value}>
          <Radio
            className="left-radio"
            value={props.faceoffToVote.SubmissionID1}
          />
          <Radio
            className="right-radio"
            value={props.faceoffToVote.SubmissionID2}
          />
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button
          className="votingSubmit-button"
          htmlType="submit"
          disabled={buttonDisabled}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VotingForm;
