import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Placeholder CropCloud to render in case endpoints do not get finished in time
import { placeholderCloud } from './data';

export default function CropCloud() {
  // Sets our baseurl to the API from DS to generate the base64 encoded crop cloud
  const baseURL = 'placeholder';
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
    <div className="cropcloud">
      {/* The first portion of the "src" code is a built in method for decoding images, just change the file type for different img types */}
      <img
        className={'cropcloudimage'}
        src={`data:image/png;base64, ${placeholderCloud.data}`}
      />
    </div>
  );
}
