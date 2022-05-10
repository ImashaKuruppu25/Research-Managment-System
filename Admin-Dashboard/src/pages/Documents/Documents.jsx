import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import "./Documents.scss";
import { FcDocument } from "react-icons/fc";
import axios from "axios";

const Documents = () => {
  const [templates, setTemplates] = useState([
    {
      documentName: "",
      document: "",
    },
  ]);

  const [document, setDocument] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(document);
  };

  useEffect(() => {
    function getTemplatesAndDocs() {
      axios

        .get("http://localhost:5000/doc/getAllDocuments")

        .then((res) => {
          console.log(res.data);

          setTemplates(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getTemplatesAndDocs();
  }, []);

  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:5000/doc/deleteDocument/${_id}`)

      .then((res) => {
        alert("Document Deleted!");

        window.location.reload();
      })

      .catch();
  }

  return (
    <div className="file-upload-container">
      <div className="document-upload-container">
        <h1 style={{ fontWeight: "200" }}>Upload Templates / Documents</h1>
        <br />
        <TextField fullWidth label="Document Name" id="fullWidth" />
        <br />
        <br />
        <FileUpload
          value={document}
          onChange={setDocument}
          style={{ border: "1px solid", height: "50px", width: "50px" }}
        />
        <br />
        <Button variant="contained" type="submit" onSubmit={submitHandler}>
          Submit Document
        </Button>
      </div>

      {/* --------------- Display Uploaded documents ------------------ */}
      <div className="document-view-container">
        <h1 style={{ fontWeight: "200" }}>Uploaded Documents</h1>
        <div className="uploaded-item">
          {templates.map((item) => (
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
                  onClick={() => window.open(item.document)}
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
                  {item.documentName.slice(0, 20).concat("...")}
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
                    onClick={() => deleteHandler(item._id)}
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
