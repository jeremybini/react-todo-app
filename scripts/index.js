import React from "react";
import ReactDom from "react-dom";
import App from "./components/app";
import "../styles/index.scss";

const root = document.querySelector("#todo-spa");
ReactDom.render(<App />, root);
