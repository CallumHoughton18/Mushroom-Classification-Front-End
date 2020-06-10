import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

const NavLinks: FunctionComponent = () => {
    return (
        <ul>
            <li>
                <NavLink to="/" exact>
                    Classification
                </NavLink>
            </li>
            <li>
                <NavLink to="/" exact>
                    About
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
