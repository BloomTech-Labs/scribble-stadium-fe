import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';
import ReactAudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import 'antd/dist/antd.css';
import './h5audiostyle.css';

const RenderAudioBookContainer = () => {
  return (
    <>
      <Header displayMenu={true} />
      <ReactAudioPlayer />
    </>
  );
};

export default RenderAudioBookContainer;
