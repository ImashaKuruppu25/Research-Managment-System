import React, { useEffect, useState } from "react";
import { buttons } from "../../dummy";
import { getPokemon, filterPokemon } from "./filter";
import "./Submissions.scss";
import { Button, ButtonGroup } from "@mui/material";
import axios from "axios";
import { FcFolder } from "react-icons/fc";

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

  const [submissions, setSubmissions] = useState([
    {
      groupName: "",
      topic: "",
      type: "",
      subDoc: "",
      date: "",
    },
  ]);

  //Get all submisions
  useEffect(() => {
    function getSubmissions() {
      axios

        .get("http://localhost:5000/submissions/allSubmissions/")

        .then((res) => {
          console.log(res.data);

          setSubmissions(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    getSubmissions();
  }, []);

  function getPokemon() {
    const pokemonList = submissions;
    return pokemonList;
  }

  function filterPokemon(pokeType) {
    let filtredPokemon = getPokemon().filter((type) => type.type === pokeType);
    return filtredPokemon;
  }
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
                style={{ width: "175px" }}
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
                <span
                  style={{
                    fontWeight: "600",
                    fontSize: "16px",
                    color: "#ff9066",
                    letterSpacing: "1.5px",
                  }}
                >
                  {type.type} Document
                </span>
                <div className="uploaded-item-container">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FcFolder
                      className="uploaded-item-icon"
                      style={{
                        cursor: "pointer",
                        height: "",
                        fontSize: "100px",
                        marginBottom: "10px",
                      }}
                      onClick={() => window.open(type.subDoc)}
                    />
                  </div>
                  <div
                    className="uploaded-item-info"
                    style={{
                      lineHeight: "100%",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: "200",
                        fontSize: "16px",
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
                        fontSize: "16px",
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
                        fontSize: "16px",
                      }}
                    >
                      <span>
                        <strong>Submitted Date : </strong>
                      </span>
                      {type.date}
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
