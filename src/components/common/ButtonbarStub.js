import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LightingKid from '../../assets/images/gamemodeimg/LightingKid.png';

const ButtonstubDown = ({ classWrite1, classWrite2, classWrite3 }) => {
  return (
    <div className={classWrite1}>
      <Row className="btmRow">
        <img src={LightingKid} />
        <Col>
          <h1 className="dont4get">DON'T FORGET!</h1>

          <p className="dont4get-p">
            When you're finished drawing, snap a photo and upload your
            masterpiece.
          </p>
          <div className="kids-story-upload kids-story-upload-font">
            {classWrite2}
            {/*
            Upload onclick button under construction 
            */}
          </div>
          <div
          // write or draw handler to choose I'd rather draw or I'd rather write
          // Onclick under construction
          >
            <p className="id-rather-choose-another-choice-font">
              {classWrite3}
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

const ButtonbarStub = ({
  write = false,
  classWrite1 = write ? 'rectangle130-yellow' : 'rectangle130',
  classWrite2 = write ? 'Upload your writing' : 'Upload your drawing',
  classWrite3 = write ? "I'd rather draw" : "I'd rather write",
  ...props
}) => {
  // Render read write and draw buttons
  return (
    <>
      <ButtonstubDown
        {...props}
        write={props.gamemode.write}
        classWrite1={classWrite1}
        classWrite2={classWrite2}
        classWrite3={classWrite3}
      />
    </>
  );
};
export default connect(
  state => ({
    gamemode: state.child.gamemode,
  }),
  {}
)(ButtonbarStub);
ButtonbarStub.propTypes = {
  gamemode: PropTypes.object,
  write: PropTypes.bool,
  classWrite1: PropTypes.string,
  classWrite2: PropTypes.string,
  classWrite3: PropTypes.string,
};
