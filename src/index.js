import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { addFeatures } from "./reducers/addFeatures";
import { createStore } from "redux";

import "bulma/css/bulma.css";
import "./styles.scss";

// STORE
let store = createStore(addFeatures);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
