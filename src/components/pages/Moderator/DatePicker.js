import React from 'react';

import { DatePicker, Space, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

const Date_Picker = () => (
  <Space direction="horizontal">
    <DatePicker onChange={onChange} />
    <DatePicker onChange={onChange} picker="week" />
    <DatePicker onChange={onChange} picker="month" />
    <DatePicker onChange={onChange} picker="year" />
    <Button type="primary" icon={<SearchOutlined />}>
      Search
    </Button>
  </Space>
);

export default Date_Picker;
