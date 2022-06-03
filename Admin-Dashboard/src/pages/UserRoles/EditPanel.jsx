import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import Notifications from "../../components/Notifications";

const EditPanel = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [panelHead, setPanelHead] = useState("");
  const [member1, setMember1] = useState("");
  const [member2, setMember2] = useState("");
  const [extraMember, setExtraMember] = useState("");

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  let navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    let mounted = true;

    fetch(`http://localhost:5000/panel/getOnePanel/${id}`)
      .then((res) => res.json())

      .then((panel) => {
        if (mounted) {
          setName(panel.name);

          setDescription(panel.description);

          setPanelHead(panel.panelHead);

          setMember1(panel.member1);

          setMember2(panel.member2);

          setExtraMember(panel.extraMember);
        }
      });

    return () => (mounted = false);
  }, [id]);

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

  const submitHandler = (event) => {
    event.preventDefault();

    const data = {
      name,
      description,
      panelHead,
      member1,
      member2,
      extraMember,
    };

    axios
      .patch(`http://localhost:5000/panel/updatePanel/${id}`, data)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Panel Updated Successfully!",
          type: "success",
        });
        setTimeout(() => navigate("/userRoles"), 2000);
        console.log(data);
      })
      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Updating Panel",
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
      <div className="view-group-container" style={{ marginTop: "-25px" }}>
        <div className="user">
          <div className="userTitleContainer">
            <h1 className="userTitle" style={{ fontWeight: "200" }}>
              Update Panel Members
            </h1>
          </div>
          <div className="userContainer">
            <div
              className="userShow"
              style={{ backgroundColor: "white", borderRadius: "25px" }}
            >
              <span className="userShowTitle">Panel Name</span>
              <br />
              <span
                className="userShowUserTitle"
                style={{
                  fontWeight: "600",
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}
              >
                {name}
              </span>
              <br />
              <br />
              <span className="userShowTitle">Description</span>
              <br />
              <span
                className="userShowUserTitle"
                style={{
                  fontWeight: "600",
                  fontFamily: "monospace",
                  fontSize: "16px",
                }}
              >
                {description}
              </span>
              <div className="userShowBottom">
                <span className="userShowTitle">Panel Head</span>
                <div className="userShowTop">
                  <img
                    src={
                      panelHead.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div
                    className="userShowTopTitle"
                    style={{
                      fontWeight: "600",
                      fontFamily: "monospace",
                      fontSize: "16px",
                    }}
                  >
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
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div
                    className="userShowTopTitle"
                    style={{
                      fontWeight: "600",
                      fontFamily: "monospace",
                      fontSize: "16px",
                    }}
                  >
                    <span className="userShowUsername">{member1.name}</span>
                    <span className="userShowUserTitle">{member1.email}</span>
                  </div>
                </div>

                <div className="userShowTop">
                  <img
                    src={
                      member2.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div
                    className="userShowTopTitle"
                    style={{
                      fontWeight: "600",
                      fontFamily: "monospace",
                      fontSize: "16px",
                    }}
                  >
                    <span className="userShowUsername">{member2.name}</span>
                    <span className="userShowUserTitle">{member2.email}</span>
                  </div>
                </div>
                {/* Extra Member */}

                {extraMember ? (
                  <div className="userShowTop">
                    <img
                      src={
                        extraMember.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                      }
                      alt=""
                      className="userShowImg"
                    />
                    <div
                      className="userShowTopTitle"
                      style={{
                        fontWeight: "600",
                        fontFamily: "monospace",
                        fontSize: "16px",
                      }}
                    >
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
                Update Panel Details
              </span>
              <form className="userUpdateForm">
                <div className="userUpdateLeft" style={{ marginRight: "20px" }}>
                  <div className="userUpdateItem">
                    <label>Panel Name</label>
                    <input
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Description</label>
                    <textarea
                      type="text"
                      placeholder=""
                      className="userUpdateInput"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Head</label>
                    <select
                      className="userUpdateInput"
                      value={panelHead.id}
                      onChange={(e) => panelHeadClickHandler(e.target.value)}
                    >
                      <option disabled>Select Panel head</option>
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
                      value={member1.id}
                      onChange={(e) => member1ClickHandler(e.target.value)}
                    >
                      <option disabled>Select Panel Member</option>
                      {staff.map((staff) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Panel Member 2</label>
                    <select
                      className="userUpdateInput"
                      value={member2.id}
                      onChange={(e) => member2ClickHandler(e.target.value)}
                    >
                      <option disabled>Select Panel Member</option>
                      {staff.map((staff) => (
                        <option value={staff._id}>{staff.name}</option>
                      ))}
                    </select>
                  </div>
                  <div className="userUpdateItem">
                    <label>Additional Panel Member</label>
                    <select
                      className="userUpdateInput"
                      value={extraMember.id}
                      onChange={(e) => extraMemberClickHandler(e.target.value)}
                    >
                      <option>Select Additional Panel Member</option>
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
                onClick={submitHandler}
              >
                Update
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Notifications notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default EditPanel;
