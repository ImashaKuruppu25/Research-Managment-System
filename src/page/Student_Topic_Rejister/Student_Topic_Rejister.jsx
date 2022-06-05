import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Student_Topic_Rejister.css";
import data from "../../data";
import img1 from "../../img/Learning-bro.png"
import { Link } from "react-router-dom";

export default function Student_Topic_Rejister() {

  const [topic, settopic] = useState("");
  const [Discription,setDiscription] = useState("");
  const [GroupNumber, setGroupNumber] = useState("");


  function sendData(e) {
    e.preventDefault();
    const NewTopic = {
      topic,
      Discription,
      GroupNumber
    };

    axios
      .post("http://localhost:5000/requesttopic/addRequestTopic", NewTopic)
      .then(() => {
        alert("Topic Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  return (
    <div>
      {data.map((users) => {
        return (
          <div>
            {users.member.map((members) => {
              return (
                <div>
                  <img style={{ float: "right", width: "500px" }} src={img1} />
                  <form method="post" action="" onSubmit={sendData}>
                    <h2
                      style={{
                        fontSize: "30px",
                        marginBottom: "15px",
                        fontWeight: "bolder",
                        color: "#008080",
                      }}
                    >
                      Topic Registration
                    </h2>

                    <label for="username">Topic</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Type in your Topic.."
                      autocomplete="off"
                      required
                      onChange={(e) => {
                        settopic(e.target.value);
                      }}
                    />
                    <label for="username">Discription</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Type in your discription about topic.."
                      autocomplete="off"
                      required
                      onChange={(e) => {
                        setDiscription(e.target.value);
                      }}
                    />
                    <label for="username">Group Number</label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Type in your group number.."
                      autocomplete="off"
                      required
                      onChange={(e) => {
                        setGroupNumber(e.target.value);
                      }}
                    />

                    <input type="submit" name="submit" value="Submit" />
                  </form>
                  <div>
                    <p>
                      If you registed topic you can see your topic confirmed or
                      not. click status
                    </p>
                    <Link to="/notification">
                      <input type="submit" name="submit" value="Status" />
                    </Link>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
     
    </div>
  );
}
