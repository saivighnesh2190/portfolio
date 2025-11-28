import { NavLink } from 'react-router-dom'

const navItems = [
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Experience', href: '/experience' },
  { label: 'Skills', href: '/skills' },
  { label: 'Education', href: '/education' },
  { label: 'Contact', href: '/contact' },
]

export function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/" className="navigation__brand">
        N Sai Vighnesh
      </NavLink>
      <div className="navigation__links">
        {navItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
