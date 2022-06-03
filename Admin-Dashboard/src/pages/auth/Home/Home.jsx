import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <section>
        <header>
          <h2>
            <a href="" class="logo">
              <img
                style={{ width: "50%", height: "50%" }}
                src="https://res.cloudinary.com/desnqqj6a/image/upload/v1654241703/SLIIT_Logo_Crest-removebg-preview_duqz1v.png"
                alt=""
              />
            </a>
          </h2>
        </header>
        <div class="content">
          <div class="info">
            <h2>
              SLIIT <br />
              <span>Research Management System</span>
            </h2>
            <p style={{ color: "white" }}>
              This is the Research Management System of SLIIT. This system is
              used to manage the research activities of the SLIIT. If you are a
              student, you can use this system to manage your research
              activities. If you are a faculty, you can use this system to
              manage students' research papers.
            </p>
            <Link to="/login" class="info-btn">
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
