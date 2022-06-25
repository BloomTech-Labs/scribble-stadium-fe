import { Transfer, Space } from 'antd';
import { useState } from 'react';

// Dummy my-data
const mockData = Array.from({
  length: 20,
}).map((_, i) => ({
  key: i.toString(),
  title: `Drawing${i + 1}`,
  description: `description of drawing${i + 1}`,
}));
const initialTargetKeys = mockData
  .filter(item => Number(item.key) > 20)
  .map(item => item.key);

const TransferDrawings = () => {
  const [targetKeys, setTargetKeys] = useState(initialTargetKeys);

  const [selectedKeys, setSelectedKeys] = useState([]);
  const [flaggedKeys, setFlaggedKeys] = useState([]);

  const onChange = (nextTargetKeys, direction, moveKeys) => {
    console.log('targetKeys:', nextTargetKeys);
    console.log('direction:', direction);
    console.log('moveKeys:', moveKeys);
    setTargetKeys(nextTargetKeys);
  };

  const onSelectChange = (sourceSelectedKeys, targetSelectedKeys) => {
    console.log('sourceSelectedKeys:', sourceSelectedKeys);
    console.log('targetSelectedKeys:', targetSelectedKeys);
    setSelectedKeys([...sourceSelectedKeys, ...targetSelectedKeys]);
  };

  const onFlag = sourceSelectedKeys => {
    setFlaggedKeys([...sourceSelectedKeys]);
  };
  const onScroll = (direction, e) => {
    console.log('direction:', direction);
    console.log('target:', e.target);
  };

  return (
    <>
      <Space
      // direction="vertical"
      // style={{
      //   height: 800,
      // }}
      >
        <Transfer
          status="approved"
          showSearch
          dataSource={mockData}
          titles={['Drawings', 'Approved']}
          targetKeys={targetKeys}
          selectedKeys={selectedKeys}
          onChange={onChange}
          onSelectChange={onSelectChange}
          onScroll={onScroll}
          render={item => item.title}
        />
        <Transfer
          status="warning"
          showSearch
          dataSource={mockData}
          titles={['Flagged']}
          targetKeys={targetKeys}
          flaggedKeys={flaggedKeys}
          onChange={onChange}
          onFlag={onFlag}
          onScroll={onScroll}
          render={item => item.title}
        />
      </Space>
    </>
  );
};

export default TransferDrawings;
