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

componentDidUpdate(prevProps,prevState) {
  // Typical usage (don't forget to compare props):
  if (this.props.child.gamemode.read !== prevProps.child.gamemode.read) {
     prevProps.child.gamemode.read = this.props.child.gamemode.read;
    console.log('prevprop',prevProps,this.props.child.gamemode.read);

  }

  if (this.state.child.gamemode.read !== prevState.child.gamemode.read) {
      prevState.child.gamemode.read = this.state.child.gamemode.read;
    console.log('prevstate',prevState.child.gamemode.read+'prevethis'+this.props.child.gamemode.read);
    // this.forceUpdate();
  }
}

// componentDidMount() {
//   console.log('inthrash');
//   if (
    
//     this.props.child.gamemode.read != null  
//   ) {
//     console.log('inthrash',this.state.child.gamemode.read);
//     this.setState({ child:{
//       gamemode:{
//         mode: 'single',
//         read: this.props.child.gamemode.read,
//         write: false,
//         draw: false,
//         sp: true
//       }
//     }  });
//     console.log('inthrash',this.state.child.gamemode.read);
//   }else{
//     console.log('inthrash');
//     this.setState( { child:{
//       gamemode:{
//         mode: 'single',
//         read: false,
//         write: false,
//         draw: false,
//         sp: true
//       }
//     }  });
//   }
//   // at this point you can query the browser DOM
//   // (even tho most of the time you DONT want to do this)
//   // componentdidmount 
// }



// componentDidUpdate(prevProps, prevState) {
//   // similar to useEffect
//   // we have to manually check for certain props or state changes
//   // no dependency array in cDU :(
//     console.log('inthrash');
//   if (
    
//     prevProps.child.gamemode !== this.state.child.gamemode
//   ) {
//     console.log('inthrash');
//     this.setState({ child:{
//       gamemode:{
//         mode: 'single',
//         read: false,
//         write: false,
//         draw: false,
//         sp: true
//       }
//     }  });
//   }else{
//     console.log('inthrash');
//     // this.setState( { child:{
//     //   gamemode:{
//     //     mode: null,
//     //     read: null,
//     //     write: null,
//     //     draw: null,
//     //     sp: null
//     //   }
//     // }  });
//   }
// }


   singled(e){

      this.props.sread(e);
    
     
     

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
              <Col 
                 className="gamemodebtncolclass">
                <button  
                style={  this.state.child.gamemode.read || this.props.child.gamemode.read ? {opacity:'40% '} :  {opacity:'100% '}} 
                
                  onClick={(e) =>{
                 
                    this.singled(e) ;
                
                  }}
              
                  
                
                

                 id="mission-read-button" >1</button>
                <p className="read-button-font">Read</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button onClick={(e) =>{
                  this.singled(e);
                }} id="mission-write-button">2</button>
                <p className="read-button-font">Write</p>
              </Col>
              <Col className="gamemodebtncolclass">
                <button onClick={(e) =>{
                  this.singled(e);
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

