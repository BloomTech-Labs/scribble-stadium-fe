import React, { useEffect, useState } from 'react'; 

import {
  getCohorts,
  getPostsForModeration,
  setSubmitStatus,
  setClusters,
  setFaceoffs,
  setResults,
} from '../../../api/moderation';

import { Button, Layout, PageHeader, Select, Form, Row, Card, Col } from 'antd';
const { Content } = Layout;
const { Option } = Select;

const ModerationTest = props => {
  const [cohorts, setCohorts] = useState([]);
  const [posts, setPosts] = useState({});
  const [form] = Form.useForm();

  useEffect(() => {
    getCohorts().then(res => {
      setCohorts(res);
      console.log(res);
    });
  }, []);

  const getPosts = () => {
    const selected = form.getFieldValue('cohort');
    if (selected) {
      getPostsForModeration(selected).then(res => {
        setPosts(res);
        console.log(res);
      });
    }
  };

  const approve = id => {
    setSubmitStatus(id, 'APPROVED').then(res => {
      setPosts(posts => ({
        ...posts,
        [id]: {
          ...posts[id],
          status: 'APPROVED',
        },
      }));
    });
  };

  const reject = id => {
    setSubmitStatus(id, 'REJECTED').then(res => {
      setPosts(posts => ({
        ...posts,
        [id]: {
          ...posts[id],
          status: 'REJECTED',
        },
      }));
    });
  };

  // Moderator can begin the clustering process for joining teams
  const cluster = () => {
    setClusters().then(res => {
      console.log(res);
    });
  };

  // Moderator can begin the faceoff stage
  const faceoff = () => {
    setFaceoffs().then(res => {
      console.log(res);
    });
  };

  // Moderator can begin the results stage
  const results = () => {
    setResults().then(res => {
      console.log(res);
    });
  };

  return (
    <Layout className="moderation-page">
      <PageHeader>
        <h1>Story Squad</h1>
      </PageHeader>
      <Layout>
        <Content>
          <Form form={form}>
            <Form.Item className="inline-form">
              <Form.Item name="cohort">
                <Select placeholder="Select a Cohort" onChange={getPosts}>
                  {cohorts.map(x => (
                    <Option key={x.ID} value={x.ID}>
                      Cohort {x.ID}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item>
                <Button type="primary">Load Submissions</Button>
                <Button type="default">Remove</Button>
                <Button type="default" onClick={cluster}>
                  Generate Cluster
                </Button>
                <Button type="default" onClick={faceoff}>
                  Generate Faceoffs
                </Button>
                <Button type="default" onClick={results}>
                  Generate Results
                </Button>
              </Form.Item>
            </Form.Item>
          </Form>
          <Row gutter={16}>
            {Object.keys(posts).map(x => {
              const cur = posts[x];
              if (
                !cur.status ||
                cur.status === 'CLEAR' ||
                cur.status === 'PENDING'
              )
                return (
                  <Col span={6}>
                    <Card>
                      <Card.Meta
                        title={`Status: ${cur.status || 'PENDING'}`}
                        description={`Pages: ${Object.keys(cur.pages).length}`}
                      />
                      <Button onClick={() => approve(x)}>ACCEPT</Button>
                      <Button onClick={() => reject(x)}>REJECT</Button>
                    </Card>
                  </Col>
                );
              else return <></>;
            })}
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default ModerationTest;
