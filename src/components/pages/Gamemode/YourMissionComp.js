import React, { useState, useEffect } from 'react';
import UploadDocs from '../../common/UploadDocs';
import LightingKid from '../../../assets/images/gamemodeimg/LightingKid.png';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import UploaderComp from './UploaderComp';
import { tasks } from '../../../state/actions';
import { Gamemode } from './index';
import { Link, Route, useHistory } from 'react-router-dom';
import { render } from 'react-dom';
import Thrashbar from './Thrashbar';
const YourMissionComp = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
    mode: 'single',
  });
  const fxd = () => {
    if (props.child.gamemode.write) {
      props.child.gamemode.write = true;
      rwd.write = true;
      props.child.gamemode.draw = false;
      rwd.draw = false;
      props.child.gamemode.read = true;
      rwd.read = true;
    }

    if (props.child.gamemode.draw) {
      props.child.gamemode.write = false;
      rwd.write = false;
      props.child.gamemode.draw = true;
      rwd.draw = true;
      props.child.gamemode.read = true;
      rwd.read = true;
    }
  };
  return (
    <>
      <Header displayMenu={true} />
      <div>
        <Thrashbar
          props={props}
          sread={e => {
            props.sread(e);
          }}
        />
      </div>
      {
        // End Your Mission BUtton Bar
        //Begin Read orange or Write yellow Background colors

        fxd()
      }
      <div
        className={rwd.write === true ? 'rectangle130-yellow' : 'rectangle130'}
      >
        <Row className="btmRow">
          <img src={LightingKid} />
          <Col>
            <h1 className="dont4get">DON'T FORGET!</h1>

            <p className="dont4get-p">
              When you're finished drawing, snap a photo and upload your
              masterpiece.
            </p>
            <div className="kids-story-upload kids-story-upload-font">
              {rwd.write ? 'Upload your writing' : 'Upload your drawing'}
              <UploadDocs {...props} />
            </div>
            <div
              onClick={() => {
                props.pdw();
              }}
            >
              <p className="id-rather-choose-another-choice-font">
                {rwd.write ? "I'd rather draw" : "I'd rather write"}
              </p>
            </div>
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
)(YourMissionComp);
