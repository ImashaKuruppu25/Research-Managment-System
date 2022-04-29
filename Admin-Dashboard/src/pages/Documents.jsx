import { Button } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "react-material-file-upload";

const Documents = () => {
  const [files, setFiles] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(files);
  };

  return (
    <div className="file-upload-container">
      <div className="App">
        <h1>Upload Documents</h1>
        <br />
        <FileUpload
          value={files}
          onChange={setFiles}
          style={{ border: "1px solid", height: "50px", width: "50px" }}
        />
        <br />
        <Button variant="contained" type="submit" onSubmit={submitHandler}>
          Submit Document
        </Button>
      </div>
    </div>
  );
};

export default Documents;
