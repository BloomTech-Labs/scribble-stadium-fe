import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import YourMissionComp from './YourMissionComp';

const GamemodeButton = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read: false,
    write: false,
    draw: false,
    mode: 'single',
  });
  const [sP, setsP] = useState(true);

  useEffect(() => {
    const inofit = () => {
      if (props.child.gamemode.sp === false) {
        setsP(false);
        setsRwd({
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          mode: props.child.gamemode.mode,
        });
      } else {
        setsRwd({
          read: props.child.gamemode.read,
          write: props.child.gamemode.write,
          draw: props.child.gamemode.draw,
          mode: props.child.gamemode.mode,
        });
        console.log('readrwd', rwd);
        setsP(true);
      }
    };
    inofit();
  }, [sP, props.child]);

  const sread = e => {
    const ff = e.target.textContent;
    console.log(ff + rwd.read + rwd.write + rwd.draw + 'gamemodebuttonsread');

    switch (ff) {
      case '1': {
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
      case '2': {
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
      case '3': {
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
  };

  const singled = r => {
    // GOes back to previous menu
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

    console.log('nal gamemodebutton goback ', props.child);
  };

  const pdw = () => {
    if (props.child.gamemode.draw === undefined) {
      props.child.gamemode.draw = false;
      setsRwd({ draw: false });
    }
    if (props.child.gamemode.read === undefined) {
      props.child.gamemode.read = false;
      setsRwd({ read: false });
    }
    if (props.child.gamemode.write) {
      setsRwd({ rwd: !props.child.gamemode.write });
      props.child.gamemode.write = !props.child.gamemode.write;
    } else if (!props.child.gamemode.write) {
      props.child.gamemode.write = !props.child.gamemode.write;
      setsRwd({ rwd: !props.child.gamemode.write });
    } else {
      props.child.gamemode.write = false;
      setsRwd({ rwd: false });
    }

    console.log(props.child.gamemode);
  };
  return (
    <>
      {rwd.write ? (
        <YourMissionComp {...props} pdw={pdw} sread={sread} />
      ) : (
        <YourMissionComp {...props} pdw={pdw} sread={sread} />
      )}
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(GamemodeButton);
