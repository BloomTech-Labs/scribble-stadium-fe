import React, { useState, useEffect } from 'react';
// import history from './history';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
// import { useHistory } from 'react-router-dom';
import { Gamemode } from './index';
import { Link, Route, useHistory } from 'react-router-dom';
// import Gamebtn from './Gamebtn';
import { GamemodeCon } from './GamemodeCon';

import { render } from 'react-dom';

const GamemodeButton = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
    mode: 'single',
  });
  const [sP, setsP] = useState(true);
  //   history.push('/gamemode/single');

  // useEffect(() => {
  //   const propInit = () => {
  //     if (props.child.gamemode !== null) {
  //       props.child.gamemode = {
  //         mode: 'single',
  //         read: rwd.read,
  //         write: rwd.write,
  //         draw: rwd.draw,
  //         sp: sP,
  //       };
  //     } else {
  //       props.child.gamemode = {
  //         mode: 'select',
  //         read: false,
  //         write: false,
  //         draw: false,
  //         sp: false,
  //       };
  //     }
  //   };
  //   propInit();
  // }, [rwd, props.child]);

  useEffect(() => {
    const inofit = () => {
      if (props.child.gamemode.sp === false) {
        setsP(false);
      } else {
        setsP(true);
      }
    };
    inofit();
  }, [sP, props.child]);

  const sread = e => {
    const ff = e.target.textContent;
    switch (ff) {
      case 'Read': {
        setsRwd({ read: !rwd.read, write: rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: !props.child.gamemode.read,
          write: rwd.write,
          draw: rwd.draw,
          sp: true,
        };

        console.log('nalread ', props.child.gamemode);
        break;
      }
      case 'Write': {
        setsRwd({ read: rwd.read, write: !rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read,
          write: !props.child.gamemode.write,
          draw: rwd.draw,
          sp: true,
        };
        console.log('nalwrirte ', props.child.gamemode);

        break;
      }
      case 'Draw': {
        setsRwd({ read: rwd.read, write: rwd.write, draw: !rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read,
          write: rwd.write,
          draw: !props.child.gamemode.draw,
          sp: true,
        };
        console.log('naldraw ', props.child.gamemode);
        break;
      }
      case 'Play Boss': {
        setsRwd({
          read: rwd.read,
          write: rwd.write,
          draw: rwd.draw,
          mode: 'boss',
        });
        props.child.gamemode = {
          mode: 'boss',
          read: rwd.read,
          write: rwd.write,
          draw: rwd.draw,
          sp: true,
        };
        push('/gamemode/boss');
        console.log('nal boss ', props.child.gamemode);
        break;
      }
      default: {
        // setsRwd({ read: !rwd.read, write: !rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'select',
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          sp: false,
        };
        console.log('naldefault ', props.child.gamemode);
        break;
      }
    }

    // push('/gamemode/single');
    // push('/gamemode/single');
    // console.log('zzzz ',props.child.gamemode);
  };
  const singled = r => {
    setsP(false);
    // e.preventDefault();
    rwd.read = false;
    rwd.draw = false;
    rwd.write = false;
    props.child.gamemode = {
      mode: 'select',
      read: false,
      write: false,
      draw: false,
      sp: false,
    };
    push('/gamemode');
    // push('/gamemode/single');
    console.log('nal else ', props.child);
  };
  // const forceUpdateHandler = () => {
  //   this.forceUpdate();
  // };

  //   console.log(history);

  //   console.log(history);
  return (
    <>
      <Header displayMenu={true} />
      <div className="dash-container">
        <Row>
          <Col
            className="adventure-passport landing-animation"
            xs={4}
            sm={10}
            onClick={sread}
          >
            <h1 className="win-text">Read</h1>
          </Col>
          {rwd.read && (
            <Col
              className="accept-mission-ga1 landing-animation"
              xs={4}
              sm={14}
              onClick={sread}
            >
              <h1 className="win-text1">READ</h1>
            </Col>
          )}
        </Row>
        <Row>
          <Col
            className="adventure-passport landing-animation"
            xs={4}
            sm={10}
            onClick={sread}
          >
            <h1 className="win-text">Write</h1>
          </Col>
          {rwd.write && (
            <Col
              className="accept-mission-ga1 landing-animation"
              xs={4}
              sm={14}
              onClick={sread}
            >
              <h1 className="win-text1">WRITE</h1>
            </Col>
          )}
        </Row>
        <Row>
          <Col
            className="adventure-passport landing-animation"
            xs={4}
            sm={10}
            onClick={sread}
          >
            <h1 className="win-text">Draw</h1>
          </Col>
          {rwd.draw && (
            <Col
              className="accept-mission-ga1 landing-animation"
              xs={4}
              sm={14}
              onClick={sread}
            >
              <h1 className="win-text1">DRAW</h1>
            </Col>
          )}
        </Row>

        <Row className="bottomrow">
          <Col className="adventure-passport" xs={2} sm={24}>
            {rwd.read || rwd.write || rwd.draw ? (
              <Link to="/boss">
                <Button
                  style={{ margin: '20%' }}
                  type="default"
                  onClick={sread}
                >
                  Play Boss
                </Button>
              </Link>
            ) : (
              <div>
                {sP && (
                  <Link to="/gamemode">
                    <Button
                      style={{ margin: '20%' }}
                      type="default"
                      onClick={sread}
                    >
                      Single Player Mode
                    </Button>

                    {sP === false ||
                      (props.child.gamemode.mode === 'select' && (
                        <Route
                          {...props}
                          path="/gamemode/"
                          component={Gamemode}
                        />
                      ))}
                  </Link>
                )}
                {sP === false ||
                  props.child.gamemode.sp === false ||
                  (props.child.gamemode.mode === 'select' && (
                    <Route {...props} path="/gamemode/" component={Gamemode} />
                  ))}
              </div>
            )}
          </Col>
        </Row>
      </div>
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(GamemodeButton);
// export default connect()(Gamemode);