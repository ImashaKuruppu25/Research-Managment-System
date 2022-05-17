import React, { useEffect, useState } from "react";
import { buttons } from "../../dummy";
import { getPokemon, filterPokemon } from "./filter";
import "./Submissions.scss";
import { Button, ButtonGroup } from "@mui/material";

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
  return (
    // <div className="submission-container">
    //   {buttons &&
    //     buttons.map((type, index) => (
    //       <div className="button-group">
    //         {/* <button>Apple</button>
    //         <button>Samsung</button>
    //         <button>Sony</button> */}
    //         <button key={index} value={type.value} onClick={handlePokemon}>
    //           {type.name}
    //         </button>
    //       </div>
    //     ))}

    //   {filtredPokemon &&
    //     filtredPokemon.map((type) => (
    //       <ul key={type.id}>
    //         <li>{type.name}</li>
    //       </ul>
    //     ))}
    // </div>
    <div className="submission-container">
      {/* <div class="stv-radio-buttons-wrapper">
        {buttons &&
          buttons.map((type, index) => (
            <>
              <input
                key={index}
                type="radio"
                class="stv-radio-button"
                onClick={handlePokemon}
                name="radioButtonTest"
                value={type.value}
                id="button1"
                checked
              />
              <label for="button1"> {type.name}</label>
            </>
          ))}
      </div>
      {filtredPokemon &&
        filtredPokemon.map((type) => (
          <ul key={type.id}>
            <li>{type.name}</li>
          </ul>
        ))} */}
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        {buttons &&
          buttons.map((type, index) => (
            <Button
              style={{ width: "160px" }}
              key={index}
              onClick={handlePokemon}
              value={type.value}
            >
              {type.name}
            </Button>
          ))}
      </ButtonGroup>

      {filtredPokemon &&
        filtredPokemon.map((type) => (
          <ul key={type.id}>
            <li>{type.name}</li>
          </ul>
        ))}
    </div>
  );
};

export default Submissions;
