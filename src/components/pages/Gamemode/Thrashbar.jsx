import React, { useState, useEffect, Component } from 'react';
// import history from './history';
import LightingKid from '../../../assets/images/gamemodeimg/LightingKid.png';
import { Header } from '../../common';
import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';
import { tasks } from '../../../state/actions';
// import { useHistory } from 'react-router-dom';
import { Gamemode } from './index';
import { Link, Route, useHistory } from 'react-router-dom';
// import Gamebtn from './Gamebtn';
import { GamemodeCon } from './GamemodeCon';

// import { render } from 'react-dom';

  



class Thrashbar extends React.Component {

 

  constructor(...props){
    super(...props);
    this.state ={
      child:{
        gamemode:{
          mode: 'single',
          read: false,
          write: false,
          draw: false,
          sp: true
        }
      }
    };
    this.singled = this.singled.bind(this);
}


   singled(){
     console.log('fly');
     this.props.sread();
    // setsP(false);
    // e.preventDefault();
    // rwd.read = false;
    // rwd.draw = false;
    // rwd.write = false;
    // props.child.gamemode = {
    //   mode: 'select',
    //   read: false,
    //   write: false,
    //   draw: false,
    //   sp: false,
    // };
    // push('/gamemode');
    // // push('/gamemode/single');
    // console.log('nal else ', props.child);
  };
render(){
  return (
  
      
      <div>
        <Row  className="rectangle125-box">
          <Col className="your-mission rectangle125">
            <h1>Your Mission</h1>
            <Row className="rectangle12B5 read-button-font">
              {
                // Number when button not clicked
                // or Check mark when clicked
              }
              <Col className="gamemodebtncolclass">
                <button onClick={(e) =>{
                  this.props.sread(e);
                }} id="mission-read-button">1</button>
                <p className="read-button-font">Read</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button onClick={(e) =>{
                  this.props.sread(e);
                }} id="mission-write-button">2</button>
                <p className="read-button-font">Write</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button onClick={(e) =>{
                  this.props.sread(e);
                }}  id="mission-draw-button">3</button>
                <p className="read-button-font">Draw</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      
  
  );
}
}
// export default Thrashbar;
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Thrashbar);
// export default connect()(Thrashbar);
