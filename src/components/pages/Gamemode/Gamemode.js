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
        const props1 = {
          name: 'file',
          multiple: true,
          action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
          onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
              console.log(info.file, info.fileList);
            }
            if (status === 'done') {
              message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
              message.error(`${info.file.name} file upload failed.`);
            }
          },
          onDrop(e) {
            console.log('Dropped files', e.dataTransfer.files);
          },
        };
        props.child = props1;
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
    if (location.pathname === '/gamemode/single' && sP === true) {
      push('/gamemode');
      props.child.gamemode = {
        mode: 'select',
        read: false,
        write: false,
        draw: false,
        sp: false,
      };
      setsP(false);
      console.log('nal', props.child);
    } else if (location.pathname === '/gamemode' && sP === false) {
      push('/gamemode/single');

      props.child.gamemode = {
        mode: 'single',

        sp: true,
      };
      console.log('nal elif', props.child);
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
    props.child.gamemode.mode = 'select';
    props.child.gamemode.sp = false;
    props.child.gamemode.read = false;
    props.child.gamemode.write = false;
    props.child.gamemode.draw = false;
  };
  /* If you need a go back menu
(sP && props.child.gamemode.mode === 'select' && (
      <Link to="/gamemode">
        <div>
          <button onClick={singled}>Goback to Menu</button>
          <Route path="/gamemode" component={GamemodeButton} />
        </div>
      </Link>
    )) ||
  */

  return (
    <Switch>
      <Router>
        <>
          {props.child.gamemode.mode === 'select' && !props.child.gamemode.sp && (
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
          {props.child.gamemode === null && reini()}

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
