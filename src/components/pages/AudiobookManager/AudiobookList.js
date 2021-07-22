import React, { useState, useEffect } from 'react';
import { Skeleton } from 'antd';

const AudiobookList = ({ listView = 'Collections' }) => {
  const [audiobookList, setAudiobookList] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  useEffect(() => {
    setLoadingData(true);
    setAudiobookList(['1', '2', '3', '4', '5']);
  }, []);
  return (
    <>
      <h2>Audiobook {listView} List</h2>
      {audiobookList.map((_, i) => {
        return <Skeleton key={`skeleton-${i}`} active={loadingData} />;
      })}
    </>
  );
};

export default AudiobookList;
