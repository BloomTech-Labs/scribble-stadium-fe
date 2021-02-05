import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
// import draft_dev_moderation_page from 'story-squad-fe-b/docs/draft-dev-moderation-page.png';
// import draft_dev_moderation_page from '../../../../docs/draft-dev-moderation-page.png';

import { date } from '../../../state/actions';

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
  Collapse,
  Radio,
  Alert,
} from 'antd';

// import Sider from 'antd/lib/layout/Sider';
const { Content } = Layout;
const { Option } = Select;

//radioStyle copied straight from antD docs. is there a better way.
const radioStyle = {
  display: 'block',
  // height: '30px',
  // lineHeight: '30px',
};

const devToolNotes = [
  '(NOTE: This is a work in progress still & need functionality finished to allow better developer testing of features over time!!!)',
  "DevTool Purpose: Use this to quickly adjust a child's progress. This will update the database as you submit & allow you to view the front-end at different stages of the week, as well as easily undo/redo student progress.",
  'After picking cohort, you should be allowed to choose the week, then the exact date in that week. These should somehow be interconnected, since every exact date is part of a speific week number depending on the cohort.',
  'Bonus points if these autopopulates with the cohort/week/date/progress currently in the database. But that might be overkill/stretch. Until then, be sure to have PGAdmin open to view current DB entries. (instructions in FE Readme.md',
  'Writing and Drawing submissions can be done by a student in either order, but they must both be completed for a student to progress to the next steps',
  'Unlocking a faceoff means that student can see the opposing teams submission & whether or not the result of the faceoff has been decided. This means that a student must finish all 3 of their required votes  AND that other students must finish voting on all 4 of the faceoffs in order to see the big reveal. See Readme for more details. Also, as soon as the big reveal is finished, student should be able to choose to start next week. New week reading prompt/submissions are only accessible after a student has completely finished the current week.',
  '**See most detailed explanation of game mechanics in `StorySquadExplained.md` (linked in FE Readme) (also, please update that md file every month with more info)**',
];

const studentProgressSteps = [
  {
    days: 'Saturday-Wednesday',
    description: 'Submissions',
    steps: ['Finished Reading', 'Submitted Writing', 'Submitted Drawing'],
  },
  {
    days: 'Thursday',
    description: 'Teacher Moderation & DS',
    steps: [
      'Flag student submission',
      'Assign Squad Scores on writings and drawings',
      'Cluster Students to squads & matchup teams',
    ],
  },
  {
    days: 'Friday',
    description: 'Bet, Vote, Reveal',
    steps: [
      "Student's 1st vote unlocks second locked faceoff",
      "Student's 2nd vote unlocks third locked faceoff",
      'Non-matchup students finish voting for first matchup & reveal results of first matchup',
      'Non-matchup students finish voting for second matchup & reveal results of second matchup',
      '1Non-matchup students finish voting for third matchup & reveal results of third matchup',
      '1Non-matchup students finish voting for fourth matchup & big, final reveal can be viewed.',
    ],
  },
];

