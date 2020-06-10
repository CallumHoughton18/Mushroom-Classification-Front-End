import React, {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";

import "../../../scss/NavBar.scss";

const NavBar: FunctionComponent = () => {
    return (
        <div className="NavBar">
            <input type="checkbox" id="hamcheck"></input>
            <label htmlFor="hamburger" className="hamburger">
                <FontAwesomeIcon icon={faBars} />
            </label>
            <NavLinks />
        </div>
    );
};

export default NavBar;
