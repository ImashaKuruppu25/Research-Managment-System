import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import FileUpload from "react-material-file-upload";
import "./Documents.scss";
import { FcDocument } from "react-icons/fc";
import { data } from "../../dummy";

const Documents = () => {
  const [files, setFiles] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(files);
  };

  return (
    <div className="file-upload-container">
      <div className="document-upload-container">
        <h1 style={{ fontWeight: "200" }}>Upload Templates / Documents</h1>
        <br />
        <TextField fullWidth label="Document Name" id="fullWidth" />
        <br />
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

      <div className="document-view-container">
        <h1 style={{ fontWeight: "200" }}>Uploaded Documents</h1>
        <div className="uploaded-item">
          {data.map((item) => (
            <div className="uploaded-item-container">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FcDocument
                  className="uploaded-item-icon"
                  style={{ cursor: "pointer" }}
                  onClick={() => window.open(item.file)}
                />
              </div>
              <div className="uploaded-item-info">
                <h1
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "200",
                    fontSize: "20px",
                  }}
                >
                  {item.name.slice(0, 20).concat("...")}
                </h1>

                <div
                  className="uploaded-item-download-btn"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    color="error"
                    style={{ marginTop: "25px", height: "30px" }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Documents;
