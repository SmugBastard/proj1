import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import "./css/styles.scss";

const paint = () => {

    ReactDOM.render(<p>New app starts here</p>, document.getElementById("app1"));
};

paint();

