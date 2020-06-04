import React, { FunctionComponent } from 'react';
import { Route } from 'react-router-dom';
import Header from './Header';
import NavLinks from './NavLinks';

type NavbarProps = {
};

const Navbar: FunctionComponent<NavbarProps> = (props) => {
    return (
        <div>
            <Header>
                <NavLinks/>
            </Header>
        </div>
    );
};

export default Navbar;