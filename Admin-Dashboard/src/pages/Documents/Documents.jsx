import { Button, Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import FileUpload from "react-material-file-upload";
import "./Documents.scss";
import { FcDocument } from "react-icons/fc";
import axios from "axios";
import Notifications from "../../components/Notifications";
import ConfirmDialog from "../../components/ConfirmDialog";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";

const Documents = () => {
  const [templates, setTemplates] = useState([
    {
      documentName: "",
      document: "",
    },
  ]);

  // const [documentName, setDocumentName] = useState("");
  // const [document, setDocument] = useState("");

  const [document, setDocument] = useState();
  const [documentName, setDocumentName] = useState("");

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  //Confirm Dialog
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  //Fetch all templates
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

  //Delete Document
  function deleteHandler(_id) {
    setConfirmDialog({
      ...ConfirmDialog,
      isOpen: false,
    });
    axios
      .delete(`http://localhost:5000/doc/deleteDocument/${_id}`)

      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Document Deleted!",
          type: "success",
        });

        setTimeout(window.location.reload.bind(window.location), 2000);
      })

      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Deleting Document",
          type: "error",
        });
      });
  }

  //Add Document
  function addDocument(e) {
    e.preventDefault();

    const fileName = new Date().getTime().toString() + document.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, document);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + " % done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((document) => {
          console.log("File available at :", document);

          const newDocument = {
            documentName,
            document,
          };
          console.log(newDocument);
          axios
            .post("http://localhost:5000/doc/addDocument", newDocument)
            .then((res) => {
              setNotify({
                isOpen: true,
                message: "Document Uploaded Successfully!",
                type: "success",
              });
              setTimeout(window.location.reload.bind(window.location), 2000);
            })
            .catch((res) => {
              setNotify({
                isOpen: true,
                message: "Error adding Document",
                type: "error",
              });
            });
        });
      }
    );
  }

  return (
    <div className="file-upload-container">
      <div className="document-upload-container">
        <h1 style={{ fontWeight: "200" }}>Upload Templates / Documents</h1>
        <br />
        <TextField
          fullWidth
          label="Document Name"
          id="fullWidth"
          required
          onChange={(e) => {
            setDocumentName(e.target.value);
          }}
        />
        <br />
        <br />
        <TextField
          fullWidth
          // label="Document Name"
          id="fullWidth"
          required
          autoFocus={true}
          type="file"
          onChange={(e) => {
            setDocument(e.target.files[0]);
          }}
        />
        {/* <FileUpload
          value={document}
          required
          // onChange={(e) => {
          //   setDocument(e.target.files[0]);
          // }}
          onChange={setDocument}
          style={{ border: "1px solid", height: "50px", width: "50px" }}
        /> */}
        <br />
        <br />

        <Button variant="contained" type="submit" onClick={addDocument}>
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
                    onClick={() => {
                      setConfirmDialog({
                        isOpen: true,
                        title: "Delete Document",
                        subTitle:
                          "Are you sure you want to delete this document?",
                        onConfirm: () => {
                          deleteHandler(item._id);
                        },
                      });
                    }}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Notifications notify={notify} setNotify={setNotify} />
          <ConfirmDialog
            confirmDialog={confirmDialog}
            setConfirmDialog={setConfirmDialog}
          />
        </div>
      </div>
    </div>
  );
};

export default Documents;
