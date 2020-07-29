import React, {FunctionComponent} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";
import logo from "../../../icons/logo.png";
import useNavbarExpanded from "../../hooks/useNavbarExpanded";

import sassVars from "../../../stylesheets/abstractions/_variables.scss";

const NavBar: FunctionComponent = () => {
    //TODO: Add type to navStyle? currently just imported as module alias
    const widthForHamburger = parseInt(sassVars.maxWidthForHamburger, 10);
    console.log(widthForHamburger);
    const [expanded, setExpanded] = useNavbarExpanded(widthForHamburger, "resize");
    return (
        <div className={expanded ? "navbar expanded" : "navbar"}>
            <img src={logo} className="logo" />
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    setExpanded(!expanded);
                }}
                className="hamburger"
            />
            <NavLinks
                onLinkClicked={() => {
                    setExpanded(false);
                }}
            />
        </div>
    );
};

export default NavBar;
