import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


function Navbar() {
    return (
        <>
            <Nav>
                <NavLogo to="/">
                    Logo
                </NavLogo>
                <Bars />

                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/education"
                        activeStyle={{ color: 'black' }}
                    >
                        Educación
                    </NavLink>

                    <NavLink
                        to="/abilities"
                        activeStyle={{ color: 'black' }}
                    >
                        Habilidades
                    </NavLink>

                    <NavLink
                        to="/projects"
                        activeStyle={{ color: 'black' }}
                    >
                        Proyectos
                    </NavLink>
                    

                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/signin"
                        activeStyle={{ color: 'black' }}
                    >
                        Sign In
                    </NavLink>
                    <NavBtn>
                        <NavBtnLink to="/signup">Sign Up</NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;