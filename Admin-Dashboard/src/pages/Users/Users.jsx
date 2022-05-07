import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Users.scss";
import { MdDelete } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const prepareUsers = async () => {
      const pUsers = await axios
        .get("http://localhost:5000/admin/adminGetAllUsers")

        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          alert(err.message);
        });
      // console.log(users);
      let preparedUsersArr = [];

      for (let i = 0; i < pUsers.length; i++) {
        let userObj = {
          id: pUsers[i]._id,
          avatar: pUsers[i].image,
          name: pUsers[i].name,
          email: pUsers[i].email,
          role: pUsers[i].role,
          phone: pUsers[i].phone,
        };
        preparedUsersArr.push(userObj);
      }
      setUsers(preparedUsersArr);
    };

    prepareUsers();
  }, []);

  // console.log(users);

  //Delete a User
  function deleteHandler(_id) {
    axios
      .delete(`http://localhost:5000/admin/adminDeleteUser/${_id}`)

      .then((res) => {
        alert("User Deleted!");

        navigate("/users");
      })

      .catch();
  }

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Full name",
      width: 300,
      renderCell: (params) => {
        return (
          <div className="userlist-container">
            <img className="userlist-img" src={params.row.avatar} alt="" />
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
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

            <MdDelete
              className="userlist-delete-btn"
              onClick={() => deleteHandler(users._id)}
            />
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
  ];

  return (
    <div style={{ overflowY: "hidden" }}>
      <div style={{ height: 550, width: "100%" }}>
        <h1 style={{ fontWeight: "200" }}>Registered User List</h1>
        <br />

        <DataGrid
          rows={users}
          columns={columns}
          pageSize={8}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          style={{ overflowX: "auto" }}
        />
      </div>
    </div>
  );
};

export default Users;
