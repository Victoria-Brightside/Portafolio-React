import abilitiestech from "../../mocks/abilitiestech.json"
import "./Abilitiestech.css"

function Abilitiestech() {
    const habilidades = abilitiestech.abilities

    return (
        <section className="abilities_container">
            <h1>Habilidades tecnológicas</h1>
            <section className="supergrid">
                {
                    habilidades.map(habilidad =>

                        <article className="card" key={habilidad.id}>
                            <img src={habilidad.image} />
                            <p>{habilidad.language}</p>
                        </article>

                    )
                }
            </section>
        </section>
    );

}

export default Abilitiestech;