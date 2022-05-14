import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";

const Groups = () => {
  const [groups, setGroups] = useState([
    {
      id: "",
      groupName: "",
      researchTopic: "",
      member1Id: "",
      member2Id: "",
      member3Id: "",
      member4Id: "",
      extraMemberId: "",
      assignedSupervisor: "",
      assignedCoSupervisor: "",
      assignedPanel: "",
    },
  ]);

  useEffect(() => {
    const prepareGroups = async () => {
      const pGroups = await axios
        .get("http://localhost:5000/group/getAllGroups")

        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          alert(err.message);
        });
      // console.log(users);
      let preparedGroupArr = [];

      for (let i = 0; i < pGroups.length; i++) {
        let groupObj = {
          id: pGroups[i]._id,
          topic: pGroups[i].researchTopic,
          groupName: pGroups[i].groupName,
          supervisor: pGroups[i].assignedSupervisor || "Not Assigned *",
          coSupervisor: pGroups[i].assignedCoSupervisor || "Not Assigned *",
        };
        preparedGroupArr.push(groupObj);
      }
      setGroups(preparedGroupArr);
    };

    prepareGroups();
  }, []);

  const columns = [
    {
      field: "groupName",
      headerName: "Group Name",
      width: 150,
      renderCell: (params) => {
        return <div className="userlist-container">{params.row.groupName}</div>;
      },
    },
    { field: "topic", headerName: "Research Topic", width: 400 },
    { field: "supervisor", headerName: "Supervisor", width: 200 },
    { field: "coSupervisor", headerName: "Co Supervisor", width: 170 },

    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <Link to={"/groups/" + params.row.id}>
            <div className="userlist-container">
              <button className="userlist-edit-btn">View</button>
            </div>
          </Link>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      groupName: "Team Number 1",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Hasith Deminda",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 2,
      groupName: "Team Number 2",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Imasha Maduwantha",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 3,
      groupName: "Team Number 3",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Oshan Wijewardena",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 4,
      groupName: "Team Number 4",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Chanuth Maduka",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 5,
      groupName: "Team Number 5",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Hasith Deminda",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 6,
      groupName: "Team Number 6",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Janani Malshika",
      coSupervisor: "Hasith Deminda",
    },
    {
      id: 7,
      groupName: "Team Number 7",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Not Assigned*",
      coSupervisor: "Hasith Deminda",
    },
  ];

  return (
    <div>
      <h1 style={{ fontWeight: "200" }}>Registered Groups List</h1>
      <br />
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={groups}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          disablecheckboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Groups;
