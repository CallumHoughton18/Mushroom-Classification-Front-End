import React, {FunctionComponent} from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";

import "../../../scss/NavBar.scss";

const NavBar: FunctionComponent = () => {
    return (
        <div className="NavBar">
            <Header>
                <NavLinks />
            </Header>
        </div>
    );
};

export default NavBar;
