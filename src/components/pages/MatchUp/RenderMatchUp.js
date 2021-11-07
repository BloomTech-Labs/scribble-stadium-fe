import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderMatchUp = props => {
  const { push } = useHistory();

  return (
    <>
      <Header displayMenu={true} title="Scribble Stadium" />
      

      <div className="matchup-container"></div>
      <ChildFooter/>
    </>
  );
};

export default RenderMatchUp;
