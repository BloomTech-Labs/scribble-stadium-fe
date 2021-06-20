import React from 'react';
import { connect } from 'react-redux';

const Weekly = (props) => {

    return (
        <div>
            <div className="sub-container">
                <img className="gallery-submission" src={props.drawing} alt="drawing submision" />
            </div>
            <div className="sub-container">
                <img className="gallery-submission" src={props.writing} alt="writing submision" />
            </div>
        </div>
    )
};

export default connect(state => ({
    child: state.child,
  }))(Weekly);