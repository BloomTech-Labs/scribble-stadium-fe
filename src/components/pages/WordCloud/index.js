import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WordCloud from './WordCloud';
import CropCloud from './CropCloud';

function RenderWordCloud() {
  const [cloud, setCloud] = useState('cropcloud');
  const [wordCloudData, setWordCloudData] = useState(null);

  useEffect(() => {
    axios
      .get(
        'http://labspt21benv5.eba-nmemcxkm.us-east-1.elasticbeanstalk.com/storytext'
      )
      .then(res => setWordCloudData(res.data))
      .catch(err => console.log(err));
  }, []);

  function handleButtonPress(value) {
    value === 1 ? setCloud('cropcloud') : setCloud('wordcloud');
  }

  return (
    <div classNameName="wordCloudContainer">
      <div className="centerer">
        <div className="switcher">
          <input
            type="radio"
            name="render"
            value="Crop Cloud"
            id="cropcloud"
            className="switcher__input switcher__input--cc"
            onChange={() => handleButtonPress(1)}
            checked={cloud === 'cropcloud'}
            defaultChecked
          />
          <label for="cropcloud" className="switcher__label">
            Crop Cloud
          </label>

          <input
            type="radio"
            name="render"
            value="Word Cloud"
            id="wordcloud"
            className="switcher__input switcher__input--wc"
            onChange={() => handleButtonPress(2)}
            checked={cloud === 'wordcloud'}
          />
          <label for="wordcloud" className="switcher__label">
            Word Cloud
          </label>

          <span className="switcher__toggle"></span>
        </div>
      </div>
      {cloud === 'wordcloud' ? (
        <WordCloud data={wordCloudData} />
      ) : (
        <CropCloud />
      )}
    </div>
  );
}

export default RenderWordCloud;
