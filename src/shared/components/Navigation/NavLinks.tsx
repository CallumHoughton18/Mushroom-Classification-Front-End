import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

const NavLinks: FunctionComponent = () => {
    return (
        <ul>
            <li>
                <NavLink to="/Classification" exact>
                    Classification
                </NavLink>
            </li>
            <li>
                <NavLink to="/About" exact>
                    About
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
