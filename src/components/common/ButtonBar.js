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
  write = false,
  draw = false,
  ...props
}) => {
  // Render read write and draw buttons
  return (
    <>
      {singled(props)}
      {(props.child.gamemode.read &&
        (props.child.gamemode.draw
          ? (((props.child.gamemode.draw = true),
            (props.child.gamemode.write = false)),
            (
              <ButtonDown
                read={true}
                op={['20%', '90%', '20%']}
                write={false}
                draw={true}
              />
            ))
          : ((props.child.gamemode.draw = false),
            (props.child.gamemode.write = true)),
        (<ButtonDown op={['10%', '20%', '90%']} draw={false} />))) ||
        (props.child.gamemode.write
          ? (((props.child.gamemode.draw = false),
            (props.child.gamemode.write = true)),
            (<ButtonDown op={['20%', '20%', '90%']} write={true} />))
          : ((props.child.gamemode.draw = true),
            (props.child.gamemode.write = false)),
        (<ButtonDown op={['10%', '90%', '20%']} write={false} />))}
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
