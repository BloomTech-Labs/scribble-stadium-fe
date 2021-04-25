import React from 'react';
import { Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Panel } = Collapse;

function FAQ(props) {
  return (
    <div className="FAQ-container">
      <Collapse
        bordered={false}
        defaultActiveKey={['1']}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        className="site-collapse-custom-collapse"
      >
        <Panel
          header="Question 1 goes here and this is just extra placeholder text?"
          key="1"
          className="site-collapse-custom-panel"
        >
          <p>Answer for 1 goes here and of course more placeholder text.</p>
        </Panel>
        <Panel
          header="Question 2 goes here and will there be more placeholder text
          this time?"
          key="2"
          className="site-collapse-custom-panel"
        >
          <p>
            Answer for 2 goes here. Absolutely there will be more place- holder
            text in this wireframe.
          </p>
        </Panel>
        <Panel
          header="Question 3 goes here but will the placeholder text ever stop?"
          key="3"
          className="site-collapse-custom-panel"
        >
          <p>
            Answer for 3 goes here. Unfortunately, this is where the place-
            holder text has to stop.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
}

export default FAQ;
