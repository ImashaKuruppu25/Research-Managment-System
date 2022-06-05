import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Panel_Members_details.css"
import { fontSize } from "@mui/system";
import img2 from "../../img/panelimg.png"

export default function Panel_Member_details() {
  const [panel, setpanel] = useState([
    {
      name: "",
      description: "",
      panelHead: "",
      member1: "",
      member2: "",
      extraMember: "",
    },
  ]);

  useEffect(() => {
    function getPanel() {
      axios
        .get(`http://localhost:5000/panel/get/Oshan Wijewardena`)
        .then((res) => {
          console.log(res);
          setpanel(res.data);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    getPanel();
  }, []);

  const RenderPanelDetails = (panel, id) => {
      return (
        <div key={id}>
          <h5
            style={{
              textShadow: "0 0 5px white",
              color: "white",
              fontWeight: "bold",
              marginTop: "50px",
            }}
          >
            {panel.name}
          </h5>
          <p class="price">{panel.name}</p>
          <ul class="features-list">
            <li
              style={{
                textShadow: "0 0 5px white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              {panel.description}
            </li>
            <li
              style={{
                textShadow: "0 0 5px white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <strong>Panel Head : </strong> {panel.panelHead}
            </li>
            <li
              style={{
                textShadow: "0 0 5px white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <strong>Member 1 : </strong> {panel.member1}
            </li>
            <li
              style={{
                textShadow: "0 0 5px white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <strong>Member 2 : </strong> {panel.member2}
            </li>
            <li
              style={{
                textShadow: "0 0 5px white",
                color: "black",
                fontWeight: "bold",
              }}
            >
              <strong>Extra Member : </strong> {panel.extraMember}
            </li>
          </ul>
        </div>
      );
  }

  return (
    <div>
      <h1 style={{ marginTop: "50px" }} class="text-center">
        Our Panel Team
      </h1>
      <img
        style={{ float: "right", width: "600px", marginTop: "-50px" }}
        src={img2}
      />
      <div
        class="pricing-box pricing-box-bg-image text-center"
        style={{ marginLeft: "100px" }}
      >
        {panel.map(RenderPanelDetails)}
        <Link to="topicrespond">
          <button class="btn-primary">Go To Topic Registration</button>
        </Link>
      </div>
    </div>
  );
}


