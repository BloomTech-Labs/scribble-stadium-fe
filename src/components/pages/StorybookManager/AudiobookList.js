import React, { useState, useEffect } from 'react';
import { Skeleton, Table, Space, Button } from 'antd';
import { useStore } from './Context/StorybookManager.Context';
import { showModalAddAudiobook } from './Context/StorybookManager.Actions';

const sampleData = [
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
];

const createTableColumns = render => {
  return [
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
      render: render,
    },
  ];
};

const AudiobookList = () => {
  const [{ listView }, dispatch] = useStore();

  const [audiobookList, setAudiobookList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);

  useEffect(() => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList(sampleData);
      setLoadingData(false);
    }, 1000);
  }, []);

  const handleDelete = id => {
    setLoadingData(true);
    setTimeout(() => {
      setAudiobookList(audiobookList.filter(book => book.id !== id));
      setLoadingData(false);
    }, 1000);
  };

  const handleShowAddAudiobook = () => {
    const showModal = showModalAddAudiobook();
    console.log(dispatch);
    dispatch(showModal);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <h2>Audiobook {listView} List</h2>
        <Button onClick={handleShowAddAudiobook}>Add Audiobook</Button>
      </div>
      {loadingData
        ? [1, 2, 3, 4, 5].map((_, i) => {
            return <Skeleton key={`skeleton-${i}`} active={loadingData} />;
          })
        : listView === 'Titles' && (
            <Table
              columns={createTableColumns(book => (
                <Space size="middle">
                  <a onClick={() => handleDelete(book.id)}>Delete</a>
                  <a>Edit</a>
                </Space>
              ))}
              dataSource={audiobookList}
            />
          )}
    </>
  );
};

export default AudiobookList;
