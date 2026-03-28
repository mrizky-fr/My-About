import { useState } from 'react'
import { Github, Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Resources', href: '#resources' },
]

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="header">
      <div className="header__inner">
        {/* Logo */}
        <a href="#home" className="header__logo">
          IKKY
        </a>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* GitHub Button */}
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__cta"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="header__mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`header__mobile-menu ${mobileOpen ? 'header__mobile-menu--open' : ''}`}>
        <nav className="header__mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="header__mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="header__mobile-cta"
        >
          <Github size={18} />
          <span>GitHub</span>
        </a>
      </div>
    </header>
  )
}

export default Header
