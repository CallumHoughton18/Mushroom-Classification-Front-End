import React from "react";
import {NavLink} from "react-router-dom";

type NavLinkProps = {
    onLinkClicked: () => void;
};

const NavLinks = (props: NavLinkProps): JSX.Element => {
    return (
        <ul>
            <li onClick={props.onLinkClicked}>
                <NavLink to="/Classification" exact>
                    Classification
                </NavLink>
            </li>
            <li onClick={props.onLinkClicked}>
                <NavLink to="/About" exact>
                    About
                </NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;
