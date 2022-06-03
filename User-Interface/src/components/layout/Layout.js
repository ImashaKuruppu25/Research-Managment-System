import React, { useEffect } from "react";

import "./layout.css";

import Sidebar from "../sidebar/Sidebar";
import TopNav from "../topnav/TopNav";
import App from "../../App";

import { BrowserRouter, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import ThemeAction from "../../redux/actions/ThemeAction";

import { loadUser } from "../../redux/actions/userActions";

import { hot } from "react-hot-loader/root";

const Layout = () => {
  const themeReducer = useSelector((state) => state.ThemeReducer); // get type of state from store

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    const themeClass = localStorage.getItem("themeMode", "theme-mode-light");

    const colorClass = localStorage.getItem("colorMode", "theme-mode-light");

    dispatch(ThemeAction.setMode(themeClass));

    dispatch(ThemeAction.setColor(colorClass));

    dispatch(loadUser());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <div className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
            <div className="layout__content">
              <TopNav />
              <Sidebar {...props} />
              <div className="layout__content-main">
                <App />
              </div>
            </div>
          </div>
        )}
      />
    </BrowserRouter>
  );
};

export default hot(Layout);
