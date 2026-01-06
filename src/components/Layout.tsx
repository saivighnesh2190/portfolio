import { Outlet } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { Navigation } from './Navigation'
import { GlowCursor } from './Cursor3D'
import { AnimatedBackground } from './AnimatedBackground'
import { hero } from '../content'

export function Layout() {
  const github = hero.socials.find((social) => social.label === 'GitHub')

  return (
    <div className="app-shell">
      <AnimatedBackground />
      <GlowCursor />
      <Navigation />
      <main>
        <Outlet />
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


