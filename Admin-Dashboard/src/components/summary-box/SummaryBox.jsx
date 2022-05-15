import React from "react";
import "./summary-box.scss";
import Box from "../box/Box";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SummaryBox = ({ item }) => {
  return (
    <Box>
      <div className="summary-box">
        <div className="summary-box__info">
          <div className="summary-box__info__title">
            <div
              style={{
                color: "#DB190C",
                fontFamily: "monospace",
              }}
            >
              {item.title}
            </div>
            <span>{item.subtitle}</span>
          </div>
          <br />
          <div className="summary-box__info__value" style={{ color: "black" }}>
            {item.value}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default SummaryBox;
