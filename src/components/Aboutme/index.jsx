import "./Aboutme.css"

function Aboutme() {
    return (
        <>
            <section className="about_container">
                <h1>Acerca de mí</h1>
                <div className="content">
                    <article className="info_about">
                        <p className="info">
                            Soy Victoria Bernal, entusiasta del aprendizaje, las artes marciales y la tecnología.<br/><br/>
                            Mi primera formación fue como médico ortopedista, actualmente me encuentro estudiando la ingeniería en sistemas computacionales.<br/><br/>
                            Actualmente estoy participando en el proyecto Oracle One en Alura LATAM y estudio la Ingeniería en Sistemas Computacionales en la Universidad Virtual del Estado de Guanajuato.
                        </p>
                    </article>
                    <article className="about_photo">
                        <img src="/assets/developer.jpg" className="photo" />
                    </article>
                </div>
            </section>
        </>
    )
}

export default Aboutme;