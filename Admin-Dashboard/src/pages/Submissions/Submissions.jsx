import React, { useEffect, useState } from "react";
import { buttons } from "../../dummy";
import { getPokemon, filterPokemon } from "./filter";
import "./Submissions.scss";
import { Button, ButtonGroup } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import axios from "axios";
import { pokemons } from "../../dummy";
import { FcDocument } from "react-icons/fc";

const Submissions = () => {
  const [filtredPokemon, setFiltredPokemon] = useState(null);
  useEffect(() => {
    setFiltredPokemon(getPokemon());
  }, []);

  function handlePokemon(e) {
    let typePokemon = e.target.value;
    typePokemon !== "all"
      ? setFiltredPokemon(filterPokemon(typePokemon))
      : setFiltredPokemon(getPokemon());
  }

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

  return (
    <>
      <div
        className="submission-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          {buttons &&
            buttons.map((type, index) => (
              <Button
                style={{ width: "150px" }}
                key={index}
                onClick={handlePokemon}
                value={type.value}
              >
                {type.name}
              </Button>
            ))}
        </ButtonGroup>
      </div>
      <div className="submission-list" style={{ marginTop: "50px" }}>
        <div class="grid-container">
          {filtredPokemon &&
            filtredPokemon.map((type) => (
              <div class="grid-item">
                <div className="uploaded-item-container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FcDocument
                      className="uploaded-item-icon"
                      style={{
                        cursor: "pointer",
                        height: "",
                        fontSize: "150px",
                      }}
                      onClick={() => window.open(type.subDoc)}
                    />
                  </div>
                  <div className="uploaded-item-info">
                    <h1
                      style={{
                        fontWeight: "200",
                        fontSize: "20px",
                      }}
                    >
                      <span>
                        <strong>Group Name : </strong>
                      </span>
                      {type.groupName}
                    </h1>

                    <h1
                      style={{
                        fontWeight: "200",
                        fontSize: "20px",
                      }}
                    >
                      <span>
                        <strong>Research Topic : </strong>
                      </span>
                      {type.topic}
                    </h1>
                    <h1
                      style={{
                        fontWeight: "200",
                        fontSize: "20px",
                      }}
                    >
                      <span>
                        <strong>Submitted Date : </strong>
                      </span>
                      2022-02-02
                    </h1>

                    <div
                      className="uploaded-item-download-btn"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </>
  );
};

export default Submissions;
