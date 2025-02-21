import "Navbar.css"

function Navbar() {
    return (
            <section className="navbar">
                <li><a href="#inicio">Inicio</a></li>
                <li><a href="#aboutme">Acerca de mí</a></li>
                <li><a href="#misproyectos">Proyectos</a></li>
                <li><a href="#contacto">Contacto</a></li>
                <li class="imagen_nav"><a title="linkedin" href="www.linkedin.com/in/iikbrightside"><img
                    src="./images/linkedin.svg"></a></li>
                <li class="imagen_nav"><a title="github" href="https://github.com/Victoria-Brightside"><img
                    src="./images/github.svg"></a></li>
                <li class="imagen_nav"><a title="correo" href="https://www.mrsushi.mx/#!"><img src="./images/mail.svg"></a>
                </li>
            </section>

    );
}

export default Navbar;