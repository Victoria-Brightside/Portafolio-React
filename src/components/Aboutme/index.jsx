import "./Aboutme.css"

function Aboutme() {
    return (
        <>
            <section className="about_container">
                <h1>Acerca de mí</h1>
                <div className="content">
                    <article className="info_about">
                        <p className="info">
                            ¡Hola! Soy <strong>Victoria Bernal</strong>, una apasionada del aprendizaje, la tecnología y las artes marciales.<br /><br />
                            Mi trayectoria profesional comenzó en el campo de la <strong>medicina</strong>, donde me especialicé como <strong>médico ortopedista</strong>.
                            Sin embargo, mi interés y pasión por la <strong>tecnología</strong> me llevaron a dar un giro en mi carrera, y actualmente estudio <strong>Ingeniería en Sistemas Computacionales</strong> en la Universidad Virtual del Estado de Guanajuato.<br /><br />
                            Tuve la oportunidad de participar en el <strong>proyecto Oracle One en Alura LATAM (2024)</strong>, donde fortalecí mis habilidades en <strong>programación y desarrollo web</strong>.<br /><br />
                        </p>
                    </article>
                    <article className="about_photo">
                        <img src="/assets/developer.jpg" className="photo" />
                        <p className="info">
                            Si te interesa conocer más sobre mi trabajo o colaborar en algún proyecto, ¡estaré encantada de conectar contigo!<br /><br />
                        </p>
                    </article>
                </div>
            </section >
        </>
    )
}

export default Aboutme;