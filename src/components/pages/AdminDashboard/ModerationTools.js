import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  getCohorts,
  getPostsForModeration,
  setSubmitStatus,
  setClusters,
  setFaceoffs,
  setResults,
  setVoteSeq,
} from '../../../api/moderation';

import { reset } from '../../../api/index';

import { Button, Select, Form, Row, Card, Col, Collapse } from 'antd';

const { Option } = Select;

const ModerationTools = props => {
  const [cohorts, setCohorts] = useState([]);
  const [posts, setPosts] = useState({});
  const [form] = Form.useForm();
  const { push } = useHistory();

  useEffect(() => {
    getCohorts().then(res => {
      setCohorts(res);
      // console.log(res);
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
  // ERRLOG: no data in response
  const faceoff = () => {
    setFaceoffs().then(res => {
      console.log(res);
    });
  };

  //ERRLOG: no data in response
  const voteSeq = () => {
    setVoteSeq().then(res => {
      console.log(res);
    });
  };

  // Moderator can begin the results stage
  const results = () => {
    setResults().then(res => {
      console.log(res);
    });
  };

  const handleFaceoffs = e => {
    push('/child/match-up');
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Form form={form} className="inline-form">
        <h2 className="moderator-title">Moderator Tools</h2>
        <Collapse style={{ width: '45%' }} className="moderator-notes">
          <Collapse.Panel header="Notes & Instructions" key="1">
            <p>
              Actions an adult moderator should be able to take to run the game
              and approve/flag stories. (This is a work in progress. also not
              sure how "Reset Seeds" updates database & if it needs updating or
              is finished.)
            </p>
          </Collapse.Panel>
        </Collapse>
        <br />
        <Form.Item>
          <Button type="default" onClick={handleFaceoffs}>
            Go to Faceoffs/Matchups
          </Button>
        </Form.Item>
        <Form.Item className="moderator-form">
          <Button style={{ margin: '8px' }} type="reset" onClick={reset}>
            Reset Seeds
          </Button>
          <Button style={{ margin: '8px' }} type="primary">
            Load Submissions(TBD)
          </Button>
          <Button style={{ margin: '8px' }} type="default">
            Remove(TBD)
          </Button>
          <Button style={{ margin: '8px' }} type="default" onClick={cluster}>
            Generate Cluster
          </Button>
          <Button style={{ margin: '8px' }} type="default" onClick={faceoff}>
            Generate Faceoffs
          </Button>
          <Button style={{ margin: '8px' }} type="default" onClick={voteSeq}>
            Generate Vote Sequence
          </Button>
          <Button style={{ margin: '8px' }} type="default" onClick={results}>
            Generate Results
          </Button>
        </Form.Item>
        <h2 className="posts-title">Posts for Moderation</h2>
        <Collapse style={{ width: '45%' }}>
          <Collapse.Panel header="Instructions" key="2">
            <p>
              After students add submissions, are displayed here for a moderator
              to read and approve or reject. Select a cohort to load
              submissions. (Need to finish some functionality, see notes in
              code).
            </p>
          </Collapse.Panel>
        </Collapse>
        <br />
        <Form.Item name="cohort">
          <Select
            style={{ width: '45%' }}
            placeholder="Select a Cohort"
            onChange={getPosts}
          >
            {cohorts.map(x => (
              <Option key={x.ID} value={x.ID}>
                Cohort {x.ID}
              </Option>
            ))}
          </Select>
        </Form.Item>
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
                      description={`Pages: ${Object.keys(cur.Pages).length}`}
                    />
                    Drawing: {<img alt="Student Drawing" src={cur.Image} />}
                    {/* Will need to update writing images displayed when student submits multiple pages of writing. I don't understand how backend is handling multiple pages yet.*/}
                    Writing: {<img alt="Student Writing" src={cur.Pages[0]} />}
                    {/* TODO: approve and reject need to also update backend somehow, not just redux store. */}
                    <Button onClick={() => approve(x)}>ACCEPT</Button>
                    <Button onClick={() => reject(x)}>REJECT</Button>
                  </Card>
                </Col>
              );
            else return <></>;
          })}
        </Row>
      </Form>
    </div>
  );
};

export default ModerationTools;
