import React from 'react';
import axios from 'axios';

export default function S3UploadButton() {
  const [file, setFile] = React.useState('');
  const [url, setUrl] = React.useState('');

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
    console.log('Preparing the upload');
    axios
      .post('http://localhost:8000/sign_s3', {
        fileName: fileName,
        fileType: fileType,
      })
      .then(response => {
        var returnData = response.data.data.returnData;
        var signedRequest = returnData.signedRequest;
        var url = returnData.url;
        this.setState({ url: url });
        console.log('Recieved a signed request ' + signedRequest);

        var options = {
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
            alert('ERROR ' + JSON.stringify(error));
          });
      })
      .catch(error => {
        alert(JSON.stringify(error));
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
