import { Section } from '../components/Section'
import { projects } from '../content'

export function ProjectsPage() {
    return (
        <Section
            id="projects"
            title="Projects"
            eyebrow="Impact"
            description="Hands-on projects that combine strong engineering foundations with practical AI integrations."
        >
            <div className="grid grid--two">
                {projects.map((project) => (
                    <article className="card" key={project.title}>
                        <div className="card__title">
                            <span>{project.title}</span>
                            <span className="card__period">{project.period}</span>
                        </div>
                        <p className="card__body">{project.description}</p>
                        <div className="tag-list">
                            {project.stack.map((item) => (
                                <span className="tag" key={item}>
                                    {item}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}
