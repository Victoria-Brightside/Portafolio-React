import abilitiestech from "../../mocks/abilitiestech.json"
import abilitiessoft from "../../mocks/abilitiessoft.json"
import "./Abilitiestech.css"

function Abilitiestech() {
    const habilidades = abilitiestech.abilities;
    const soft = abilitiessoft.abilities;

    return (
        <section className="superflex">
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

            <section className="abilities_container">
                <h1>Habilidades blandas</h1>
                <section className="supergrid">
                    {
                        soft.map(supersoft =>

                            <article className="card" key={supersoft.id}>
                                <img src={supersoft.image} />
                                <p>{supersoft.name}</p>
                            </article>

                        )
                    }
                </section>
            </section>
        </section>
    );

}

export default Abilitiestech;