import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Notifications from "../../components/Notifications";

const CreatePanel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [panelHead, setPanelHead] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [extraMember, setExtraMember] = useState("");

  const [staff, setStaff] = useState([
    {
      _id: "",
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    function getStaffList() {
      axios

        .get("http://localhost:5000/panel/allStaff/")

        .then((res) => {
          console.log(res.data);

          setStaff(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getStaffList();
  }, []);

  //OnSubmit send Data
  const sendData = (e) => {
    e.preventDefault();

    const newPanel = {
      name: name,
      description: description,
      panelHead: panelHead,
      member1: member1,
      member2: member2,
      extraMember: extraMember,
    };
    console.log(newPanel);
    axios
      .post("http://localhost:5000/panel/addPanel", newPanel)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Panel Added Successfully !",
          type: "success",
        });
        setTimeout(() => navigate("/userRoles"), 2000);
      })
      .catch((res) => {
        setNotify({
          isOpen: true,
          message: "Error adding Panel ",
          type: "error",
        });
      });
  };

  const panelHeadClickHandler = (id) => {
    console.log(id);
    const selectedStaff = staff.find(
      (staffMemberPanelHead) => staffMemberPanelHead._id === id
    );
    setPanelHead({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  const member1ClickHandler = (id) => {
    console.log(id);

    const selectedStaff = staff.find((staffMember1) => staffMember1._id === id);
    console.log(selectedStaff);
    setMember1({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  const member2ClickHandler = (id) => {
    console.log(id);
    const selectedStaff = staff.find((staffMember2) => staffMember2._id === id);
    setMember2({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  const extraMemberClickHandler = (id) => {
    const selectedStaff = staff.find(
      (staffMemberExtra) => staffMemberExtra._id === id
    );
    setExtraMember({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  return (
    <div>
      {" "}
      <div className="view-group-container" style={{ marginTop: "-25px" }}>
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle" style={{ fontWeight: "200" }}>
              Assign Panel Members
            </h1>
          </div>
          <div className="userContainer">
            <div
              className="userShow"
              style={{ backgroundColor: "white", borderRadius: "25px" }}
            >
              <span className="userShowTitle">Panel Name</span>
              <br />
              <span className="userShowUserTitle">{name}</span>
              <br />
              <br />
              <span className="userShowTitle">Description</span>
              <br />
              <span className="userShowUserTitle">{description}</span>
              <div className="userShowBottom">
                <span className="userShowTitle">Panel Head</span>
                <div className="userShowTop">
                  <img
                    src={
                      panelHead.image ||
                      "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{panelHead.name}</span>
                    <span className="userShowUserTitle">{panelHead.email}</span>
                  </div>
                </div>
              </div>

              <div className="userShowBottom">
                <span className="userShowTitle">Panel Members</span>
                <div className="userShowTop">
                  <img
                    src={
                      member1.image ||
                      "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{member1.name}</span>
                    <span className="userShowUserTitle">{member1.email}</span>
                  </div>
                </div>

                <div className="userShowTop">
                  <img
                    src={
                      member2.image ||
                      "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">{member2.name}</span>
                    <span className="userShowUserTitle">{member2.email}</span>
                  </div>
                </div>

                {extraMember ? (
                  <div className="userShowTop">
                    <img
                      src={
                        extraMember.image ||
                        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png"
                      }
                      alt=""
                      className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                      <span className="userShowUsername">
                        {extraMember.name}
                      </span>
                      <span className="userShowUserTitle">
                        {extraMember.email}
                      </span>
                    </div>
                  </div>
                ) : null}
              </div>
            </div>

            <div
              className="userUpdate"
              style={{ backgroundColor: "white", borderRadius: "25px" }}
            >
              <span className="userUpdateTitle" style={{ fontWeight: "400" }}>
                Assign Panel Members to Panel
              </span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft" style={{ marginRight: "20px" }}>
                  <div className="userUpdateItem">
                    <label>Panel Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Description</label>
                    <textarea
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Head</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => panelHeadClickHandler(e.target.value)}
                    >
                      <option> - Select Panel Head - </option>
                      {staff.map((staff) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateItem">
                    <label>Panel Member 1</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => member1ClickHandler(e.target.value)}
                    >
                      <option> - Select Panel Member - </option>

                      {staff.map((staff) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Member 2</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => member2ClickHandler(e.target.value)}
                    >
                      <option> - Select Panel Member - </option>
                      {staff.map((staff, id) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Additional Panel Member ( Optional )</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => extraMemberClickHandler(e.target.value)}
                    >
                      <option> - Select Additional Panel Member - </option>
                      {staff.map((staff) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
              <br />
              <Button
                type="submit"
                className="userUpdateButton"
                onClick={sendData}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Notifications notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default CreatePanel;
