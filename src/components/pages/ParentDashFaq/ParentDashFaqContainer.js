import React from 'react';
import Header from '../../common/Header';
import { Collapse, Layout, Typography } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Panel } = Collapse;

const ParentDashFaqContainer = () => {
  return (
    <>
      <Header displayMenu={false} />
      <Layout>
        <Title className="title" style={{ color: '#0267C1' }} level={1}>
          FAQ
        </Title>
        <div>
          <Layout>
            <Collapse
              bordered={false}
              defaultActiveKey={['1']}
              expandIcon={({ isActive }) => (
                <CaretRightOutlined rotate={isActive ? 90 : 0} />
              )}
              className="container-parent-faq"
            >
              <Panel
                header="This is the first question ?"
                key="1"
                className="panel-parent-faq"
              >
                <p>
                  {' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </Panel>
              <Panel
                header="This is the second question ?"
                key="2"
                className="panel-parent-faq"
              >
                <p>
                  {' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </Panel>
              <Panel
                header="This is the third question?"
                key="3"
                className="panel-parent-faq"
              >
                <p>
                  {' '}
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </Panel>
            </Collapse>
          </Layout>
        </div>
      </Layout>
    </>
  );
};

export default ParentDashFaqContainer;
