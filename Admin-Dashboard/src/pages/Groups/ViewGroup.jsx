import React, { useEffect, useState } from "react";
import "./ViewGroup.scss";
import { Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ViewGroup = () => {
  const { id } = useParams();

  const [groupName, setgroupName] = useState("");
  const [researchTopic, setresearchTopic] = useState("");
  const [member1Id, setmember1Id] = useState("");
  const [member2Id, setmember2Id] = useState("");
  const [member3Id, setmember3Id] = useState("");
  const [member4Id, setmember4Id] = useState("");
  const [extraMemberId, setextraMemberId] = useState("");
  const [assignedSupervisor, setassignedSupervisor] = useState("");
  const [assignedCoSupervisor, setassignedCoSupervisor] = useState("");
  const [assignedPanel, setassignedPanel] = useState("");

  //Alert Notification
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  let navigate = useNavigate();

  useEffect(() => {
    getGroupDetails();
  }, []);

  const getGroupDetails = () => {
    let mounted = true;

    fetch(`http://localhost:5000/group/getOneGroup/${id}`)
      .then((res) => res.json())

      .then((group) => {
        if (mounted) {
          setgroupName(group.groupName);
          setresearchTopic(group.researchTopic);
          setmember1Id(group.member1Id);
          setmember2Id(group.member2Id);
          setmember3Id(group.member3Id);
          setmember4Id(group.member4Id);
          setextraMemberId(group.extraMemberId);
          setassignedSupervisor(group.assignedSupervisor);
          setassignedCoSupervisor(group.assignedCoSupervisor);
          setassignedPanel(group.assignedPanel);
        }
      });

    return () => (mounted = false);
  };

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
                  src="https://res.cloudinary.com/desnqqj6a/image/upload/v1649172476/My_Img_qvpnz3.jpg"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">{member1Id.name}</span>
                  <span className="userShowUserTitle">{member1Id.email}</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5cqFuNuQc-evg5bzAK6Ro5ObXPyuPf4EgYQ&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Juliet Becker</span>
                  <span className="userShowUserTitle">hdd@sgx.com</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJfa758-9Zet25uR43OnWUDxPh_5ivrKWg4g&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">John Doe</span>
                  <span className="userShowUserTitle">johnd@abc.com</span>
                </div>
              </div>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZG-8Pk5VYr_MOP4Ks3uEeZdArTUAizNRwg&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Anna Becker</span>
                  <span className="userShowUserTitle">anna@gmail.com</span>
                </div>
              </div>

              <div className="userShowTop">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Memeber 5</span>
                  <span className="userShowUserTitle">sample@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="userShowBottom">
              <span className="userShowTitle">Supervisor</span>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOOFMe-CzzMAgkPdsGK1wsKLtoF33HXGK98A&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Prof.Nuwan Kodagoda</span>
                  <span className="userShowUserTitle">nuwank@sliit.lk</span>
                </div>
              </div>

              <span className="userShowTitle">Co - Supervisor</span>
              <div className="userShowTop">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5VOlpbH2ioO8ZDv8vgKj3zvtmsGawgZ9k8g&usqp=CAU"
                  alt=""
                  className="userShowImg"
                />
                <div className="userShowTopTitle">
                  <span className="userShowUsername">Prof.Lalith Gamage</span>
                  <span className="userShowUserTitle">lalithG@sliit.lk</span>
                </div>
              </div>
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
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Research Topic</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                    disabled
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 1</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 2</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 3</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateItem">
                  <label>Member 4</label>
                  <input
                    type="text"
                    placeholder=""
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Member 5</label>
                  <input
                    type="text"
                    placeholder="Add Extra Member If Any"
                    className="userUpdateInput"
                  />
                </div>
                <div className="userUpdateItem">
                  <label>Supervisor</label>
                  <select className="userUpdateInput">
                    <option>Select Supervisor</option>
                    <option>Nuwan Kodagoda</option>
                    <option>Hasith Deminda</option>
                    <option>Juliet Becker</option>
                    <option>John Doe</option>
                    <option>Anna Becker</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label>Co - Supervisor</label>
                  <select className="userUpdateInput">
                    <option>Select Co Supervisor</option>
                    <option>Nuwan Kodagoda</option>
                    <option>Hasith Deminda</option>
                    <option>Juliet Becker</option>
                    <option>John Doe</option>
                    <option>Anna Becker</option>
                  </select>
                </div>
                <div className="userUpdateItem">
                  <label>Panel</label>
                  <select className="userUpdateInput">
                    <option>Select Panel</option>
                    <option>Panel 1</option>
                    <option>Panel 2</option>
                    <option>Panel 3</option>
                    <option>Panel 4</option>
                    <option>Panel 5</option>
                  </select>
                </div>
              </div>
            </form>
            <br />
            <Button className="userUpdateButton">Update</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewGroup;
