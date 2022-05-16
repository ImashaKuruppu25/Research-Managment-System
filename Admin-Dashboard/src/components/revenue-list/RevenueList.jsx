import React from "react";
import { data } from "../../constants";
import "./revenue-list.scss";
import ProgressBar from "../progressbar/ProgressBar";

const RevenueList = () => {
  return (
    <div className="paper-submissions-container">
      <ul
        className="revenue-list"
        style={{ overflowY: "auto", maxHeight: "200px" }}
      >
        {data.revenueByChannel.map((item, index) => (
          <li
            className="revenue-list__item"
            key={`revenue-${index}`}
            style={{ margin: "20px 15px" }}
          >
            <div
              className="revenue-list__item__title"
              style={{ fontSize: "16px" }}
            >
              {item.title}
              <span
                className={`${item.value > 50 ? "txt-success" : "txt-danger"}`}
              >
                {item.value}%
              </span>
            </div>
            <div>
              <ProgressBar value={item.value} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RevenueList;
