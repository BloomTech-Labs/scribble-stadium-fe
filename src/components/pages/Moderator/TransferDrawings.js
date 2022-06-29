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
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setVisible(false);
    }, 3000);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const handleFlag = () => {
    setVisible(false);
  };

  const columns = [
    {
      // title: 'Full Name',
      dataIndex: 'title',
      fixed: 'left',
    },
    {
      // title: 'Column 1',
      dataIndex: 'description',
      width: 500,
      // key: '1',
      fixed: 'left',
    },
    {
      // title: 'Action',
      // key: 'operation',
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
          // showSearch
          style={{ width: 826 }}
        />
        <Modal
          visible={visible}
          title="Title"
          onOk={handleOk}
          onCancel={handleCancel}
          onFlag={handleFlag}
          footer={[
            <Button key="back" onClick={handleCancel}>
              Return
            </Button>,
            <Button key="back" onClick={handleFlag}>
              Return
            </Button>,
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              Submit
            </Button>,
            <Button
              key="link"
              // href="https://google.com"
              type="primary"
              loading={loading}
              onClick={handleOk}
            >
              FLAG
            </Button>,
          ]}
        >
          <p>Approve or Flag</p>
        </Modal>
      </Space>
    </>
  );
};

export default TransferDrawings;
