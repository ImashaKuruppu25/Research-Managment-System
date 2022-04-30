import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Users.scss";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const Users = () => {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "userName",
      headerName: "Full name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userlist-container">
            <img className="userlist-img" src={params.row.avatar} alt="" />
            {params.row.userName}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 300 },
    { field: "role", headerName: "Role", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userlist-container">
            <Link to={"/users/" + params.row.id}>
              <button className="userlist-edit-btn">Update</button>
            </Link>

            <MdDelete className="userlist-delete-btn" />
          </div>
        );
      },
    },
  ];

  const rows = [
    {
      id: 1,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 2,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 3,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 4,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 5,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 6,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 7,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 8,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 9,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 10,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 11,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 12,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 13,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 14,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 15,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 16,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 17,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
    {
      id: 18,
      avatar:
        "https://res.cloudinary.com/desnqqj6a/image/upload/v1650175831/fitness_dmymhn.png",
      userName: "Hasith Deminda",
      email: "Hasith@gmail.com",
      role: "STUDENT",
    },
  ];

  return (
    <div>
      <div style={{ height: 550, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    </div>
  );
};

export default Users;
