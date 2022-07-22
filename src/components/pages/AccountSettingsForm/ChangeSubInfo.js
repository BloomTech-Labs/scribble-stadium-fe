import React, { useState } from 'react';
import { Modal, Card, Row, Col } from 'antd';

export default function ChangeSubinfoModal(props) {
  const [subModalVisible, setSubModalVisible] = useState(false);

  const handleExit = () => {
    props.setSubModalVisible(false);
  };

  const cancel = () => {
    props.setSubModalVisible(false);
  };

  return (
    <Modal
      className="subInfoModal"
      visible={props.subModalVisible}
      onCancel={cancel}
      onOk={handleExit}
      footer={null}
      bodyStyle={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#b5b5b5',
      }}
    >
      <div className="sub-content" style={{ width: '100%' }}>
        <h1 className="edit-sub-title">Edit Subscription Information</h1>
        <div className="card-row">
          <Row>
            <Col className="ss-home">
              <Card
                className="home-card"
                title="Story Squad for home"
                //onClick={{}}
              >
                card information
              </Card>
            </Col>

            <Col className="ss-class">
              <Card
                className=""
                title="Story Squad for the classroom"
                //onClick={{}}
              >
                card info
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </Modal>
  );
}
