import { BriefcaseBusiness } from 'lucide-react'
import { Section } from './Section'
import { certifications, internships } from '../content'

export function ExperienceSection() {
  return (
    <Section
      id="experience"
      title="Experience & Achievements"
      eyebrow="Journey"
      description="Program immersions and initiatives where I built, iterated, and learned alongside teams tackling real-world problems."
    >
      <div className="timeline">
        {internships.map((entry) => (
          <article className="timeline-item" key={entry.title}>
            <div className="timeline-item__icon">
              <BriefcaseBusiness size={18} />
            </div>
            <div className="timeline-item__meta">
              <span className="timeline-item__period">{entry.period}</span>
              <h3 className="timeline-item__title">{entry.title}</h3>
              <span className="timeline-item__org">{entry.organization}</span>
              <p>{entry.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="grid grid--two">
        {certifications.map((certification) => (
          <article className="card" key={certification.name}>
            <div className="card__title">
              <span>{certification.name}</span>
            </div>
            <span className="card__period">Issued by {certification.issuer}</span>
          </article>
        ))}
      </div>
    </Section>
  )
}
