import React, { useState, useEffect } from "react";
import axios from "axios";
import { ThemeContext } from "@emotion/react";
import "./Panel_Member_View.css"
import img3 from "../../img/TopicRegistration.png"

export default function Panel_Member_View() {
  const [RegistedTopic, setRegistedTopic] = useState([
    {
      topic: "",
      Discription: "",
      GroupNumber: "",
    },
  ]);

  function RejectClick(
    topic,
    Discription,
    GroupNumber,
    Action
  ) {
    console.log(GroupNumber);
    console.log(topic);
    axios
      .delete(`http://localhost:5000/requesttopic/delete/${GroupNumber}`)
      .then(() => {
        alert("Topic deleted");
      })
      .catch((err) => {
        alert(err);
      });

    const NewTopic = {
      topic,
      Discription,
      GroupNumber,
      Action,
    };

    axios
      .post("http://localhost:5000/respondtopic/addRespond", NewTopic)
      .then(() => {
        alert("Responed Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  function ConfirmClick(
    topic,
    Discription,
    GroupNumber,
    Action
  ) {
    console.log(GroupNumber);
    console.log(topic);
    axios
      .delete(`http://localhost:5000/requesttopic/delete/${GroupNumber}`)
      .then(() => {
        alert("Topic deleted");
      })
      .catch((err) => {
        alert(err);
      });

    const NewTopic = {
      topic,
      Discription,
      GroupNumber,
      Action,
    };

    axios
      .post("http://localhost:5000/respondtopic/addRespond", NewTopic)
      .then(() => {
        alert("Responed Added");
      })
      .catch((err) => {
        alert(err);
      });
  }

  useEffect(() => {
    function getRegistedTopic() {
      axios
        .get("http://localhost:5000/requesttopic/get")
        .then((res) => {
          console.log(res);
          setRegistedTopic(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getRegistedTopic();
  }, []);

  //settopic,dis,lsmdfklsaf

  const RenderTopic = (RegistedTopic, id) => {
    return (
      <tr key={id}>
        <td>{RegistedTopic.topic}</td>
        <td>{RegistedTopic.Discription}</td>
        <td>{RegistedTopic.GroupNumber}</td>
        <td>
          <button
            className="button-18"
            role="button"
            onClick={() =>
              ConfirmClick(
                RegistedTopic.topic,
                RegistedTopic.Discription,
                RegistedTopic.GroupNumber,
                "Confirm"
              )
            }
          >
            Confirm
          </button>
          <button
            className="button-19"
            role="button"
            onClick={() =>
              RejectClick(
                RegistedTopic.topic,
                RegistedTopic.Discription,
                RegistedTopic.GroupNumber,
                "Reject"
              )
            }
          >
            Reject
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div>
      <div>
        <h1
          style={{
            float: "left",
            marginLeft: "200px",
            marginTop: "200px",
            fontSize: "60px",
            fontFamily: "arial,tahoma,sans-serif",
          }}
        >
          Topic Registration
        </h1>
        <img
          style={{ float: "right", width: "600px", marginTop: "-50px" }}
          src={img3}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="table-wrapper">
        <table className="fl-table">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Discription</th>
              <th>Group Number</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{RegistedTopic.map(RenderTopic)}</tbody>
        </table>
      </div>
    </div>
  );
}
