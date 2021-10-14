import React, { useState, useEffect, Component } from 'react';

import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

class Thrashbar extends React.Component {
  constructor(...props) {
    super(...props);
    this.state = {
      child: {
        gamemode: {
          mode: 'single',
          read: false,
          write: false,
          draw: false,
          sp: true,
        },
      },
    };
    this.singled = this.singled.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    // Read is always true on single player mode
    this.props.child.gamemode.read = true;
    prevProps.child.gamemode.read = true;
    prevState.child.gamemode.read = true;
    // Write
    if (this.props.child.gamemode.write !== prevProps.child.gamemode.write) {
      prevProps.child.gamemode.write = this.props.child.gamemode.write;
      console.log('prevprop', prevProps, this.props.child.gamemode.write);
    }

    if (this.state.child.gamemode.write !== prevState.child.gamemode.write) {
      prevState.child.gamemode.write = this.state.child.gamemode.write;
      console.log(
        'prevstate',
        prevState.child.gamemode.write +
          'prevethis' +
          this.props.child.gamemode.write
      );
    }
    // Draw
    if (this.props.child.gamemode.draw !== prevProps.child.gamemode.draw) {
      prevProps.child.gamemode.draw = this.props.child.gamemode.draw;
      console.log('prevprop', prevProps, this.props.child.gamemode.draw);
    }

    if (this.state.child.gamemode.draw !== prevState.child.gamemode.draw) {
      prevState.child.gamemode.draw = this.state.child.gamemode.draw;
      console.log(
        'prevstate',
        prevState.child.gamemode.draw +
          'prevethis' +
          this.props.child.gamemode.draw
      );
    }
  }

  singled(e) {
    this.props.sread(e);
  }
  render() {
    return (
      <div>
        <Row className="rectangle125-box">
          <Col className="your-mission rectangle125">
            <h1>Your Mission</h1>
            <Row className="rectangle12B5 read-button-font">
              {
                // Number when button not clicked
                // or Check mark when clicked
              }
              <Col className="gamemodebtncolclass">
                <button
                  style={
                    this.state.child.gamemode.read ||
                    this.props.child.gamemode.read
                      ? { opacity: '40% ' }
                      : { opacity: '100% ' }
                  }
                  onClick={e => {
                    this.singled(e);
                  }}
                  id="mission-read-button"
                >
                  1
                </button>
                <p className="read-button-font">Read</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button
                  style={
                    this.state.child.gamemode.write ||
                    this.props.child.gamemode.write
                      ? { opacity: '40% ' }
                      : { opacity: '100% ' }
                  }
                  onClick={e => {
                    this.singled(e);
                  }}
                  id="mission-write-button"
                >
                  2
                </button>
                <p className="read-button-font">Write</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button
                  style={
                    this.state.child.gamemode.draw ||
                    this.props.child.gamemode.draw
                      ? { opacity: '40% ' }
                      : { opacity: '100% ' }
                  }
                  onClick={e => {
                    this.singled(e);
                  }}
                  id="mission-draw-button"
                >
                  3
                </button>
                <p className="read-button-font">Draw</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Thrashbar);
