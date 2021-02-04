import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { date } from '../../../state/actions';

import { Button, Select, Form, Divider, Collapse, Radio } from 'antd';
// import Sider from 'antd/lib/layout/Sider';

import {
  getCohorts,
  // getPostsForModeration,
  // setSubmitStatus,
  // setClusters,
  // setFaceoffs,
  // setResults,
} from '../../../api/moderation';

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

const DevTools = props => {
  const [startDate, setStartDate] = useState(new Date());
  const [cohorts, setCohorts] = useState([]);
  // const [posts, setPosts] = useState({});
  // set initial state from database (or intermediary function), instead of hardcoding
  const [studentProgress, setStudentProgress] = useState(1);
  // const [form] = Form.useForm();

  useEffect(() => {
    getCohorts().then(res => {
      setCohorts(res);
      // console.log(res);
    });
  }, []);

  // // Moderator can begin the clustering process for joining teams
  // const cluster = () => {
  //   setClusters().then(res => {
  //     console.log(res);
  //   });
  // };

  // // Moderator can begin the faceoff stage
  // const faceoff = () => {
  //   setFaceoffs().then(res => {
  //     console.log(res);
  //   });
  // };

  // // Moderator can begin the results stage
  // const results = () => {
  //   setResults().then(res => {
  //     console.log(res);
  //   });
  // };

  // const handleFaceoffs = e => {
  //   push('/child/match-up');
  // };

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
    <Form>
      <Divider orientation="left">
        <h2>Dev Tools</h2>
      </Divider>
      <Collapse>
        <Collapse.Panel header="Dev Notes" key="3">
          <ul>
            {devToolNotes.map((note, index) => {
              return <li key={index}>{note}</li>;
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
      ** Choose how far along the week you want for the student's progress: **
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
                    <Radio style={radioStyle} value={counter} key={counter}>
                      {counter}) {step}
                    </Radio>
                  );
                })}
              </Radio.Group>
            </Form.Item>
          </>
        );
      })}
      <Button onClick={submitStudentProgress}>Send Changes to DB (TBD)</Button>
    </Form>
  );
};

export default connect(
  state => ({
    custom_date: state.date.custom_date,
  }),
  {
    setDate: date.setDate,
  }
)(DevTools);
