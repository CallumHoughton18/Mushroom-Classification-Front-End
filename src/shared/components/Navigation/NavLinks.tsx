import React from "react";
import {NavLink} from "react-router-dom";

const NavLinks = () => {
    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/" exact>
                    Classification
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
