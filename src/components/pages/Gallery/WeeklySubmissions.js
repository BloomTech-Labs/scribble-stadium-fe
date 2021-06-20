import React from 'react';
import { submissions } from '../../../state/actions';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react/dist/OktaContext';
import Weekly from './Weekly';

const WeeklySubmissions = () => {
  const { authState } = useOktaAuth();

  return (
    <>
      <div className="weekly-sub-container">
        <span className="label">
          <h3 className="h3">Week</h3>
          <h3 className="h3"> View Prompt </h3>
        </span>
        <div className="submissions">
          {data.map((child) => {
            return (
              <Weekly key={child.children_id}
              writing={child.WritingURL}
              pagenum={child.PageNum}
              drawing={child.DrawingURL}
             />)})}
        </div>
      </div>
    </>
  );
};

export default connect(state => ({
  child: state.child,
}))(WeeklySubmissions);