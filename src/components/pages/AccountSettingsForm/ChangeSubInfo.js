import React, { useState } from 'react';
import { Modal, Card, Row, Col } from 'antd';

export default function ChangeSubinfoModal(props) {
  const [visible, setVisible] = useState(false);

  const handleExit = () => {
    props.setVisible(false);
    setVisible(true);
  };

  const cancel = () => {
    props.setVisible(false);
  };

  return (
    <Modal
      className="subInfoModal"
      visible={props.visible}
      width={'99%'}
      onCancel={cancel}
      onOk={handleExit}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <h1 className="edit-sub-title">Edit Subscription Information</h1>
      <div className="card-row">
        <Row>
          <Col>
            <Card
              className="ss-home"
              title="Story Squad for home"
              //onClick={}
            >
              card information
            </Card>
          </Col>

          <Col>
            <Card
              className="ss-class"
              title="Story Squad for the classroom"
              //onClick={}
            >
              card info
            </Card>
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
