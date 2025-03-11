import "./Educationme.css"

function Educationme() {
    return (
        <>
            <section className="education_container">
                <h1>Educación</h1>
                <section className="education_grid">

                    <article className="formacion_card">
                        <img src="/assets/uveg.jpg" alt="Logo UVEG" className="formacion_img" />
                        <div className="formacion_info" >
                            <h3>Ingeniería en Sistemas Computacionales</h3>
                            <p>Universidad Virtual del Estado de Guanajuato</p> 
                            <p>2022 - Actualidad</p>
                        </div>
                    </article>

                    <article className="formacion_card">
                        <img src="/assets/Alura.jpg" alt="Logo Alura" className="formacion_img" />
                        <div className="formacion_info">
                            <h3>Formación Front-End <br/> y React</h3>
                            <p>ALURA Latam</p>
                            <p>2024</p>
                        </div>
                    </article>

                    <article className="formacion_card">
                        <img src="./assets/codigo_facil.jpeg" alt="Logo Codigo Facilito" className="formacion_img" />
                        <div className="formacion_info">
                            <h3>Bootcamp Front-End <br/> y Javascript</h3>
                            <p>Código Facilito</p>
                            <p>2023 - 2024</p>
                        </div>
                    </article>
                </section>
            </section>
        </>
    )

}

export default Educationme;