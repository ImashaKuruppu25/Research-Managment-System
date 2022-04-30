import React from "react";
import {
  MdLocationSearching,
  MdMailOutline,
  MdPermIdentity,
  MdPhoneAndroid,
  MdPublish,
} from "react-icons/md";

import "./UpdateUser.scss";

const UpdateUser = () => {
  return (
    <div className="update-user-container">
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle" style={{ fontWeight: "200" }}>
            Edit User Details
          </h1>
        </div>
        <div className="userContainer">
          <div
            className="userShow"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <div className="userShowTop">
              <img
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png"
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">Hasith Deminda</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <MdPermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">Hasith Deminda</span>
              </div>
              <div className="userShowInfo">
                <MdMailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">
                  demindahasith@gmail.com
                </span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <MdPhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">0717073719</span>
              </div>

              <div className="userShowInfo">
                <MdLocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  Department of Software Engineering | SLIIT
                </span>
              </div>
            </div>
          </div>
          <div
            className="userUpdate"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <span className="userUpdateTitle" style={{ fontWeight: "400" }}>
              Update User Details
            </span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="071 707 3719"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Role</label>
                  <select name="role" id="" className="userUpdateInput">
                    <option value="">Select Role</option>
                    <option value="">ADMIN</option>
                    <option value="">STUDENT</option>
                    <option value="">SUPERVISOR</option>
                    <option value="">STAFF</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src="https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png"
                    alt=""
                  />
                  <label htmlFor="file">
                    <MdPublish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateUser;
