import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    Git,
    Linkedin,
    Email,
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
                        to="/education"
                        activeStyle={{ color: 'black' }}
                    >
                        Educacion
                    </NavLink>
                    

                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Contacto
                    </NavLink>
                    

                    <NavBtn>
                        <NavBtnLink to="https://www.linkedin.com/in/iikbrightside/"><Linkedin size={50}/></NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="https://github.com/Victoria-Brightside"><Git size={50} /></NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="/signup"><Email size={50}/></NavBtnLink>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;