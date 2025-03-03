import "./Header.css"

function Header() {
    return (
            <section className="hero-section" id="inicio">
                <p className="heromotivation">“Primero resuelve el problema, después escribe el código”. <br/>– John Johnson.</p>
                <video autoPlay muted loop id="heroVideo">
                    <source src="/assets/estrellas.mp4" type="video/mp4" />
                    Tu navegador no soporta videos HTML5.
                </video>
                <div className="rol">
                <h1 className="me">Victoria Bernal</h1>
                <p>Front-End Developer</p>
                </div>
                </section>
         );
        }

export default Header;