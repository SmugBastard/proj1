// Higher Order Component (HOC) - A conponent (HOC) that renders another component
// Resuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from "react";
import ReactDOM from "react-dom";

const Info = (props_) => (
    <div>
        <h1>Info: <b>{props_.title}</b></h1>
        <p>The info is: <b>{props_.info}</b></p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props_) => (
        <div>
            {props_.isAdmin && <p style={{ color: "red" }}>This is private info.  Please don't share!</p>}
            <WrappedComponent {...props_} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);







const requireAuthentication = (WrappedComponent) => {
    return (props_) => (
        <div>
            {props_.isAuthenticated
                ? <WrappedComponent {...props_} />
                : <p>Please log in to see whatever...</p>}
        </div>
    );
};
const AuthInfo = requireAuthentication(Info);


// const paint = () => ReactDOM.render(<AdminInfo isAdmin={true} info="These are the details..." />, document.getElementById("app1"));
// const paint = () => ReactDOM.render(<AdminInfo isAdmin={false} title="First child..." info="Mesage from paint()" />, document.getElementById("app1"));
const paint = () => ReactDOM.render(<AuthInfo isAuthenticated={false} title="First child..." info="Mesage from paint()" />, document.getElementById("app1"));
paint();

