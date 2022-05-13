import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./Users.scss";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";
import Notifications from "../../components/Notifications";
import ConfirmDialog from "../../components/ConfirmDialog";

const Users = () => {
  const [users, setUsers] = useState([
    {
      id: "",
      name: "",
      email: "",
      role: "",
      image: "",
      phone: "",
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

  //Delete a User
  function deleteHandler(id) {
    setConfirmDialog({
      ...ConfirmDialog,
      isOpen: false,
    });
    axios
      .delete(`http://localhost:5000/admin/adminDeleteUser/${id}`)

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
              onClick={() => {
                setConfirmDialog({
                  isOpen: true,
                  title: "Delete User!",
                  subTitle: "Are you sure you want to delete this user?",
                  onConfirm: () => {
                    deleteHandler(params.row.id);
                  },
                });
              }}
            />
          </div>
        );
      },
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
      <Notifications notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};

export default Users;
