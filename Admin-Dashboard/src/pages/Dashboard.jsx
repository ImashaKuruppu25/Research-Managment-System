import React, { useEffect, useState } from "react";
import Box from "../components/box/Box";
import DashboardWrapper, {
  DashboardWrapperMain,
  DashboardWrapperRight,
} from "../components/dashboard-wrapper/DashboardWrapper";
import SummaryBox from "../components/summary-box/SummaryBox";
// import { data } from "../constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import OverallList from "../components/overall-list/OverallList";
import RevenueList from "../components/revenue-list/RevenueList";
import axios from "axios";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [allUsers, setallUsers] = useState("");
  const [allStudents, setAllStudents] = useState("");
  const [allGroups, setAllGroups] = useState("");
  const [allStaff, setAllStaff] = useState("");
  const [allPanels, setAllPanels] = useState("");

  useEffect(() => {
    function getAllUsers() {
      axios

        .get("http://localhost:5000/dashboard/allUsersCount/")

        .then((res) => {
          console.log(res.data);

          setallUsers(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }

    function getAllStudents() {
      axios

        .get("http://localhost:5000/dashboard/allUsersCount/")

        .then((res) => {
          console.log(res.data);

          setAllStudents(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
    function getAllGroups() {
      axios

        .get("http://localhost:5000/dashboard/allUsersCount/")

        .then((res) => {
          console.log(res.data);

          setAllGroups(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
    function getAllStaff() {
      axios

        .get("http://localhost:5000/dashboard/allUsersCount/")

        .then((res) => {
          console.log(res.data);

          setAllStaff(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
    function getAllPanels() {
      axios

        .get("http://localhost:5000/dashboard/allUsersCount/")

        .then((res) => {
          console.log(res.data);

          setAllPanels(res.data);
        })

        .catch((err) => {
          alert(err.message);
        });
    }
    getAllUsers();
    getAllStudents();
    getAllPanels();
    getAllStaff();
    getAllGroups();
  }, []);

  const data = {
    summary: [
      {
        title: "Total Students",
        subtitle: "Total Students Registerd ",
        value: `${allUsers}`,
      },
      {
        title: "Total Groups",
        subtitle: "Total Groups Created",
        value: "12",
      },
      {
        title: "Total Staff",
        subtitle: "Total Registered Staff",
        value: "8",
      },
      {
        title: "Total Panels",
        subtitle: "Total Alocated Panels",
        value: "2345",
      },
      {
        title: "Total Users",
        subtitle: "Total Users Registered",
        value: "2345",
      },
      {
        title: "Feedbacks",
        subtitle: "Student Feedbacks",
        value: "-",
      },
    ],
  };
  console.log(allStudents);
  return (
    <DashboardWrapper>
      <DashboardWrapperMain>
        <div className="row">
          <div className="col-12 col-md-12">
            <div className="row">
              {data.summary.map((item, index) => (
                <div
                  key={`summary-${index}`}
                  className="col-6 col-md-6 col-sm-12 mb"
                >
                  <SummaryBox item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Box>
              <img
                src="https://static.sliit.lk/wp-content/uploads/2018/03/SLIIT-malabe.jpg"
                alt=""
              />
            </Box>
          </div>
        </div>
      </DashboardWrapperMain>
      <DashboardWrapperRight>
        <div className="title mb" style={{ letterSpacing: "1px" }}>
          Notifications
        </div>
        <div className="mb" style={{ marginTop: "-20px" }}>
          <OverallList />
        </div>
        <div className="title mb" style={{ letterSpacing: "1px" }}>
          {" "}
          Submissions
        </div>
        <div className="mb" style={{ marginTop: "-25px" }}>
          <RevenueList />
        </div>
      </DashboardWrapperRight>
    </DashboardWrapper>
  );
};

export default Dashboard;
