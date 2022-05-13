import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  MdLocationSearching,
  MdMailOutline,
  MdPermIdentity,
  MdPhoneAndroid,
  MdPublish,
} from "react-icons/md";
import { HiUserGroup } from "react-icons/hi";
import { useNavigate, useParams } from "react-router-dom";
import "./UpdateUser.scss";
import Notifications from "../../components/Notifications";

const UpdateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState("");

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    updateUserDetails();
  }, []);

  function updateUserDetails() {
    let mounted = true;

    fetch(`http://localhost:5000/admin/adminGetOneUser/${id}`)
      .then((res) => res.json())

      .then((user) => {
        if (mounted) {
          setName(user.name);

          setEmail(user.email);

          setPhone(user.phone);

          setRole(user.role);

          setImage(user.image);
        }
      });

    return () => (mounted = false);
  }

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      name,
      email,
      phone,
      role,
      image,
    };

    axios
      .patch(`http://localhost:5000/admin/adminUpdateUser/${id}`, data)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "User Updated Successfully!",
          type: "success",
        });
        setTimeout(() => navigate("/users"), 2000);
      })
      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Updating User",
          type: "error",
        });
      });
  };

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
                src={
                  image ||
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                }
                alt=""
                className="userShowImg"
              />
              <div className="userShowTopTitle">
                <span className="userShowUsername">{name}</span>
              </div>
            </div>
            <div className="userShowBottom">
              <span className="userShowTitle">Account Details</span>
              <div className="userShowInfo">
                <MdPermIdentity className="userShowIcon" />
                <span className="userShowInfoTitle">{name}</span>
              </div>
              <div className="userShowInfo">
                <MdMailOutline className="userShowIcon" />
                <span className="userShowInfoTitle">{email}</span>
              </div>
              <span className="userShowTitle">Contact Details</span>
              <div className="userShowInfo">
                <MdPhoneAndroid className="userShowIcon" />
                <span className="userShowInfoTitle">{phone}</span>
              </div>

              <div className="userShowInfo">
                <MdLocationSearching className="userShowIcon" />
                <span className="userShowInfoTitle">
                  Department of Software Engineering | SLIIT
                </span>
              </div>

              <span className="userShowTitle">User Role</span>
              <div className="userShowInfo">
                <HiUserGroup className="userShowIcon" />
                <span className="userShowInfoTitle">{role}</span>
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
            <form className="userUpdateForm" onSubmit={submitHandler}>
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Full Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>

                <div className="userUpdateItem">
                  <label>Email</label>
                  <input
                    type="email"
                    placeholder=""
                    className="userUpdateInput"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Phone</label>
                  <input
                    type="text"
                    placeholder="071 707 3719"
                    className="userUpdateInput"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Role</label>
                  <select
                    name="role"
                    id=""
                    className="userUpdateInput"
                    value={role}
                    onChange={(event) => setRole(event.target.value)}
                  >
                    <option>ADMIN</option>
                    <option>STUDENT</option>
                    <option>STAFF</option>
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img
                    className="userUpdateImg"
                    src={
                      image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    onChange={(event) => setImage(event.target.value)}
                  />
                  <label htmlFor="file">
                    <MdPublish className="userUpdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button type="submit" className="userUpdateButton">
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Notifications notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default UpdateUser;
