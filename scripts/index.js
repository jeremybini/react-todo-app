import React from "react";
import ReactDom from "react-dom";
import HelloWorld from "./HelloWorld";
import "../styles/index.scss";

const root = document.querySelector("#todo-spa");
ReactDom.render(<HelloWorld />, root);
