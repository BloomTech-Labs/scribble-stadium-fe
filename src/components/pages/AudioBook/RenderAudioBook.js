import React, { useState } from 'react';
import { Header } from '../../common';
import { Row, Col } from 'antd';
import { useHistory } from 'react-router-dom';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderAudioBookContainer = () => {
  return (
    <>
      <Header displayMenu={true} />
    </>
  );
};

export default RenderAudioBookContainer;
