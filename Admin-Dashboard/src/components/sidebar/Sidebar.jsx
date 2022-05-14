import React, { useEffect, useState } from "react";
import "./sidebar.scss";
import { Link, useLocation } from "react-router-dom";
import sidebarNav from "../../configs/sidebarNav";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const location = useLocation();

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

  return (
    <div
      className="sidebar"
      style={{
        // backgroundColor: "teal",
        borderRadius: "0px 25px 25px 0px",
        maxWidth: "375px",
      }}
    >
      <div className="sidebar__logo">
        <img
          src="https://res.cloudinary.com/desnqqj6a/image/upload/v1648282486/research_spnshl.png"
          alt=""
          style={{ width: "75px", height: "75px" }}
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
            <div
              className="sidebar__menu__item__icon"
              // style={{ color: "white" }}
            >
              {nav.icon}
            </div>
            <div
              className="sidebar__menu__item__txt"
              // style={{ color: "white" }}
            >
              {nav.text}
            </div>
          </Link>
        ))}
        <div className="sidebar__menu__item">
          <div className="sidebar__menu__item__icon">
            <i className="bx bx-log-out"></i>
          </div>
          <div className="sidebar__menu__item__txt">Logout</div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
