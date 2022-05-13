import React, { useRef, useState } from "react";
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
import Notifications from "../../components/Notifications";

const UploadMarkingScheme = () => {
  const [topic, setTopic] = useState("");
  const [description, setDescription] = useState("");
  const [doc, setDoc] = useState(null);

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  function sendData(e) {
    e.preventDefault();

    const fileName = new Date().getTime() + doc;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, doc);

    //Upload the file to Firebase Storage
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
        getDownloadURL(uploadTask.snapshot.ref).then((doc) => {
          console.log("File available at :", doc);

          const newMarkingScheme = {
            topic,
            description,
            doc,
          };
          console.log(newMarkingScheme);
          axios
            .post(
              "http://localhost:5000/marking/addMarkingScheme",
              newMarkingScheme
            )
            .then(() => {
              setNotify({
                isOpen: true,
                message: "Marking Scheme Uploaded Successfully!",
                type: "success",
              });
              setTimeout(() => navigate("/markings"), 2000);
            })
            .catch((res) => {
              setNotify({
                isOpen: true,
                message: "Error adding Marking Scheme",
                type: "error",
              });
            });
        });
      }
    );
  }

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
      <Notifications notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default UploadMarkingScheme;
