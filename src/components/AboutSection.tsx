import { BookOpen, HeartHandshake, Sparkles, Target } from 'lucide-react'
import { about, hero } from '../content'
import { Section } from './Section'

export function AboutSection() {
  return (
    <Section
      id="about"
      title="About Me"
      eyebrow="Story"
      description="Grounded in full stack engineering, energized by applied AI, and focused on delivering experiences that feel genuinely helpful."
    >
      <div className="about-grid">
        <article className="about-card about-card--story">
          <div className="about-card__icon">
            <Sparkles size={22} />
          </div>
          <h3>Who I Am</h3>
          <p>{hero.summary}</p>
          <div className="about-card__story">
            {about.story.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
        <article className="about-card about-card--focus">
          <div className="about-card__icon">
            <Target size={22} />
          </div>
          <h3>What I&apos;m focusing on</h3>
          <ul className="about-card__list">
            {about.focusAreas.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="about-card about-card--values">
          <div className="about-card__icon">
            <HeartHandshake size={22} />
          </div>
          <h3>Principles I stand by</h3>
          <ul className="about-card__list">
            {about.values.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </ul>
        </article>
        <article className="about-card about-card--facts">
          <div className="about-card__icon">
            <BookOpen size={22} />
          </div>
          <h3>Quick facts</h3>
          <div className="about-card__facts">
            {about.quickFacts.map((fact) => (
              <div className="about-card__fact" key={fact.label}>
                <span className="about-card__fact-label">{fact.label}</span>
                <span className="about-card__fact-value">{fact.value}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </Section>
  )
}
