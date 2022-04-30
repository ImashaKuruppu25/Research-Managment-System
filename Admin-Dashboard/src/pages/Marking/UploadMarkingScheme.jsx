import React from "react";
import { MdCloudUpload } from "react-icons/md";
import { Link } from "react-router-dom";
import "./UploadMarkingScheme.scss";

const UploadMarkingScheme = () => {
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

          <form class="addCountryForm">
            <div class="topic">Upload Marking Scheme</div>
            <div class="input-box">
              <input type="text" required />
              <label>Topic Name</label>
            </div>
            <div class="input-box">
              <textarea type="text" required />
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
              Upload Marking Here <MdCloudUpload style={{ color: "red" }} />
            </span>
            <div class="input-box">
              <input
                type="file"
                required
                style={{ padding: "10px 20px" }}
                autoFocus={true}
              />
              {/* <label>Upload Marking</label> */}
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
