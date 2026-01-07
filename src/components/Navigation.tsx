import { NavLink, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Home,
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Mail,
  FolderKanban
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '/about', icon: User },
  { label: 'Projects', href: '/projects', icon: FolderKanban },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Skills', href: '/skills', icon: Code2 },
  { label: 'Education', href: '/education', icon: GraduationCap },
  { label: 'Contact', href: '/contact', icon: Mail },
]

export function Navigation() {
  const location = useLocation()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isActiveRoute = (href: string) => {
    return location.pathname.endsWith(href)
  }

  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__brand">
        <Home size={18} />
        <span>N Sai Vighnesh</span>
      </NavLink>

      <div className="navigation__tubelight-container">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = isActiveRoute(item.href)

          return (
            <NavLink
              key={item.href}
              to={item.href}
              className={`navigation__tubelight-item ${isActive ? 'active' : ''}`}
            >
              {/* Show icon on mobile, text on desktop */}
              {isMobile ? (
                <Icon size={18} />
              ) : (
                <span>{item.label}</span>
              )}

              {/* Tubelight lamp effect - only on active item */}
              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="navigation__lamp"
                  initial={false}
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                >
                  {/* Lamp bar */}
                  <div className="navigation__lamp-bar" />
                  {/* Glow layers */}
                  <div className="navigation__lamp-glow navigation__lamp-glow--1" />
                  <div className="navigation__lamp-glow navigation__lamp-glow--2" />
                  <div className="navigation__lamp-glow navigation__lamp-glow--3" />
                </motion.div>
              )}
            </NavLink>
          )
        })}
      </div>
    </nav>
  )
}
