import React, { useState, useEffect, Component } from 'react';

import { Row, Col, Button } from 'antd';
import { connect } from 'react-redux';


  



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

export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(Thrashbar);

