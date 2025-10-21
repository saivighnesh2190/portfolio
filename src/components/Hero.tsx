import { Mail, MapPin, Phone, ArrowUpRight, Download } from 'lucide-react'
import { hero } from '../content'
import { BackgroundCanvas } from './BackgroundCanvas'

export function Hero() {
  const [linkedIn] = hero.socials
  const resumeUrl = `${import.meta.env.BASE_URL}${hero.resumeFileName}`

  const handleContactScroll = () => {
    const target = document.getElementById('contact')
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="hero" id="home">
      <div className="hero__background">
        <BackgroundCanvas />
        <div className="hero__overlay" />
      </div>
      <div className="hero__content">
        <span className="hero__eyebrow">{hero.title}</span>
        <h1 className="hero__title">Hi, I&apos;m {hero.name}</h1>
        <p className="hero__summary">{hero.summary}</p>

        <div className="hero__cta">
          <button className="button button--primary" type="button" onClick={handleContactScroll}>
            Let&apos;s collaborate
          </button>
          <a className="button button--secondary" href={resumeUrl} download>
            Download resume
            <Download size={18} />
          </a>
          {linkedIn ? (
            <a className="button button--secondary" href={linkedIn.url} target="_blank" rel="noreferrer">
              Connect on {linkedIn.label}
              <ArrowUpRight size={18} />
            </a>
          ) : null}
        </div>

        <div className="hero__details">
          <div className="hero__details-row">
            <MapPin size={18} />
            <span>{hero.location}</span>
          </div>
          <div className="hero__details-row">
            <Phone size={18} />
            <span>{hero.phone}</span>
          </div>
          <div className="hero__details-row">
            <Mail size={18} />
            <span>{hero.email}</span>
          </div>
        </div>

        <div className="hero__stats">
          {hero.highlights.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <span className="stat-card__value">{stat.value}</span>
              <span className="stat-card__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
