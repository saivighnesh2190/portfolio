import { ExternalLink, Github } from 'lucide-react'
import { Section } from '../components/Section'
import { TiltCard } from '../components/TiltCard'
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
                    <TiltCard key={project.title} className="card">
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
                        {(project.liveDemo || project.github) && (
                            <div className="card__links">
                                {project.liveDemo && (
                                    <a
                                        href={project.liveDemo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card__link"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                )}
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="card__link"
                                    >
                                        <Github size={16} />
                                        <span>GitHub</span>
                                    </a>
                                )}
                            </div>
                        )}
                    </TiltCard>
                ))}
            </div>
        </Section>
    )
}

