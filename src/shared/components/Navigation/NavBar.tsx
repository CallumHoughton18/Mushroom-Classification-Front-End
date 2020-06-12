import React, {FunctionComponent, useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

import NavLinks from "./NavLinks";

import "../../../scss/NavBar.scss";

const NavBar: FunctionComponent = () => {
    const [expanded, setExpanded] = useState(false);
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 600) {
                setExpanded(false);
            }
        };
        window.addEventListener("resize", handleResize);
    });

    return (
        <div className={expanded ? "navbar expanded" : "navbar"}>
            <FontAwesomeIcon
                icon={faBars}
                onClick={() => {
                    setExpanded(!expanded);
                }}
                className="hamburger"
            />
            <NavLinks />
        </div>
    );
};

export default NavBar;
