import React from "react";
import "./UserRoles.scss";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const UserRoles = () => {
  return (
    <div className="userRoles-section">
      <div className="userRoles-container">
        <div className="section1">
          <div className="userRoles-card">
            <div className="userRoles-card-title">ADMIN LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              <h4 className="userRoles-card-description">Hasith Deminda 1</h4>
              <h4 className="userRoles-card-description">Gimhana Dissnayake</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Gimhana Dissnayake</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Gimhana Dissnayake</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Gimhana Dissnayake</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="userRoles-card">
            <div className="userRoles-card-title">STAFF LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">
                Hasith Deminda Gunathilake Siriwadena
              </h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
            </div>
          </div>
        </div>

        <div className="section3">
          <div className="userRoles-card">
            <div className="userRoles-card-title">STUDENT LIST</div>
            <hr style={{ margin: "20px 0px", border: "1px solid red" }} />
            <div className="user-list">
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
              <h4 className="userRoles-card-description">Hasith Deminda</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="panel-members-list">
        <h1 style={{ fontWeight: "400" }}>Panels & Panel Members</h1>
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
              Evaluation Panel 1
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here's the panel memebers for this panel group. Panel contains 3
              members and 1 has assigned as a Panel Head! If you need any
              changed to be made, Contact the Admin!
              <div style={{ display: "flex" }}>
                <div className="members" style={{ margin: "20px 0px" }}>
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
                  </div>
                </div>

                <div
                  className="assigned-groups"
                  style={{
                    margin: "20px 150px",
                    maxHeight: "375px",
                    overflowY: "auto",
                    paddingRight: "20px",
                    maxWidth: "700px",
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
              Evaluation Panel 2
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here's the panel memebers for this panel group. Panel contains 3
              members and 1 has assigned as a Panel Head! If you need any
              changed to be made, Contact the Admin!
              <div style={{ display: "flex" }}>
                <div className="members" style={{ margin: "20px 0px" }}>
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
                  </div>
                </div>

                <div
                  className="assigned-groups"
                  style={{
                    margin: "20px 150px",
                    maxHeight: "375px",
                    overflowY: "auto",
                    paddingRight: "20px",
                    maxWidth: "700px",
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
              Evaluation Panel 3
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here's the panel memebers for this panel group. Panel contains 3
              members and 1 has assigned as a Panel Head! If you need any
              changed to be made, Contact the Admin!
              <div style={{ display: "flex" }}>
                <div className="members" style={{ margin: "20px 0px" }}>
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
                  </div>
                </div>

                <div
                  className="assigned-groups"
                  style={{
                    margin: "20px 150px",
                    maxHeight: "375px",
                    overflowY: "auto",
                    paddingRight: "20px",
                    maxWidth: "700px",
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
              Evaluation Panel 4
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Here's the panel memebers for this panel group. Panel contains 3
              members and 1 has assigned as a Panel Head! If you need any
              changed to be made, Contact the Admin!
              <div style={{ display: "flex" }}>
                <div className="members" style={{ margin: "20px 0px" }}>
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
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
                      src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                      alt=""
                      style={{
                        maxWidth: "50px",
                        maxHeight: "50px",
                        borderRadius: "50%",
                      }}
                    />
                    Hasith Deminda
                  </div>
                </div>

                <div
                  className="assigned-groups"
                  style={{
                    margin: "20px 150px",
                    maxHeight: "375px",
                    overflowY: "auto",
                    paddingRight: "20px",
                    maxWidth: "700px",
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
      </div>
    </div>
  );
};

export default UserRoles;
