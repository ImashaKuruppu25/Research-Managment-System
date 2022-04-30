import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

const Groups = () => {
  const columns = [
    {
      field: "groupName",
      headerName: "Group Name",
      width: 250,
      renderCell: (params) => {
        return <div className="userlist-container">{params.row.groupName}</div>;
      },
    },
    { field: "topic", headerName: "Topic", width: 400 },
    { field: "supervisor", headerName: "Supervisor", width: 200 },
    { field: "time", headerName: "Created At", width: 170 },

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
      time: "2 days ago",
    },
    {
      id: 2,
      groupName: "Team Number 2",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Imasha Maduwantha",
      time: "2 days ago",
    },
    {
      id: 3,
      groupName: "Team Number 3",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Oshan Wijewardena",
      time: "3 days ago",
    },
    {
      id: 4,
      groupName: "Team Number 4",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Chanuth Maduka",
      time: "4 days ago",
    },
    {
      id: 5,
      groupName: "Team Number 5",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Hasith Deminda",
      time: "8 days ago",
    },
    {
      id: 6,
      groupName: "Team Number 6",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Janani Malshika",
      time: "10 days ago",
    },
    {
      id: 7,
      groupName: "Team Number 7",
      topic: "Complexity Metrix of Software Development Life Cycle (SDLC)",
      supervisor: "Not Assigned*",
      time: "10 days ago",
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
