import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';
import ReactAudioPlayer from 'react-h5-audio-player';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import 'react-h5-audio-player/lib/styles.css';
import 'antd/dist/antd.css';
import './rhap-style-override.css';

const RenderAudioBookContainer = () => {
  return (
    <>
      <Header displayMenu={true} />
      <ReactAudioPlayer
        //src={soundfile}
        style={{ width: '60%' }}
        customAdditionalControls={[]} //removes loop
        customVolumeControls={[]} //removes volume
        customIcons={{
          //insert antd icons here for each control
          play: <PlayCircleOutlined />,
          pause: <PauseCircleOutlined />,
        }}
      />
    </>
  );
};

export default RenderAudioBookContainer;
