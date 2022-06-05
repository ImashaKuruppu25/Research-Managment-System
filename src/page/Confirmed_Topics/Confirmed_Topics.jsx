import React, { useState, useEffect } from "react";
import axios from "axios";
import img4 from "../../img/ConfirmedPanel.png";
import img5 from "../../img/confirm.png"
import "./Confirmed_Topics.css";

export default function Confirmed_Topics() {
  const [Confirmed, setConfirmed] = useState([
    {
      topic: "",
      Discription: "",
      GroupNumber: "",
      GroupLeader: "",
      member1: "",
      member2: "",
      member3: "",
      Action: "",
    },
  ]);

  useEffect(() => {
    function getConfirmedTopic() {
      axios
        .get("http://localhost:5000/respondtopic/get")
        .then((res) => {
          console.log(res);
          setConfirmed(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getConfirmedTopic();
  }, []);

  //settopic,dis,lsmdfklsaf

  const RenderConfirmedTopic = (Confirmed, id) => {
    if (Confirmed.Action === "Confirm") {
      return (
        <tr key={id}>
          <td>{Confirmed.topic}</td>
          <td>{Confirmed.Discription}</td>
          <td>{Confirmed.GroupNumber}</td>
          <td><img style={{width:"50px"}} src={img5}/></td>
        </tr>
      );
    }
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
          Confirmed Topics
        </h1>
        <img
          style={{ float: "right", width: "600px", marginTop: "-50px" }}
          src={img4}
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
          <tbody>{Confirmed.map(RenderConfirmedTopic)}</tbody>
        </table>
      </div>
    </div>
  );
}
