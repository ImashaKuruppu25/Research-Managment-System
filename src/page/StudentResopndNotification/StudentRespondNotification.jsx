import React, { useState, useEffect } from "react";
import axios from "axios";
import data from "../../data";
import imgConfirm from "../../img/confirm.png"
import imgRejected from "../../img/Rejected.png"
import "./StudentRespondNotification.css"
import { Button } from "bootstrap";
import { Link } from "react-router-dom";

export default function StudentRespondNotification() {
//   const [Gnumber, setGnumber] = useState("");

  const [respondtopic, setrespondtopic] = useState([
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

  const Gnumber = () => {data.map((users)=>{
      return(
      users.GroupNumber
      
      )
  })}

  

  useEffect(() => {
    function getTopicRespond() {
      axios
        .get(`http://localhost:5000/respondtopic/get/G17Y3S1`)
        .then((res) => {
          console.log(res);
          setrespondtopic(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getTopicRespond();
  }, []);

    const massage = (respondtopic)=>{
      
      if(respondtopic.Action === "Confirm"){
        return (
          <div>
            <br />
            <br />
            <br />
            <h1>Your Topic Confirmed</h1>
            <br />
            <img style={{ width: "500px" }} src={imgConfirm} />
          </div>
        );
      }
      else if(respondtopic.Action === "Reject"){
          return (
            <div>
              <br />
              <br />
              <br />
              <h1>Your Topic Rejected pleace Enter Topic Again</h1>
              <br />
              <img style={{ width: "500px" }} src={imgRejected} />
              <br />
              <br />
              <br />
              <br />
              <Link to="/">
                <button className="button-18">Add Topic Again</button>
              </Link>  
              <br />
              <br />
            </div>
          );
      }
      else{
        return(<h1>Not Responed to topic</h1>)
      }
  }

console.log(respondtopic.Action);
//   console.log(respondtopic);

  return (
    <div>
      {respondtopic.map(massage)}
    </div>
  );
}
