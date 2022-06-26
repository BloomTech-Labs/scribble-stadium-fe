import React from 'react';

import { postNewUpload } from '../../../api';

export default function S3UploadButton() {
  const [file, setFile] = React.useState('');

  const fileSelected = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    console.log('file', selectedFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    postNewUpload(file)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        alert('ERROR API Axios' + JSON.stringify(error));
      });
  };

  return (
    <>
      <h2>S3 Upload Button</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept="image/*" onChange={fileSelected} />
        <button type="submit" onClick={handleUpload}>
          Upload
        </button>
      </form>
    </>
  );
}
