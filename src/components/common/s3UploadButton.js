import React from 'react';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { postNewUpload } from '../../api';

export default function S3UploadButton() {
  const [file, setFile] = React.useState('');
  const [url, setUrl] = React.useState('');
  const { user } = useAuth0();

  const fileSelected = e => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setUrl(URL.createObjectURL(selectedFile));
    console.log('file', selectedFile);
  };

  const handleUpload = e => {
    e.preventDefault();
    // Split the filename to get the name and type
    let fileParts = file.name.split('.');
    let fileName = fileParts[0];
    let fileType = fileParts[1];
    console.log('Preparing the upload', fileName, fileType);
    postNewUpload(user, {
      fileName: fileName,
      fileType: fileType,
    })
      .then(response => {
        let returnData = response.data.data.returnData;
        let signedRequest = returnData.signedRequest;
        let url = returnData.url;
        setUrl({ url: url });
        console.log('Received a signed request ' + signedRequest);

        let options = {
          headers: {
            'Content-Type': fileType,
          },
        };
        axios
          .put(signedRequest, file, options)
          .then(result => {
            console.log('Response from s3', result);
            this.setState({ success: true });
          })
          .catch(error => {
            alert('ERROR Put' + JSON.stringify(error));
          });
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
      <img src={url}></img>
      <p>{url}</p>
    </>
  );
}
