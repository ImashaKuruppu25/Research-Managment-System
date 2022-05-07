import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Groups = () => {
  const columns = [
    {
      field: "groupName",
      headerName: "Group Name",
      width: 150,
      renderCell: (params) => {
        return <div className="userlist-container">{params.row.groupName}</div>;
      },
    },
    { field: "topic", headerName: "Topic", width: 400 },
    { field: "supervisor", headerName: "Supervisor", width: 200 },
    { field: "coSupervisor", headerName: "Co Supervisor", width: 170 },

    {
      field: "action",
      headerName: "Action",
      width: 150,
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
          rows={rows}
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
