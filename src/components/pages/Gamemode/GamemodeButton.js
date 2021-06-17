import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import YourMissionComp from './YourMissionComp';

const GamemodeButton = ({ ...props }) => {
  const { push, location } = useHistory();
  const [rwd, setsRwd] = useState({
    read:
      props.child.gamemode.read !== null ? props.child.gamemode.read : false,
    write:
      props.child.gamemode.write !== null ? props.child.gamemode.write : false,
    draw:
      props.child.gamemode.draw !== null ? props.child.gamemode.draw : false,
    mode:
      props.child.gamemode.mode !== null ? props.child.gamemode.mode : 'single',
  });
  const [sP, setsP] = useState(true);

  useEffect(
    rwd => {
      const inofit = rwd => {
        if (props.child.gamemode.sp === false) {
          setsP(false);
          setsRwd({
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
            mode:
              props.child.gamemode.mode !== null
                ? props.child.gamemode.mode
                : false,
          });
        } else {
          setsRwd({
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
            mode:
              props.child.gamemode.mode !== null
                ? props.child.gamemode.mode
                : false,
          });
          console.log('gamebutton useeffect rwd', rwd);
          setsP(true);
        }
      };
      inofit(rwd);
    },
    [sP, props.child]
  );

  const sread = e => {
    console.log('nal flying from sread gamemodebutton component', e[3]);
    const ff = e.target.textContent;
    console.log(ff + rwd.read + rwd.write + rwd.draw + 'gamemodebuttonsread');

    switch (ff) {
      case '1': {
        setsRwd({
          read: rwd !== null ? !rwd.read : false,
          write: rwd.write !== null ? rwd.write : false,
          draw: rwd.draw !== null ? rwd.draw : false,
        });
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

        console.log('nalread gamemodebutton ', props.child.gamemode);
        break;
      }
      case '2': {
        setsRwd({
          read: rwd.read !== null ? rwd.read : false,
          write: rwd.write !== null ? !rwd.write : false,
          draw: rwd.draw !== null ? rwd.draw : false,
        });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read ? rwd.read : false,
          write:
            props.child.gamemode.write !== null &&
            props.child.gamemode.draw === false
              ? !props.child.gamemode.write
              : false,
          draw: rwd.draw ? rwd.draw : false,
          sp: true,
        };
        console.log('nalwrirte ', props.child.gamemode);

        break;
      }
      case '3': {
        setsRwd({
          read: rwd.read !== null ? rwd.read : false,
          write: rwd.write !== null ? rwd.write : false,
          draw: rwd.draw !== null ? !rwd.draw : false,
        });
        props.child.gamemode = {
          mode: 'single',
          read: rwd.read ? rwd.read : false,
          write: rwd.write ? rwd.write : false,
          draw:
            props.child.gamemode.draw !== null &&
            props.child.gamemode.write === false
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
    // Basic initiatinos when they are undefined &
    // is for the I'd rather draw or write text
    /*
if (props.child.gamemode.draw === undefined) {
      props.child.gamemode.draw = false;
      setsRwd({ draw: false });
    } else if (!props.child.gamemode.draw) {
      props.child.gamemode.draw = !props.child.gamemode.draw;
      setsRwd({ draw: !props.child.gamemode.draw });
    } else {
      props.child.gamemode.draw = false;
      setsRwd({ draw: false });
    }
    if (props.child.gamemode.read === undefined) {
      props.child.gamemode.read = false;
      setsRwd({ read: false });
    }
    if (props.child.gamemode.write) {
      setsRwd({ write: !props.child.gamemode.write });
      props.child.gamemode.write = !props.child.gamemode.write;
    } else if (!props.child.gamemode.write) {
      props.child.gamemode.write = !props.child.gamemode.write;
      setsRwd({ write: !props.child.gamemode.write });
    } else {
      props.child.gamemode.write = false;
      setsRwd({ write: false });
    }
*/

    // Draw
    if (props.child.gamemode.draw === undefined) {
      props.child.gamemode.draw = false;
      setsRwd({ draw: false });
    } else if (
      props.child.gamemode.draw !== null &&
      props.child.gamemode.draw === false &&
      rwd.draw !== null
    ) {
      props.child.gamemode.draw = !props.child.gamemode.draw;
      setsRwd({ draw: !rwd.draw });
    } else {
      props.child.gamemode.draw = false;
      setsRwd({ draw: false });
    }

    // Read
    if (props.child.gamemode.read === undefined) {
      props.child.gamemode.read = false;
      setsRwd({ read: false });
    } else if (
      props.child.gamemode.read !== null &&
      props.child.gamemode.read === false &&
      rwd.read !== null
    ) {
      props.child.gamemode.read = !props.child.gamemode.read;
      setsRwd({ read: !rwd.read });
    } else {
      props.child.gamemode.read = false;
      setsRwd({ read: false });
    }

    // Write
    if (props.child.gamemode.write === undefined) {
      setsRwd({ write: !props.child.gamemode.write });
      props.child.gamemode.write = !props.child.gamemode.write;
    } else if (
      props.child.gamemode.write !== null &&
      props.child.gamemode.write === false &&
      rwd.write !== null
    ) {
      props.child.gamemode.write = !props.child.gamemode.write;
      setsRwd({ write: !rwd.write });
    } else {
      props.child.gamemode.write = false;
      setsRwd({ write: false });
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
