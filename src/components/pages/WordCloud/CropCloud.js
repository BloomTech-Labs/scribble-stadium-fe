// TEMPORARY - REMOVED useEffect, useState while not in use. Replace when useEffect block is needed
import React from 'react';
<<<<<<< HEAD
import axios from 'axios';
=======
// import axios from 'axios';
>>>>>>> 8976c403e5815cc9f34ae4a9028471e5a7296398

// Placeholder CropCloud to render in case endpoints do not get finished in time
import { placeholderCloud } from './data';

export default function CropCloud() {
  // Sets our baseurl to the API from DS to generate the base64 encoded 
<<<<<<< HEAD
const baseURL = 'placeholder';
  // TEMPORARY - COMMENTED OUT cloudImg useState while not in use. Uncomment when useEffect block is needed
const [cloudImg, setCloudImg] = useState(null);

=======
  // const baseURL = 'placeholder';
  // TEMPORARY - COMMENTED OUT cloudImg useState while not in use. Uncomment when useEffect block is needed
  // const [cloudImg, setCloudImg] = useState(null);
>>>>>>> 8976c403e5815cc9f34ae4a9028471e5a7296398

  // Placeholder API Call to get the CropCloud once the endpoint is working
  // useEffect(() =>{
  //    const getCropCloud = () =>{
//           axios.get(baseURL)
//           .then((res) =>{
//               setCloudImg(res.data)
//           })
//           .catch((err) =>{
//             console.log(err)
//         })
//     }
//    getCropCloud()
// }, [])

  return (
    <div className="cropcloud">
      {/* The first portion of the "src" code is a built in method for decoding images, just change the file type for different img types */}
      <div className="crop-cloud-container">
        <img
          className={'cropcloudimage'}
          src={`data:image/png;base64, ${placeholderCloud.data}`}
          alt="Using a child's handwritten words"
        />
      </div>
    </div>
  );
}
