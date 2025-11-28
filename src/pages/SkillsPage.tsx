import { Section } from '../components/Section'
import { skills } from '../content'

export function SkillsPage() {
    return (
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
    )
}
