import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./css/styles.scss";
import AppRouter from "./routers/AppRouter";

// const paint = () => ReactDOM.render(<p>New app starts here</p>, document.getElementById("app1"));
const paint = () => ReactDOM.render(<AppRouter />, document.getElementById("app1"));
paint();

