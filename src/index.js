import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import combineReducers from "./reducers/index";
import { Provider } from "react-redux";
import App from "./App";

import "bulma/css/bulma.css";
import "./styles.scss";

const rootElement = document.getElementById("root");
let store = createStore(combineReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	rootElement
);
