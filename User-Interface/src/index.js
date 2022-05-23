import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";

import { createStore , applyMiddleware} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import { Provider } from "react-redux";

import rootReducer from "./redux/reducers";

import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./assets/css/grid.css";
import "./assets/css/theme.css";
import "./assets/css/index.css";

import Layout from "./components/layout/Layout";

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

document.title = "Team App";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

