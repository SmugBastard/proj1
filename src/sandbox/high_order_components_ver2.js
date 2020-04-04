// Higher Order Component (HOC) - A conponent (HOC) that renders another component
// Resuse code
// Render hijacking
// Prop manipulation
// Abstract state


import React from "react";
import ReactDOM from "react-dom";

const Info = (props_) => (
    <div>
        <h1>Info: {props_.title}</h1>
        <p>The info is: <b>{props_.info}</b></p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props_) => (
        <div>
            <p style={{ color: "red" }}>This is private info.  Please don't share!</p>
            <WrappedComponent {...props_} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const One = withAdminWarning(Info);
const Two = withAdminWarning(Info);
const Three = withAdminWarning(Info);

const testTheory1 = () => (
    withAdminWarning(Info)
);



const testTheory2 = () => {
    return (<div>
        <p>ABOVE</p>
        {withAdminWarning(Info)()}
        <p>BELOW</p>
    </div>);
};

const xx = testTheory2();
const jsx = (
    <div>
        {xx}
        <AdminInfo />
        <One title="I'm the first..." info="...some info..." />
        <Two title="I'm the second..." info="...some more info..." />
        <Three title="I'm the third..." info="...some different info..." />
    </div>
);

// <AdminInfo title="I'm the first..." />
// <AdminInfo title="I'm the secpmd..." />
// <AdminInfo title="I'm the third..." />
// <AdminInfo />


// const paint = () => ReactDOM.render(<AdminInfo info="These are the details..." />, document.getElementById("app1"));
const paint = () => ReactDOM.render(jsx, document.getElementById("app1"));
paint();

