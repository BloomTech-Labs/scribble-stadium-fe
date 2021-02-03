import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { date } from '../../../state/actions';

import {
  getCohorts,
  getPostsForModeration,
  setSubmitStatus,
  setClusters,
  setFaceoffs,
  setResults,
} from '../../../api/moderation';

import { reset } from '../../../api/index';

import {
  Button,
  Layout,
  PageHeader,
  Select,
  Form,
  Row,
  Card,
  Col,
  Divider,
} from 'antd';
import FormItem from 'antd/lib/form/FormItem';
const { Content } = Layout;
const { Option } = Select;

const ModerationTest = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [cohorts, setCohorts] = useState([]);
  const [posts, setPosts] = useState({});
  const [form] = Form.useForm();
  const { push } = useHistory();

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

  const homePageHandler = () => {
    push('/child/dashboard');
  };

  const handleFaceoffs = e => {
    push('/child/match-up');
  };

  const handleCustomDateChange = date => {
    setStartDate(date);
    props.setDate(date);
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
              <Form.Item>
                <Button type="default" onClick={homePageHandler}>
                  Back to Home Page
                </Button>
              </Form.Item>

              <Divider orientation="left">Moderator Tools</Divider>
              <p>
                Actions an adult moderator should be able to take to run the
                game and approve/flag stories. This is a work in progress.
              </p>
              <Form.Item>
                <Button type="default" onClick={handleFaceoffs}>
                  Go to Faceoffs/Matchups
                </Button>
                <Button type="reset" onClick={reset}>
                  Reset Seeds
                </Button>
                <Button type="primary">Load Submissions(TBD)</Button>
                <Button type="default">Remove(TBD)</Button>
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

              <Divider orientation="left">Posts for moderation</Divider>
              <p>
                After students add submissions, are displayed here for a
                moderator to read and approve or reject. Select a cohort to load
                submissions. (Need to finish some functionality, see notes in
                code).
              </p>

              <Form.Item name="cohort">
                <Select placeholder="Select a Cohort" onChange={getPosts}>
                  {cohorts.map(x => (
                    <Option key={x.ID} value={x.ID}>
                      Cohort {x.ID}
                    </Option>
                  ))}
                </Select>
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
                        // Why is this description broken??? Please fix.
                        // description={`Pages: ${Object.keys(cur.pages).length}`}
                      />
                      Drawing: {<img alt="Student Drawing" src={cur.Image} />}
                      {/* Will need to update writing images displayed when student submits multiple pages of writing. I don't understand how backend is handling multiple pages yet.*/}
                      Writing:{' '}
                      {<img alt="Student Writing" src={cur.Pages[0]} />}
                      {/* TODO: approve and reject need to also update backend somehow, not just redux store. */}
                      <Button onClick={() => approve(x)}>ACCEPT</Button>
                      <Button onClick={() => reject(x)}>REJECT</Button>
                    </Card>
                  </Col>
                );
              else return <></>;
            })}
          </Row>

          <Divider orientation="left">Dev Tools</Divider>
          <p>
            Use these to simulate a child's progress quickly. These will update
            the database as you submit. (NOTE: These are a work in progress
            still & need functinality finished!!!)
          </p>
          <FormItem>
            <span className="datePickerTxt">Change date and time to:</span>
            <DatePicker
              selected={startDate}
              showTimeSelect
              onChange={handleCustomDateChange}
            />
          </FormItem>
        </Content>
      </Layout>
    </Layout>
  );
};

export default connect(
  state => ({
    custom_date: state.date.custom_date,
  }),
  {
    setDate: date.setDate,
  }
)(ModerationTest);
