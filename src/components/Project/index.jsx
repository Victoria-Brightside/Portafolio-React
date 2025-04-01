import "./Project.css"
import projects from "../../mocks/projects.json"


function Project() {
    const proyectos = projects.projects;

    return (
        <section className="project_container">
            <h1>Proyectos</h1>
            <section className="project_grid">
                {
                    proyectos.map(proyecto => 
                        <article key={proyecto.id} className="card" style={{ backgroundImage: `url(${proyecto.image})` }}>
                            <div className="card_content">
                                <h2 className="card_title"> {proyecto.name}</h2>
                                <p className="card_body">{proyecto.description}</p>
                                <a href={proyecto.link1} className="button"> Ver código</a>
                                <a href={proyecto.link2} className="button"> Ver proyecto</a>
                            </div>
                        </article>

                    )
                }
            </section>

        </section>
    );
}

export default Project;