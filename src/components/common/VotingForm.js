import React, { useState } from 'react';

import { Button, Form, Radio } from 'antd';

const VotingForm = () => {
  const [value, setValue] = useState(1);

  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  const onFinish = values => {
    console.log('Success:', values);
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
