// TEMPORARY - REMOVED useEffect, useState while not in use. Replace when useEffect block is needed
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Image } from 'antd';
import { Provider } from 'react-redux';
// TEMPORARY - COMMENTED OUT axios while not in use. Replace when useEffect block is needed
// import axios from 'axios';

// Placeholder CropCloud to render in case endpoints do not get finished in time
import { placeholderCloud } from './data';

export default function CropCloud() {
  // Sets our baseurl to the API from DS to generate the base64 encoded crop cloud

  // TEMPORARY - COMMENTED OUT baseURL while not in use. Uncomment when useEffect block is needed
  const baseURL = 'placeholder';
  // TEMPORARY - COMMENTED OUT cloudImg useState while not in use. Uncomment when useEffect block is needed
  const [cloudImg, setCloudImg] = useState(null);

  // Placeholder API Call to get the CropCloud once the endpoint is working
  // useEffect(() =>{
  //     const getCropCloud = () =>{
  //         axios.get(baseURL)
  //         .then((res) =>{
  //             setCloudImg(res.data)
  //         })
  //         .catch((err) =>{
  //             console.dir(err)
  //         })
  //     }
  //     getCropCloud()
  // }, [])

  return (
    <div
      className="cropcloud"
      data-testid="cropcloud appears at appropriate times on menu"
    >
      {/* The first portion of the "src" code is a built in method for decoding images, just change the file type for different img types */}
      <div className="crop-cloud-container">
        <img
          className={'cropcloudimage'}
          alt={'cropcloud'} // please add descriptive text to the alt tag
          src={`data:image/png;base64, ${placeholderCloud.data}`}
          alt="Using a child's handwritten words"
        />
      </div>
    </div>
  );
}
