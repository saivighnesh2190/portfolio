import { Mail, MapPin, Phone, ArrowUpRight, Download } from 'lucide-react'
import { hero } from '../content'
import { BackgroundCanvas } from './BackgroundCanvas'

export function Hero() {
  const [linkedIn] = hero.socials

  const downloadResume = () => {
    const pdfContent = `%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n/Contents 4 0 R\n/Resources << /Font << /F1 5 0 R >> >>\n>>\nendobj\n4 0 obj\n<<\n/Length 120\n>>\nstream\nBT\n/F1 16 Tf\n90 720 Td\n(${hero.name} Resume Snapshot) Tj\n/F1 12 Tf\n0 -28 Td\n(${hero.title}) Tj\n0 -22 Td\n(Email: ${hero.email}) Tj\n0 -22 Td\n(Location: ${hero.location}) Tj\n0 -22 Td\n(Phone: ${hero.phone}) Tj\nET\nendstream\nendobj\n5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\nxref\n0 6\n0000000000 65535 f \n0000000010 00000 n \n0000000061 00000 n \n0000000124 00000 n \n0000000250 00000 n \n0000000409 00000 n \ntrailer\n<<\n/Size 6\n/Root 1 0 R\n>>\nstartxref\n481\n%%EOF`
    const blob = new Blob([pdfContent], { type: 'application/pdf' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = hero.resumeFileName
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

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
          <button className="button button--secondary" type="button" onClick={downloadResume}>
            Download resume
            <Download size={18} />
          </button>
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
