import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "/assets/logoviik.png";

import {
    Nav,
    NavLogo,
    LogoImg,
    NavLink,
    Bars,
    NavMenu,
    Git,
    Linkedin,
    Email,
    NavBtn,
    NavBtnLink,
    CopyButton,
    NavbarWrapper,
} from "./NavbarElements";
import { SiRedhatopenshift } from "react-icons/si";


function Navbar() {
    const [open, setOpen] = useState(false);

    const email = "seier.bernal@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        alert("Correo de contacto copiado al portapapeles!");
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <LogoImg src={logo} alt="logo" />
                </NavLogo>
                <NavbarWrapper open={open}>
                    <NavLink to="/" onClick={handleClick}>Inicio</NavLink>
                    <NavLink to="/about" onClick={handleClick}>Acerca de mí</NavLink>
                    <NavLink to="/abilities" onClick={handleClick}>Habilidades</NavLink>
                    <NavLink to="/projects" onClick={handleClick}>Proyectos</NavLink>
                    <NavLink to="/education" onClick={handleClick}>Educación</NavLink>
                    <NavLink to="/contact" onClick={handleClick}>Contacto</NavLink>
                </NavbarWrapper>
                <Bars onClick={handleClick}>
                    {open ? <FaTimes /> : <FaBars />}
                </Bars>

                <NavMenu>
                    <NavLink
                        to="/"
                        activeStyle={{ color: 'black' }}
                    >
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/about"
                        activeStyle={{ color: 'black' }}
                    >
                        Acerca de mí
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
                        Educación
                    </NavLink>


                    <NavLink
                        to="/contact"
                        activeStyle={{ color: 'black' }}
                    >
                        Contacto
                    </NavLink>


                    <NavBtn>
                        <NavBtnLink to="https://www.linkedin.com/in/iikbrightside/"><Linkedin size={50} /></NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to="https://github.com/Victoria-Brightside"><Git size={50} /></NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <CopyButton onClick={handleCopy}><Email size={50} /></CopyButton>
                    </NavBtn>
                </NavMenu>
            </Nav>
        </>
    );
}

export default Navbar;