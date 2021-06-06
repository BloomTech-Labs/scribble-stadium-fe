import React from 'react';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const ButtonDown = props => {
  return (
    <div>
      <Row className="rectangle125-box">
        <Col className="your-mission rectangle125">
          <h1>Your Mission</h1>
          <Row className="rectangle12B5 read-button-font">
            <Col className="gamemodebtncolclass">
              {
                // Read button
              }
              <p className="read-button-font">Read</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                // Write Button
              }
              <p className="read-button-font">Write</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                //Draw button
              }
              <p className="read-button-font">Draw</p>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
const singled = e => {
  // props.singled(e);
  e.gamemode.read = true;
  console.log(e);
  console.log('dont');
};
const ButtonBar = ({ read = false, write = true, draw = false, ...props }) => {
  // Render read write and draw buttons
  return (
    <ButtonDown read={true}>
      {singled(props)}
      read &&{' '}
      <button
        style={
          props.child.gamemode.read || read
            ? { opacity: '40% ' }
            : { opacity: '100% ' }
        }
        onClick={e => {
          singled(e);
        }}
        id="mission-read-button"
      >
        1
      </button>
      write !== null &&{' '}
      <button
        style={
          props.child.gamemode.write || write
            ? { opacity: '40% ' }
            : { opacity: '100% ' }
        }
        onClick={e => {
          singled(e);
        }}
        id="mission-write-button"
      >
        2
      </button>
      <button
        style={draw === null ? { opacity: '40% ' } : { opacity: '100% ' }}
        onClick={e => {
          singled(e);
        }}
        id="mission-draw-button"
      >
        3
      </button>
    </ButtonDown>
  );
};
export default connect(
  state => ({
    gamemode: state.child.gamemode,
  }),
  { clearUsers: global.clearUsers }
)(ButtonBar);
ButtonBar.propTypes = {
  gamemode: PropTypes.object,
};
