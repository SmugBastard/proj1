import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <div className="header_width">
            <h1>Expensify</h1>
            <NavLink activeClassName="active_navlink" exact={true} to="/">Home</NavLink>
            <NavLink activeClassName="active_navlink" exact={true} to="/create">Create</NavLink>
            <NavLink activeClassName="active_navlink" exact={true} to="/edit">Edit</NavLink>
            <NavLink className="right_aligned" activeClassName="active_navlink" exact={true} to="/help">Help</NavLink>
        </div>
    </header>
);

export { Header as default };