import { Section } from '../components/Section'
import { education } from '../content'

export function EducationPage() {
    return (
        <Section
            id="education"
            title="Education"
            eyebrow="Learning"
            description="Academic journey focused on computer science fundamentals and applied engineering."
        >
            <div className="grid">
                {education.map((entry) => (
                    <article className="card education-card" key={entry.program}>
                        <div className="card__title">
                            <span>{entry.program}</span>
                        </div>
                        <div className="education-card__meta">
                            <span>{entry.institution}</span>
                            <span>{entry.period}</span>
                            <span>{entry.score}</span>
                        </div>
                    </article>
                ))}
            </div>
        </Section>
    )
}
