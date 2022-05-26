import "./topnav.css";
import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Dropdown from "../dropdown/Dropdown";
import ThemeMenu from "../thememenu/ThemeMenu";
import logo from "../../assets/images/logo.png";
import user_menu from "../../assets/JsonData/user_menus.json";

// const userEmail = localStorage.getItem("userEmail");
// const userImage = localStorage.getItem("userImage");
// const userId = localStorage.getItem("userId");

const curr_user = {
  display_name: "userEmail",
  image: "",
};

const renderUserToggle = (user) => (
  <div className="topnav__right-user">
    <div className="topnav__right-user__image">
      {user.image?(<img src={user.image} alt="" />):(<></>)}
    </div>
    <div className="topnav__right-user__name">{user.display_name}</div>
  </div>
);

const renderUserMenu = (item, index) => (
  <Link to="/" key={index}>
    <div className="notification-item">
      <i className={item.icon}></i>
      <span>{item.content}</span>
    </div>
  </Link>
);

const Topnav = () => {
  const state = useSelector((state) => state.user);
  console.log(state);
  const [email, setEmail] = useState("Login & Register");
	const [imagePath, setImagePath] = useState("");

  useEffect(() => {
		if (state.isAuthenticated) {
			setEmail(state.user.email);
			setImagePath(state.user.image);
		}
	}, [state.user, setEmail, setImagePath]);

  const curr_user = {
    display_name: email,
   image: imagePath,
  };

	// const handleLogOut = (event: any) => {
	// 	if (event) {
	// 		localStorage.removeItem("token");
	// 		window.location.href = "/signin";
	// 	}
	// };

  return (
    <div className="topnav">
      <div className="sidebar__logo">
        <img src={logo} alt="Team logo" />
      </div>
      <div className="topnav__right">
        <div className="topnav__right-item">
          {/* dropdown here */}
          <Dropdown
            // customToggle={() => renderUserToggle(curr_user)}
            customToggle={
              localStorage.getItem("userId")
                ? () => renderUserToggle(curr_user)
                : () =>
                    renderUserToggle({
                      display_name: "Login & Register",
                    })
            }
            contentData={user_menu}
            renderItems={(item, index) => renderUserMenu(item, index)}
          />
        </div>
        <div className="topnav__right-item">
          <ThemeMenu />
        </div>
      </div>
    </div>
  );
};

export default Topnav;
