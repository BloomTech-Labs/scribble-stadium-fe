import React, { useState } from 'react';
import UploadDocs from '../../common/UploadDocs';
import LightningKid from '../../../assets/images/hero_images/hero4.png';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import { Row, Col } from 'antd';
import { connect } from 'react-redux';
import Thrashbar from './Thrashbar';
const YourMissionComp = ({ ...props }) => {
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
    mode: 'single',
  });
  const fxd = () => {
    if (props.child.gamemode.write) {
      props.child.gamemode.write = true;

      props.child.gamemode.draw = false;

      props.child.gamemode.read = true;
      setsRwd({
        write: props.child.gamemode.write,
        draw: props.child.gamemode.draw,
        read: props.child.gamemode.read,
      });
    }

    if (props.child.gamemode.draw) {
      props.child.gamemode.write = false;

      props.child.gamemode.draw = true;

      props.child.gamemode.read = true;
      setsRwd({
        write: props.child.gamemode.write,
        draw: props.child.gamemode.draw,
        read: props.child.gamemode.read,
      });
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
      {// End Your Mission BUtton Bar
      //Begin Read orange or Write yellow Background colors

      fxd()}
      <div
        className={rwd.write === true ? 'rectangle130-yellow' : 'rectangle130'}
      >
        <Row className="btmRow">
          <img
            src={LightningKid}
            alt="A child dressed as a superhero called lightning kid"
          />
          <Col>
            <h1 className="dont4get">DONT FORGET!</h1>

            <p className="dont4get-p">
              When you are finished drawing, snap a photo and upload your
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
      <ChildFooter />
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(YourMissionComp);
