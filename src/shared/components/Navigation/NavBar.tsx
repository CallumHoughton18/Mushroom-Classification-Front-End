import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import NavLinks from "./NavLinks";
import logo from "../../../assets/imgs/logo.png";
import useNavbarExpanded from "../../hooks/useNavbarExpanded";

import sassVars from "../../../stylesheets/abstractions/_variables.scss";

const NavBar = (): JSX.Element => {
    const widthForHamburger = parseInt(sassVars.maxWidthForHamburger, 10);
    const [expanded, setExpanded] = useNavbarExpanded(widthForHamburger, "resize");
    return (
        <div className={expanded ? "navbar expanded" : "navbar"}>
            <img src={logo} className="logo" />
            <FontAwesomeIcon
                icon="bars"
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
