import { Space, Button, Modal, Table } from 'antd';
import { useState } from 'react';

// Dummy my-data
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `Drawing${i + 1}`,
  description: `description of drawing${i + 1}`,
}));

const TransferDrawings = () => {
  // const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    // setLoading(true);
    setTimeout(() => {
      // setLoading(false);
      setVisible(false);
    }, 1000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleFlag = () => {
    setVisible(true);
  };

  const columns = [
    {
      // title: 'Full Name',
      dataIndex: 'title',
      width: 150,
    },
    {
      // title: 'Column 1',
      dataIndex: 'description',
      width: 500,
      // key: '1',
    },
    {
      // title: 'Action',
      // key: 'operation',
      width: 100,
      render: () => (
        { showModal },
        (
          <Button type="primary" onClick={showModal}>
            View
          </Button>
        )
      ),
    },
  ];

  return (
    <>
      <Space direction="vertical">
        <Table
          columns={columns}
          dataSource={mockData}
          // render={item => item.title}
          // status="approved"
          style={{ width: 834 }}
        />
        <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          onFlag={handleFlag}
          footer={[
            <Button key="approved" onClick={handleOk}>
              Approve
            </Button>,
            <Button key="flag" onClick={handleFlag}>
              Flag
            </Button>,
          ]}
        >
          <p>Approve or Flag this drawing</p>
        </Modal>
      </Space>
    </>
  );
};

export default TransferDrawings;
