import React, { useState } from 'react';
import { Header } from '../../common';
import { useHistory } from 'react-router-dom';
import { Button } from 'antd';
import ReactAudioPlayer from 'react-h5-audio-player';
import { PlayCircleOutlined, PauseCircleOutlined } from '@ant-design/icons';
import 'react-h5-audio-player/lib/styles.css';
import 'antd/dist/antd.css';
import './rhap-style-override.css';
import StoryViewer from './StoryViewer';

const RenderAudioBookContainer = () => {
  const { push } = useHistory();

  const doneReading = e => {
    push('/child/draw');
  };

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
      <StoryViewer />
      <div className="done-reading-container">
        <Button className="done-reading" type="button" onClick={doneReading}>
          I’m awesome, I’m done reading!
        </Button>
      </div>
    </>
  );
};

export default RenderAudioBookContainer;
