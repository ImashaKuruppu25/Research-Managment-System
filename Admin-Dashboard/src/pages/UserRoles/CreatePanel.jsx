import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const CreatePanel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [panelHead, setPanelHead] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [extraMember, setExtraMember] = useState("");

  const [staff, setStaff] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

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
        alert("Panel Created Successfully!");
      })
      .catch((res) => {
        alert("Panel Creation Adding Failed!");
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
                    <span className="userShowUsername">{panelHead}</span>
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
                    <span className="userShowUsername">{member1}</span>
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
                    <span className="userShowUsername">{member2}</span>
                    <span className="userShowUserTitle">{member2.email}</span>
                  </div>
                </div>
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
                      onChange={(e) => setPanelHead(e.target.value)}
                    >
                      <option> - Select Panel Head - </option>
                      {staff.map((staff) => (
                        <option>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="userUpdateRight">
                  <div className="userUpdateItem">
                    <label>Panel Member 1</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => setMember1(e.target.value)}
                    >
                      <option> - Select Panel Member - </option>

                      {staff.map((staff, id) => (
                        <option key={id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Member 2</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => setMember2(e.target.value)}
                    >
                      <option> - Select Panel Member - </option>
                      {staff.map((staff) => (
                        <option>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Additional Panel Member ( Optional )</label>
                    <select
                      className="userUpdateInput"
                      onChange={(e) => setExtraMember(e.target.value)}
                    >
                      <option> - Select Additional Panel Member - </option>
                      {staff.map((staff) => (
                        <option>{staff.name}</option>
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
    </div>
  );
};

export default CreatePanel;
