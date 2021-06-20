import React, { useState, useEffect } from 'react';

import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';

import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import GamemodeButton from './GamemodeButton';

const Gamemode = ({ ...props }) => {
  const { push, location } = useHistory();
  const [sP, setsP] = useState(false);

  useEffect(() => {
    const propInit = () => {
      if (props.child.gamemode !== null && location.pathname === '/gamemode') {
        props.child.gamemode = {
          mode: 'select',
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          sp: false,
        };
      } else {
        props.child.gamemode = {
          mode: 'select',
          read: false,
          write: false,
          draw: false,
          sp: false,
        };
      }
    };
    propInit();
  }, [props, location]);

  const singled = () => {
    if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');

      props.child.gamemode = {
        mode: 'single',
        read: false,
        write: false,
        draw: false,
        sp: true,
      };
      console.log('nal gamemode singled', props.child);
      setsP(true);
    }
  };
  const trig = () => {
    return (
      <div>
        <Button type="default" onClick={singled}>
          Single Player
        </Button>
        <Route {...props} path="/gamemode/single" component={GamemodeButton} />
      </div>
    );
  };
  const reini = () => {
    // For basic prop initiation
    const ggm = {
      mode: 'select',
      read: false,
      write: false,
      draw: false,
      sp: false,
    };
    props.child.gamemode = ggm;
  };

  return (
    <Switch>
      <Router>
        <>
          {props.child.gamemode === null
            ? reini()
            : props.child.gamemode.mode === 'select' &&
              !props.child.gamemode.sp && (
                <div className="dash-container">
                  <Header />

                  <Row>
                    <Col className="adventure-passport" xs={16} sm={24}>
                      {!sP && props.child.gamemode.mode === 'select' && (
                        <Link to="/gamemode/single">{trig()}</Link>
                      )}
                    </Col>
                  </Row>
                </div>
              )}

          {props.child.gamemode.sp &&
            props.child.gamemode.mode === 'single' && (
              <Route
                {...props}
                path="/gamemode/single"
                component={GamemodeButton}
              />
            )}
        </>
      </Router>
    </Switch>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Gamemode);
