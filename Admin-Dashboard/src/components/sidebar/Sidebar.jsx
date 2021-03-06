import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import sidebarNav from "../../configs/sidebarNav";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

  const Navigate = useNavigate();

  useEffect(() => {
    const curPath = window.location.pathname.split("/")[1];
    const activeItem = sidebarNav.findIndex((item) => item.section === curPath);

    setActiveIndex(curPath.length === 0 ? 0 : activeItem);
  }, [location]);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  //Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    Navigate("/home");
  };

  return (
    <div
      className="sidebar"
      style={{
        // backgroundColor: "#1a1c4c",
        backgroundColor: "#2c2c56",

        borderRadius: "0px 25px 25px 0px",
        maxWidth: "330px",
      }}
    >
      <div className="sidebar__logo">
        <img
          src="https://res.cloudinary.com/desnqqj6a/image/upload/v1652594246/Research__7_-removebg-preview_uovuux.png"
          alt=""
          style={{ width: "100px", height: "100px" }}
        />
        <div className="sidebar-close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      <div className="sidebar__menu">
        {sidebarNav.map((nav, index) => (
          <Link
            to={nav.link}
            key={`nav-${index}`}
            className={`sidebar__menu__item ${
              activeIndex === index && "active"
            }`}
            onClick={closeSidebar}
          >
            <div className="sidebar__menu__item__icon">{nav.icon}</div>
            <div
              className="sidebar__menu__item__txt"
              style={{
                fontFamily: "monospace",
                fontSize: "14px",
              }}
            >
              {nav.text}
            </div>
          </Link>
        ))}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div
            className="sidebar__menu__item__txt"
            style={{
              fontFamily: "monospace",
              fontSize: "14px",
            }}
            onClick={handleLogout}
          >
            Logout
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
