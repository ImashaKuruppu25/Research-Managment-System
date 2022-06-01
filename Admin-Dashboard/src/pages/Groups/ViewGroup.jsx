import React, { useEffect, useState, Component, Fragment } from "react";
import "./ViewGroup.scss";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import makeanimated from "react-select/animated";
import Notifications from "../../components/Notifications";

const ViewGroup = () => {
  const studentsOpt = [
    {
      id: 1,
      name: "Hasith Deminda",
      image:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png",
    },
    {
      id: 2,
      name: "Imasha Maduwantha",
      image:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650173777/f-img-1_kzjtft.jpg",
    },
    {
      id: 3,
      name: "Student 3",
      image:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650539455/SeekPng.com_blue-circle-icon-png_4287240_quhjnc.png",
    },
  ];
  const { id } = useParams();

  const [groupName, setGroupName] = useState("");
  const [researchTopic, setResearchTopic] = useState("");
  const [member1Id, setMember1Id] = useState("");
  const [member2Id, setMember2Id] = useState("");
  const [member3Id, setMember3Id] = useState("");
  const [member4Id, setMember4Id] = useState("");
  const [extraMemberId, setExtraMemberId] = useState("");
  const [assignedSupervisor, setAssignedSupervisor] = useState("");
  const [assignedCoSupervisor, setAssignedCoSupervisor] = useState("");
  const [assignedPanel, setAssignedPanel] = useState("");

  const [selectedOption, setSelectedOption] = useState("");

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    let mounted = true;

    fetch(`http://localhost:5000/group/getOneGroup/${id}`)
      .then((res) => res.json())

      .then((group) => {
        if (mounted) {
          setGroupName(group.groupName);
          setResearchTopic(group.researchTopic);
          setMember1Id(group.member1Id);
          setMember2Id(group.member2Id);
          setMember3Id(group.member3Id);
          setMember4Id(group.member4Id);
          setExtraMemberId(group.extraMemberId);
          setAssignedSupervisor(group.assignedSupervisor);
          setAssignedCoSupervisor(group.assignedCoSupervisor);
          setAssignedPanel(group.assignedPanel);
        }
      });

    return () => (mounted = false);
  }, [id]);

  //Use State for getting all the staff members
  const [staff, setStaff] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

  //Use State for getting all the studets
  const [students, setStudents] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

  //Use State for getting all the panels
  const [panel, setPanel] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

  //Get all the staff members
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

  //Get all the students
  useEffect(() => {
    function getStudentList() {
      axios

        .get("http://localhost:5000/panel/allStudents/")

        .then((res) => {
          console.log(res.data);

          setStudents(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getStudentList();
  }, []);

  //Get all the panels
  useEffect(() => {
    function getPanelList() {
      axios

        .get("http://localhost:5000/panel/getAllPanels/")

        .then((res) => {
          console.log(res.data);

          setPanel(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getPanelList();
  }, []);

  //Send updated data to the server
  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      groupName,
      researchTopic,
      member1Id,
      member2Id,
      member3Id,
      member4Id,
      extraMemberId,
      assignedSupervisor,
      assignedCoSupervisor,
      assignedPanel,
    };

    axios
      .patch(`http://localhost:5000/group/updateGroup/${id}`, data)
      .then((res) => {
        setNotify({
          isOpen: true,
          message: "Group Details Updated Successfully !",
          type: "success",
        });
        setTimeout(() => navigate("/groups"), 2000);
        console.log(data);
      })
      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Updating Group Details",
          type: "error",
        });
      });
  };

  //Selector
  const member1ClickHandler = (id) => {
    const selectedStudent = students.find((stuExtra) => stuExtra._id === id);
    setMember1Id({
      id: selectedStudent._id,
      name: selectedStudent.name,
      email: selectedStudent.email,
      image: selectedStudent.image,
    });
  };
  const member2ClickHandler = (id) => {
    const selectedStudent = students.find((stuExtra) => stuExtra._id === id);
    setMember2Id({
      id: selectedStudent._id,
      name: selectedStudent.name,
      email: selectedStudent.email,
      image: selectedStudent.image,
    });
  };
  const member3ClickHandler = (id) => {
    const selectedStudent = students.find((stuExtra) => stuExtra._id === id);
    setMember3Id({
      id: selectedStudent._id,
      name: selectedStudent.name,
      email: selectedStudent.email,
      image: selectedStudent.image,
    });
  };
  const member4ClickHandler = (id) => {
    const selectedStudent = students.find((stuExtra) => stuExtra._id === id);
    setMember4Id({
      id: selectedStudent._id,
      name: selectedStudent.name,
      email: selectedStudent.email,
      image: selectedStudent.image,
    });
  };

  const extraMemberClickHandler = (id) => {
    const selectedStudent = students.find((stuExtra) => stuExtra._id === id);
    setExtraMemberId({
      id: selectedStudent._id,
      name: selectedStudent.name,
      email: selectedStudent.email,
      image: selectedStudent.image,
    });
  };

  const supervisorClickHandler = (id) => {
    const selectedStaff = staff.find((supervisor) => supervisor._id === id);
    console.log(selectedStaff);
    setAssignedSupervisor({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  const coSupervisorClickHandler = (id) => {
    const selectedStaff = staff.find((cosupervisor) => cosupervisor._id === id);
    console.log(selectedStaff);
    setAssignedCoSupervisor({
      id: selectedStaff._id,
      name: selectedStaff.name,
      email: selectedStaff.email,
      image: selectedStaff.image,
    });
  };

  const panelClickHandler = (id) => {
    const selectedPanel = staff.find((cosupervisor) => cosupervisor._id === id);
    setAssignedPanel({
      id: selectedPanel._id,
      name: selectedPanel.name,
      panelHead: selectedPanel.panelHead,
      member1: selectedPanel.member1,
      member2: selectedPanel.member2,
    });
  };

  return (
    <div className="view-group-container" style={{ marginTop: "-25px" }}>
      <div className="user">
        <div className="userTitleContainer">
          <h1 className="userTitle" style={{ fontWeight: "200" }}>
            Group Details
          </h1>
        </div>
        <div className="userContainer">
          <div
            className="userShow"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <span className="userShowTitle">Research Topic</span>
            <br />
            <span className="userShowUserTitle">{researchTopic}</span>
            <div className="userShowBottom">
              <span className="userShowTitle">Group Members</span>
              <div className="userShowTop">
                <img
                  src={
                    member1Id.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                  }
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {member1Id.name || "🛑 Not Assigned"}
                  </span>
                  <span className="userShowUserTitle">{member1Id.email}</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src={
                    member2Id.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                  }
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {member2Id.name || "🛑 Not Assigned"}
                  </span>
                  <span className="userShowUserTitle">{member2Id.email}</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src={
                    member3Id.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                  }
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {member3Id.name || "🛑 Not Assigned"}
                  </span>
                  <span className="userShowUserTitle">{member3Id.email}</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src={
                    member4Id.image ||
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                  }
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">
                    {member4Id.name || "🛑 Not Assigned"}
                  </span>
                  <span className="userShowUserTitle">{member4Id.email}</span>
                </div>
              </div>

              {extraMemberId ? (
                <div className="userShowTop">
                  <img
                    src={
                      extraMemberId.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    className="userShowImg"
                  />
                  <div className="userShowTopTitle">
                    <span className="userShowUsername">
                      {extraMemberId.name}
                    </span>
                    <span className="userShowUserTitle">
                      {extraMemberId.email}
                    </span>
                  </div>
                </div>
              ) : null}
            </div>

            <div className="userShowBottom">
              {assignedSupervisor ? (
                <>
                  <span className="userShowTitle">Supervisor</span>
                  <div className="userShowTop">
                    <img
                      src={
                        assignedSupervisor.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                      }
                      alt=""
                      className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                      <span className="userShowUsername">
                        {assignedSupervisor.name}
                      </span>
                      <span className="userShowUserTitle">
                        {assignedSupervisor.email}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}

              {assignedCoSupervisor ? (
                <>
                  <span className="userShowTitle">Co - Supervisor</span>
                  <div className="userShowTop">
                    <img
                      src={
                        assignedCoSupervisor.image ||
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                      }
                      alt=""
                      className="userShowImg"
                    />
                    <div className="userShowTopTitle">
                      <span className="userShowUsername">
                        {assignedCoSupervisor.name}
                      </span>
                      <span className="userShowUserTitle">
                        {assignedCoSupervisor.email}
                      </span>
                    </div>
                  </div>
                </>
              ) : null}

              {assignedPanel ? (
                <>
                  <span className="userShowTitle">Assigned Panel</span>
                  <div className="userShowTop">
                    <div className="userShowTopTitle">
                      <span
                        className="userShowUsername"
                        style={{ marginLeft: "-20px" }}
                      >
                        {assignedPanel.name}
                      </span>
                      <div
                        className="panelList"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          margin: "10px",
                        }}
                      >
                        <span className="showpanelNames">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU"
                            alt=""
                          />{" "}
                          {assignedPanel.panelHead.name}
                        </span>
                        <span className="showpanelNames">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU"
                            alt=""
                          />{" "}
                          {assignedPanel.member1.name}
                        </span>
                        <span className="showpanelNames">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU"
                            alt=""
                          />{" "}
                          {assignedPanel.member2.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </>
              ) : null}
            </div>
          </div>

          <div
            className="userUpdate"
            style={{ backgroundColor: "white", borderRadius: "25px" }}
          >
            <span className="userUpdateTitle" style={{ fontWeight: "400" }}>
              Update Group Details
            </span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft" style={{ marginRight: "20px" }}>
                <div className="userUpdateItem">
                  <label>Group Name</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    disabled
                    value={groupName}
                    onChange={(e) => setGroupName(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Research Topic</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    value={researchTopic}
                    onChange={(e) => setResearchTopic(e.target.value)}
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 1</label>
                  <select
                    className="userUpdateInput"
                    value={member1Id.id}
                    onChange={(e) => member1ClickHandler(e.target.value)}
                  >
                    <option>Select Student</option>
                    {students.map((student) => (
                      <option value={student._id}>{student.name}</option>
                    ))}
                  </select>
                  {/* <Select
                    isSearchable={true}
                    options={staff}
                    value={member1Id.name}
                    onChange={(e) => setMember1Id(e.target.value)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,

                        primary: "transparent",
                        primary25: "lightblue",
                      },
                    })}
                    components={makeanimated()}
                    formatOptionLabel={(member1Id) => (
                      <div
                        className="select-option"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "0.8rem",
                        }}
                      >
                        <img
                          src={
                            member1Id.image ||
                            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU"
                          }
                          alt="option-image"
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ color: "black" }}>{member1Id.name}</span>
                      </div>
                    )}
                  /> */}
                </div>
                <div className="userUpdateItem">
                  <label>Member 2</label>
                  <select
                    className="userUpdateInput"
                    value={member2Id.id}
                    onChange={(e) => member2ClickHandler(e.target.value)}
                  >
                    <option>Select Student</option>
                    {students.map((student) => (
                      <option value={student._id}>{student.name}</option>
                    ))}
                  </select>
                  {/* <Select
                    isSearchable={true}
                    options={studentsOpt}
                    onChange={(e) => setMember1Id(e.target.value)}
                    theme={(theme) => ({
                      ...theme,
                      colors: {
                        ...theme.colors,

                        primary: "transparent",
                        primary25: "lightblue",
                      },
                    })}
                    components={makeanimated()}
                    formatOptionLabel={(studentsOpt) => (
                      <div
                        className="select-option"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          gap: "0.8rem",
                        }}
                      >
                        <img
                          src={studentsOpt.image}
                          alt="option-image"
                          style={{
                            height: "30px",
                            width: "30px",
                            borderRadius: "50%",
                          }}
                        />
                        <span style={{ color: "black" }}>
                          {studentsOpt.name}
                        </span>
                      </div>
                    )}
                  /> */}
                </div>
                <div className="userUpdateItem">
                  <label>Member 3</label>
                  <select
                    className="userUpdateInput"
                    value={member3Id.id}
                    onChange={(e) => member3ClickHandler(e.target.value)}
                  >
                    <option>Select Student</option>
                    {students.map((student) => (
                      <option value={student._id}>{student.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateItem">
                  <label>Member 4</label>
                  <select
                    className="userUpdateInput"
                    value={member4Id.id}
                    onChange={(e) => member4ClickHandler(e.target.value)}
                  >
                    <option>Select Student</option>
                    {students.map((student) => (
                      <option value={student._id}>{student.name}</option>
                    ))}
                  </select>
                </div>
                {extraMemberId ? (
                  <div className="userUpdateItem">
                    <label>Member 5</label>
                    <select
                      className="userUpdateInput"
                      value={extraMemberId.id}
                      onChange={(e) => extraMemberClickHandler(e.target.value)}
                    >
                      {students.map((student) => (
                        <option value={student._id}>{student.name}</option>
                      ))}
                    </select>
                  </div>
                ) : null}
                <div className="userUpdateItem">
                  <label>Supervisor</label>
                  <select
                    className="userUpdateInput"
                    value={assignedSupervisor.id}
                    onChange={(e) => supervisorClickHandler(e.target.value)}
                  >
                    <option disabled>Select Supervisor</option>
                    {staff.map((staff) => (
                      <option value={staff._id}>{staff.name}</option>
                    ))}
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label>Co - Supervisor</label>
                  <select
                    className="userUpdateInput"
                    value={assignedCoSupervisor.id}
                    onChange={(e) => coSupervisorClickHandler(e.target.value)}
                  >
                    <option>Select Co-Supervisor</option>
                    {staff.map((staff) => (
                      <option value={staff._id}>{staff.name}</option>
                    ))}
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label>Panel</label>
                  <select
                    className="userUpdateInput"
                    value={panel.id}
                    onChange={(e) => panelClickHandler(e.target.value)}
                  >
                    <option>Select Panel</option>
                    {panel.map((panelList) => (
                      <option value={panelList._id}>{panelList.name}</option>
                    ))}
                  </select>
                </div>
              </div>
            </form>
            <br />
            <Button className="userUpdateButton" onClick={submitHandler}>
              Update
            </Button>
          </div>
        </div>
      </div>
      <Notifications notify={notify} setNotify={setNotify} />
    </div>
  );
};

export default ViewGroup;
