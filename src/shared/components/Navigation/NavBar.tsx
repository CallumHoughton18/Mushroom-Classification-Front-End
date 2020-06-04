import React, {FunctionComponent} from "react";
import Header from "./Header";
import NavLinks from "./NavLinks";

const NavBar: FunctionComponent = () => {
    return (
        <div>
            <Header>
                <NavLinks />
            </Header>
        </div>
    );
};

export default NavBar;
