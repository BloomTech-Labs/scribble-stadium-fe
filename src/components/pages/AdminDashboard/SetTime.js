import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { userHistory } from 'react-router-dom';

import { date } from '../../.././state/actions/index';
import { Form, Select, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const FormZ = styled.div`
  width: 50%;
  background: black;
  font-size: 20px;
`;
const StyledDiv = styled.div`
  text-align: left;
`;
// Note:the component for dateReducer has a date and an hour, this will handle the hour part of it.
const { Option } = Select;
const SetTime = ({ setHour }, props) => {
  //here we use the built in date function to set the hour to a specified value
  const handleChanges = event => {
    let date = new Date();
    let resultDate = new Date(date.getTime());
    //console.log("first result",resultDate)
    resultDate.setDate(
      //.setDate is a JS date function
      date.getDate() + ((7 + 5 - date.getDay()) % 7) // essentially this will set the day to Friday on any week.
    );
    resultDate.setHours(
      event //Now that we set the day to Friday Change the specific hour.
    );
    setHour(resultDate);

    //console.log("second result",resultDate)
    return resultDate;
  };
  //This Form will display times that will change the state of the current hour in our app
  // Feel free to add or delete hours in the form as needed.
  const dropdown = (
    <StyledDiv>
      <h1>Set Time</h1>
      <p>Select a time to change the hour to a specified value</p>
      <FormZ>
        <Form>
          <Form.Item name="Time Form">
            <Select onChange={handleChanges}>
              <Option key={0} value={0}>
                12am
              </Option>
              <Option key={6} value={6}>
                6am
              </Option>
              <Option key={12} value={12}>
                12pm
              </Option>
              <Option key={15} value={15}>
                3pm
              </Option>
              <Option key={18} value={18}>
                6pm
              </Option>
            </Select>
          </Form.Item>
        </Form>
      </FormZ>
    </StyledDiv>
  );
  return dropdown;
};

export default connect(
  state => ({
    date: state.date,
    hour: state.hour,
  }),
  {
    setDate: date.setDate,
    setHour: date.setHour,
  }
)(SetTime);