const ModerationTest = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [cohorts, setCohorts] = useState([]);
  const [posts, setPosts] = useState({});
  // set initial state from database (or intermediary function), instead of hardcoding
  const [studentProgress, setStudentProgress] = useState(1);
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

  const onStudentProgressChange = e => {
    console.log('radio checked', e.target.value);
    setStudentProgress(e.target.value);
  };

  const submitStudentProgress = () => {
    console.log(
      'SubmitStudentProgress started running, but is empty. Please finish the functionality. studentProgress:------',
      studentProgress
    );
    // use `studentProgress` to push changes to DB according to options selected. Possibly by manipulating seed data, and or having submissions ready to send out.
  };

  let counter = 0;

  return (
    <Layout className="moderation-page">
      {/* <Layout> */}
      <PageHeader>
        <h1>Story Squad</h1>
      </PageHeader>
      <Layout>
        {/* <Sider>
        Would links to fast scroll to specific sections be useful?
        </Sider> */}

        <Content>
          <h1>
            <Alert
              message="THIS ROUTE/PAGE/FOLDER IS DEPRECIATED."
              type="error"
            />
            THIS ROUTE IS DEPRECIATED. PLEASE USE/WORK ON{' '}
            <Link to="/admin">`/admin`</Link> INSTEAD OF `/moderation`
          </h1>
          <h1></h1>
          <Form form={form} className="inline-form">
            <Button type="default" onClick={homePageHandler}>
              Back to Home Page
            </Button>
            <Divider orientation="left">
              <h2>Moderator Tools</h2>
            </Divider>
            <Collapse style={{ width: '100%' }}>
              <Collapse.Panel header="Notes & Instructions" key="1">
                <p>
                  Actions an adult moderator should be able to take to run the
                  game and approve/flag stories. (This is a work in progress.
                  also not sure how "Reset Seeds" updates database & if it needs
                  updating or is finished.)
                </p>
              </Collapse.Panel>
            </Collapse>
            <br />
            <Form.Item>
              <Button type="default" onClick={handleFaceoffs}>
                Go to Faceoffs/Matchups
              </Button>
            </Form.Item>
            <Form.Item>
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
              <Button type="default" onClick={voteSeq}>
                Generate Vote Sequence
              </Button>
              <Button type="default" onClick={results}>
                Generate Results
              </Button>
            </Form.Item>
            <Divider orientation="left">
              <h2>Posts for moderation</h2>
            </Divider>
            <Collapse style={{ width: '100%' }}>
              <Collapse.Panel header="Instructions" key="2">
                <p>
                  After students add submissions, are displayed here for a
                  moderator to read and approve or reject. Select a cohort to
                  load submissions. (Need to finish some functionality, see
                  notes in code).
                </p>
              </Collapse.Panel>
            </Collapse>
            <br />
            <Form.Item name="cohort">
              <Select placeholder="Select a Cohort" onChange={getPosts}>
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
                          description={`Pages: ${
                            Object.keys(cur.Pages).length
                          }`}
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
            <Divider orientation="left">
              <h2>Dev Tools</h2>
            </Divider>
            <Collapse>
              <Collapse.Panel header="Dev Notes" key="3">
                <ul>
                  {devToolNotes.map(note => {
                    return <li>{note}</li>;
                  })}
                </ul>
              </Collapse.Panel>
            </Collapse>
            <br />
            <Form.Item name="cohorts">
              {/* Needs database to have multiple cohorts & weeks to be able to select a different cohort. */}
              {/* Possibly use antDesign's Cascader to combine cohort, week, date into one component. */}
              <Select
                placeholder="Select a Cohort"
                // onChange={}
              >
                {cohorts.map(x => (
                  <Option key={x.ID} value={x.ID}>
                    Cohort {x.ID}
                  </Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item>
              <Button>Week Picker here (TBD)</Button>
              <span className="datePickerTxt">Change date and time to:</span>
              <DatePicker
                selected={startDate}
                showTimeSelect
                onChange={handleCustomDateChange}
              />
            </Form.Item>
            ** Choose how far along the week you want for the student's
            progress: **
            {studentProgressSteps.map(x => {
              return (
                <>
                  <h3>{x.days}</h3>
                  <h4>{x.description}</h4>
                  <Form.Item>
                    <Radio.Group
                      onChange={onStudentProgressChange}
                      value={studentProgress}
                    >
                      {x.steps.map(step => {
                        counter += 1;
                        return (
                          <Radio style={radioStyle} value={counter}>
                            {counter}) {step}
                          </Radio>
                        );
                      })}
                    </Radio.Group>
                  </Form.Item>
                </>
              );
            })}
            <Button onClick={submitStudentProgress}>
              Send Changes to DB (TBD)
            </Button>
          </Form>
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
