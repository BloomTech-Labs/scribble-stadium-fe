import React, { useState, useEffect } from 'react';
import { Button, Skeleton, Table, Space, Row, Col } from 'antd';

const { Column } = Table;

const AudiobookList = ({ listView = 'Titles' }) => {
  const columns = [
    {
      title: ' Track Name',
      dataIndex: 'trackName',
    },
    {
      title: 'Length',
      dataIndex: 'length',
      sorter: (a, b) => a.length - b.length,
    },
    {
      title: 'Chapter',
      dataIndex: 'chapter',
    },
    {
      title: 'Episode',
      dataIndex: 'episode',
    },
    {
      title: 'Story',
      dataIndex: 'story',
    },
    {
      title: 'Author',
      dataIndex: 'author',
    },
    {
      title: 'Action',
      key: 'action',
      render: book => (
        <Space size="middle">
          <a onClick={() => handleDelete(book.id)}>Delete</a>
          <a>More Actions</a>
        </Space>
      ),
    },
  ];
  const [audiobookList, setAudiobookList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList([
        {
          id: 1,
          trackName: "Harry Potter and the Philosopher's Stone - Chapter 1",
          length: '10:29',
          chapter: 1,
          episode: 1,
          author: 'J. K. Rowling',
          story: "Harry Potter and the Philosopher's Stone",
        },
        {
          id: 2,
          trackName: "Harry Potter and the Philosopher's Stone - Chapter 2",
          length: '15:29',
          chapter: 2,
          episode: 1,
          author: 'J. K. Rowling',
          story: "Harry Potter and the Philosopher's Stone",
        },
        {
          id: 3,
          trackName: "Harry Potter and the Philosopher's Stone - Chapter 3",
          length: '30:29',
          chapter: 3,
          episode: 2,
          author: 'J. K. Rowling',
          story: "Harry Potter and the Philosopher's Stone",
        },
      ]);
      setLoadingData(false);
    }, 2000);
  }, []);

  const handleDelete = id => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList(audiobookList.filter(book => book.id !== id));
      setLoadingData(false);
    }, 2000);
  };

  return (
    <>
      <Row justify="space-between">
        <Col span={20}>
          <h2>Audiobook {listView} List</h2>
        </Col>
        <Col span={4}>
          <Button>Add Audio Book</Button>
        </Col>
      </Row>
      {loadingData
        ? [1, 2, 3, 4, 5].map((_, i) => {
            return <Skeleton key={`skeleton-${i}`} active={loadingData} />;
          })
        : listView === 'Titles' && (
            <Table columns={columns} dataSource={audiobookList} />
          )}
    </>
  );
};

export default AudiobookList;
