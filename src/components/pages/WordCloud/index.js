import React, { useState } from 'react';
// import axios from 'axios';
import WordCloud from './WordCloud';
import CropCloud from './CropCloud';

function RenderWordCloud() {
  const [cloud, setCloud] = useState('cropcloud');
  const [wordCloudData] = useState(null);

  // the endpoint used for this function is currently non-functional

  // useEffect(() => {
  //   axios
  //     .get(
  //       'http://labspt21benv5.eba-nmemcxkm.us-east-1.elasticbeanstalk.com/storytext'
  //     )
  //     .then(res => setWordCloudData(res.data))
  //     .catch(err => console.log(err));
  // }, []);

  function handleButtonPress(value) {
    value === 1 ? setCloud('cropcloud') : setCloud('wordcloud');
  }

  return (
    <div className="wordCloudContainer">
      <div className="centerer">
        <div className="switcher">
          <input
            type="radio"
            name="render"
            value={1}
            id="cropcloud"
            className="switcher__input switcher__input--cc"
            onChange={handleButtonPress}
            //checked={cloud === 'cropcloud'}
            defaultChecked={true}
          />
          <label htmlFor="cropcloud" className="switcher__label">
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
          <label htmlFor="wordcloud" className="switcher__label">
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
