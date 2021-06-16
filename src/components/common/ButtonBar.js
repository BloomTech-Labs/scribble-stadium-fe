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
                    //sread dispatcher here
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
                    //sread dispatcher here
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
                    //sread dispatcher here
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
      {(props.gamemode.read &&
        (props.gamemode.draw
          ? (((props.gamemode.draw = true), (props.gamemode.write = false)),
            (
              <ButtonDown
                read={true}
                op={['40%', '90%', '40%']}
                write={false}
                draw={true}
              />
            ))
          : ((props.gamemode.draw = false), (props.gamemode.write = true)),
        (
          <ButtonDown
            op={['40%', '40%', '90%']}
            read={true}
            write={true}
            draw={false}
          />
        ))) ||
        (props.gamemode.write
          ? (((props.gamemode.draw = false), (props.gamemode.write = true)),
            (
              <ButtonDown
                op={['40%', '40%', '90%']}
                read={true}
                write={true}
                draw={false}
              />
            ))
          : ((props.gamemode.draw = true), (props.gamemode.write = false)),
        (
          <ButtonDown
            op={['40%', '90%', '40%']}
            read={true}
            write={false}
            draw={true}
          />
        ))}
    </>
  );
};
export default connect(
  state => ({
    gamemode: state.child.gamemode,
  }),
  {
    // sread: Dispatcher to come
  }
)(ButtonBar);
ButtonBar.propTypes = {
  gamemode: PropTypes.object,
};
