import abilitiessoft from "../../mocks/abilitiessoft.json"
import "./Abilitiessoft.css"

function Abilitiessoft() {
    const habilidades = abilitiessoft.abilities

    return (
        <section className="soft_container">
            <h1>Habilidades blandas</h1>
            <section className="soft_supergrid">
                {
                    habilidades.map(habilidad =>

                        <article className="card" key={habilidad.id}>
                            <img src={habilidad.image} />
                            <p>{habilidad.name}</p>
                        </article>

                    )
                }
            </section>
        </section>
    );

}

export default Abilitiessoft;