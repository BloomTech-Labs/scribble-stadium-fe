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
                <button
                  style={{ opacity: props.op[0] }}
                  onClick={e => {
                    singled(props);
                  }}
                  id="mission-read-button"
                >
                  1
                </button>
              }
              <p className="read-button-font">Read</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                // Write Button
                <button
                  style={{ opacity: props.op[1] }}
                  onClick={e => {
                    singled(props);
                  }}
                  id="mission-write-button"
                >
                  2
                </button>
              }
              <p className="read-button-font">Write</p>
            </Col>
            <Col className="gamemodebtncolclass">
              {
                //Draw button
                <button
                  style={{ opacity: props.op[2] }}
                  onClick={e => {
                    singled(props);
                  }}
                  id="mission-draw-button"
                >
                  3
                </button>
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
  // gamemode.read = true;
  // e.gamemode.write = false;
  console.log(e.gamemode);
  console.log(e.child);

  console.log('dont');
};
const ButtonBar = ({
  read = true,
  op = ['40%', '40%', '100%'],
  write = true,
  draw = false,
  ...props
}) => {
  // Render read write and draw buttons
  return (
    <>
      {singled(props)}
      {(props.gamemode.draw && (
        <ButtonDown op={['20%', '90%', '20%']} draw={true} />
      )) || <ButtonDown op={['10%', '90%', '90%']} draw={false} /> ||
        (props.gamemode.write && (
          <ButtonDown op={['20%', '20%', '90%']} write={true} />
        )) || <ButtonDown op={['10%', '90%', '90%']} write={false} />}
    </>
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
