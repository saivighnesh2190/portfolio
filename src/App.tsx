import { ExternalLink } from 'lucide-react'
import { Navigation } from './components/Navigation'
import { Hero } from './components/Hero'
import { Section } from './components/Section'
import { AboutSection } from './components/AboutSection'
import { ExperienceSection } from './components/ExperienceSection'
import { ContactSection } from './components/ContactSection'
import { education, hero, projects, skills } from './content'

function App() {
  const github = hero.socials.find((social) => social.label === 'GitHub')

  return (
    <div className="app-shell">
      <Navigation />
      <Hero />
      <main>
        <AboutSection />

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

        <ExperienceSection />

        <Section
          id="skills"
          title="Technical Skills"
          eyebrow="Stack"
          description="A toolkit that spans front-end, back-end, automation, and deployment workflows to ship reliable software."
        >
          <div className="skills-grid">
            {skills.map((group) => (
              <div className="skills-card" key={group.category}>
                <span className="skills-card__title">{group.category}</span>
                <div className="skills-card__items">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

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

        <ContactSection />
      </main>

      <footer>
        <p>
          Crafted with React, Vite, and a passion for building delightful experiences.{' '}
          {github ? (
            <a className="card__link" href={github.url} target="_blank" rel="noreferrer">
              Explore my GitHub <ExternalLink size={15} />
            </a>
          ) : null}
        </p>
        <p>© {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
