import React, {FunctionComponent} from "react";
import {NavLink} from "react-router-dom";

type NavLinkProps = {
    onLinkClicked: () => void;
};

const NavLinks: FunctionComponent<NavLinkProps> = (props) => {
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
