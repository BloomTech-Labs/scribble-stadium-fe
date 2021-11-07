import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

import { Header } from '../../common';
import ChildFooter from '../../common/ChildFooter';
import FaceoffContent from './FaceoffContent';
import { InstructionsModal } from '../../common';
import { modalInstructions } from '../../../utils/helpers';

const RenderMatchUp = props => {
  const { push } = useHistory();
  const [faceoffs, setFaceoffs] = useState([]);
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <>
      <Header
        displayMenu={true}
        title="The Matchup"
        versus={true}
        pointsToWin={true}
        votesRemaining={true}
      />

         <ChildFooter />
    </>
  );
};

export default RenderMatchUp;
