import React, { useState } from "react";
import { MdCloudUpload } from "react-icons/md";
import "./UploadMarkingScheme.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";

const UploadMarkingScheme = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [doc, setDoc] = useState(null);

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const fileName = new Date().getTime() + doc.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, doc);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
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
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
        });
      }
    );

    const newMarkingScheme = {
      topic,
      description,
      doc,
    };

    axios
      .post("http://localhost:5000/marking/addMarkingScheme", newMarkingScheme)
      .then(() => {
        alert("Marking Scheme Added Successfully!");
        navigate("/markings");
      })
      .catch((res) => {
        alert("Marking Scheme Adding Failed!");
      });
  }

  console.log(doc);

  return (
    <div className="container-uploader">
      <div class="container">
        <div class="content">
          <div class="image-box">
            <img
              src="https://res.cloudinary.com/desnqqj6a/image/upload/v1651325583/PngItem_2423244_peg5tm.png"
              alt=""
            />
          </div>

          <form class="addCountryForm" onSubmit={sendData}>
            <div class="topic">Upload Marking Scheme</div>
            <div class="input-box">
              <input
                type="text"
                required
                onChange={(e) => {
                  setTopic(e.target.value);
                }}
              />
              <label>Topic Name</label>
            </div>
            <div class="input-box">
              <textarea
                type="text"
                required
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
              <label>Description | Guidelines</label>
            </div>
            <br />
            <span
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontWeight: "200",
              }}
            >
              Upload Marking Doc Here <MdCloudUpload style={{ color: "red" }} />
            </span>
            <div class="input-box">
              <input
                type="file"
                required
                style={{ padding: "10px 20px" }}
                autoFocus={true}
                onChange={(e) => {
                  setDoc(e.target.value);
                }}
              />
            </div>

            <div class="input-box">
              <input type="submit" value="Upload" />
            </div>

            <br />
            <br />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMarkingScheme;
