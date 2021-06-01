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

  useEffect(
    rwd => {
      const inofit = rwd => {
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
      inofit(rwd);
    },
    [sP, props.child]
  );

  const sread = e => {
    const ff = e.target.textContent;
    console.log(ff + rwd.read + rwd.write + rwd.draw + 'gamemodebuttonsread');

    switch (ff) {
      case '1': {
        setsRwd({ read: !rwd.read, write: rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read:
            props.child.gamemode.read !== null
              ? !props.child.gamemode.read
              : false,
          write: rwd.write ? rwd.write : false,
          draw: rwd.draw ? rwd.draw : false,
          sp: true,
        };

        console.log('nalread ', props.child.gamemode);
        break;
      }
      case '2': {
        setsRwd({ read: rwd.read, write: !rwd.write, draw: rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read ? rwd.read : false,
          write:
            props.child.gamemode.write !== null
              ? !props.child.gamemode.write
              : false,
          draw: rwd.draw ? rwd.draw : false,
          sp: true,
        };
        console.log('nalwrirte ', props.child.gamemode);

        break;
      }
      case '3': {
        setsRwd({ read: rwd.read, write: rwd.write, draw: !rwd.draw });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read ? rwd.read : false,
          write: rwd.write ? rwd.write : false,
          draw:
            props.child.gamemode.draw !== null
              ? !props.child.gamemode.draw
              : false,
          sp: true,
        };
        console.log('naldraw ', props.child.gamemode);
        break;
      }
      case 'Play Boss': {
        setsRwd({
          read: rwd.read !== null ? rwd.read : false,
          write: rwd.write !== null ? rwd.write : false,
          draw: rwd.draw !== null ? rwd.draw : false,
          mode: 'boss',
        });
        props.child.gamemode = {
          mode: 'boss',
          read:
            props.child.gamemode.read !== null
              ? props.child.gamemode.read
              : false,
          write:
            props.child.gamemode.write !== null
              ? props.child.gamemode.write
              : false,
          draw:
            props.child.gamemode.draw !== null
              ? props.child.gamemode.draw
              : false,
          sp: true,
        };
        push('/gamemode/boss');
        console.log('nal boss ', props.child.gamemode);
        break;
      }
      default: {
        props.child.gamemode = {
          mode: 'select',
          read:
            props.child.gamemode.read !== null
              ? props.child.gamemode.read
              : false,
          write:
            props.child.gamemode.write !== null
              ? props.child.gamemode.write
              : false,
          draw:
            props.child.gamemode.draw !== null
              ? props.child.gamemode.draw
              : false,
          sp: false,
        };
        console.log('naldefault ', props.child.gamemode);
        break;
      }
    }
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
      <YourMissionComp {...props} pdw={pdw} sread={sread} />
    </>
  );
};
export default connect(
  state => ({
    child: state.child,
  }),
  {}
)(GamemodeButton);
