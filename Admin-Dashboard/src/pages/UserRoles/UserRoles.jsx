import React, { useEffect, useState } from "react";
import "./UserRoles.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { MdDelete, MdPersonAdd } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import Notifications from "../../components/Notifications";
import ConfirmDialog from "../../components/ConfirmDialog";

const UserRoles = () => {
  const [admin, setAdmin] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);
  const [staff, setStaff] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);
  const [students, setStudents] = useState([
    {
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
    },
  ]);

  const [panelDetails, setPanelDetails] = useState([
    {
      name: "",
      description: "",
      panelHead: "",
      member1: "",
      member2: "",
      extraMember: "",
    },
  ]);

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

  //useEffect to get userdata from database
  useEffect(() => {
    function getAdminList() {
      axios

        .get("http://localhost:5000/panel/allAdmins/")

        .then((res) => {
          console.log(res.data);

          setAdmin(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
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

    getAdminList();
    getStaffList();
    getStudentList();
  }, []);

  //useEffect to get paneldata from database
  useEffect(() => {
    function getAllPanels() {
      axios

        .get("http://localhost:5000/panel/getAllPanels/")

        .then((res) => {
          console.log(res.data);

          setPanelDetails(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getAllPanels();
  }, []);

  //Delete a panel
  function deleteHandler(_id) {
    setConfirmDialog({
      ...ConfirmDialog,
      isOpen: false,
    });
    axios
      .delete(`http://localhost:5000/panel/deletePanel/${_id}`)

      .then((res) => {
        setNotify({
          isOpen: true,
          message: "User Deleted!",
          type: "success",
        });

        setTimeout(window.location.reload.bind(window.location), 2000);
      })

      .catch((err) => {
        setNotify({
          isOpen: true,
          message: "Error Deleting User",
          type: "error",
        });
      });
  }

  return (
    <div className="userRoles-section">
      <div className="userRoles-container">
        <div className="section1">
          <div className="userRoles-card">
            <div className="userRoles-card-title">ADMIN LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              {admin.map((admin) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    margin: "10px 0px",
                  }}
                >
                  <img
                    src={
                      admin.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <h4
                    className="userRoles-card-description"
                    style={{ wordWrap: "wrap" }}
                  >
                    {admin.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="userRoles-card">
            <div className="userRoles-card-title">STAFF LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              {staff.map((staff) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    margin: "10px 0px",
                  }}
                >
                  <img
                    src={
                      staff.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <h4
                    className="userRoles-card-description"
                    style={{ wordWrap: "wrap" }}
                  >
                    {staff.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="userRoles-card">
            <div className="userRoles-card-title">STUDENT LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              {students.map((students) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "10px",
                    margin: "10px 0px",
                  }}
                >
                  <img
                    src={
                      students.image ||
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                    }
                    alt=""
                    style={{
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                    }}
                  />
                  <h4
                    className="userRoles-card-description"
                    style={{ wordWrap: "wrap" }}
                  >
                    {students.name}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Panel Details */}
      <div className="panel-members-list">
        <div
          className="panel-header"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <h1 style={{ fontWeight: "400" }}>Panels & Panel Members</h1>
          <Link to="/userRoles/createPanel">
            <button
              className="upload-marking"
              style={{ padding: "15px", maxWidth: "220px" }}
            >
              <MdPersonAdd style={{ fontSize: "24px" }} />
              <span>Assign Panel Members</span>
            </button>
          </Link>
        </div>

        {panelDetails.map((panel) => (
          <Accordion
            style={{
              margin: "20px 0px",
              borderRadius: "20px",
              padding: "15px",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography style={{ fontSize: "20px", fontWeight: "700" }}>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <span>{panel.name}</span>
                  <div
                    className="edit-delete"
                    style={{
                      display: "flex",
                      gap: "10px",
                      marginRight: "-1000px",
                    }}
                  >
                    <Link to={`/userRoles/edit/${panel._id}`}>
                      <FaEdit style={{ fontSize: "24px", color: "teal" }} />
                    </Link>

                    <MdDelete
                      style={{ fontSize: "24px", color: "red" }}
                      onClick={() => {
                        setConfirmDialog({
                          isOpen: true,
                          title: "Delete Panel!",
                          subTitle:
                            "Are you sure you want to delete this panel ?",
                          onConfirm: () => {
                            deleteHandler(panel._id);
                          },
                        });
                      }}
                    />
                  </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {panel.description}
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div
                    className="members"
                    style={{ margin: "20px 0px", maxWidth: "300px" }}
                  >
                    <span
                      className="userShowTitle"
                      style={{
                        color: "rgb(175, 170, 170)",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Panel Head
                    </span>
                    <div
                      className="member"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px 20px",
                        margin: "20px 0px",
                      }}
                    >
                      <img
                        src={
                          panel.panelHead.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                        }
                        alt=""
                        style={{
                          width: "60px",
                          height: "60px",
                          maxWidth: "60px",
                          maxHeight: "60px",
                          borderRadius: "50%",
                        }}
                      />
                      {panel.panelHead.name}
                    </div>

                    <span
                      className="userShowTitle"
                      style={{
                        color: "rgb(175, 170, 170)",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Panel Members
                    </span>
                    <div
                      className="member"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px 20px",
                        margin: "20px 0px",
                      }}
                    >
                      <img
                        src={
                          panel.member1.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                        }
                        alt=""
                        style={{
                          width: "60px",
                          height: "60px",
                          maxWidth: "60px",
                          maxHeight: "60px",
                          borderRadius: "50%",
                        }}
                      />
                      {panel.member1.name}
                    </div>

                    <div
                      className="member"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px 20px",
                        margin: "20px 0px",
                      }}
                    >
                      <img
                        src={
                          panel.member2.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWKPfcYrCzZYwxa23OMrxtPlGxvtc_lRyf6Q&usqp=CAU"
                        }
                        alt=""
                        style={{
                          width: "60px",
                          height: "60px",
                          maxWidth: "60px",
                          maxHeight: "60px",
                          borderRadius: "50%",
                        }}
                      />
                      {panel.member2.name}
                    </div>
                  </div>

                  <div
                    className="assigned-groups"
                    style={{
                      margin: "20px 0px",
                      maxHeight: "375px",
                      overflowY: "auto",
                      paddingRight: "30px",
                      maxWidth: "700px",
                      // marginLeft: "150px",
                    }}
                  >
                    <div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Group Name
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔰 Research Team Number 113
                      </div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Topic
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔸Complexity Matrix of Software Development Life Cycle
                      </div>

                      <hr style={{ margin: "20px 0px" }} />
                    </div>
                    <div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Group Name
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔰 Research Team Number 113
                      </div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Topic
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔸Complexity Matrix of Software Development Life Cycle
                      </div>

                      <hr style={{ margin: "20px 0px" }} />
                    </div>
                    <div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Group Name
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔰 Research Team Number 113
                      </div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Topic
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔸Complexity Matrix of Software Development Life Cycle
                      </div>

                      <hr style={{ margin: "20px 0px" }} />
                    </div>
                    <div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Group Name
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔰 Research Team Number 113
                      </div>
                      <span
                        className="userShowTitle"
                        style={{
                          color: "rgb(175, 170, 170)",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Topic
                      </span>
                      <div
                        className="member"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px 20px",
                          margin: "20px 0px",
                        }}
                      >
                        🔸Complexity Matrix of Software Development Life Cycle
                      </div>

                      <hr style={{ margin: "20px 0px" }} />
                    </div>
                  </div>
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
      <Notifications notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default UserRoles;
