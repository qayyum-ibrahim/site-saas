import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import Logo from './Logo.jsx'
import Button from './Button.jsx'
import { navLinks } from '../data/site.js'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const toggleRef = useRef(null)
  const location = useLocation()

  useEffect(() => setOpen(false), [location.pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__brand" aria-label="Tallybase home">
          <Logo />
        </Link>

        <nav className="header__nav" aria-label="Main">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="header__link">
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="header__actions">
          <Button to="/login" variant="ghost" size="sm">Log in</Button>
          <Button to="/signup" size="sm">Start free</Button>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="header__toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="header__bars" aria-hidden="true" />
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <nav className="container mobile-menu__inner" aria-label="Mobile">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} className="mobile-menu__link">
              {l.label}
            </NavLink>
          ))}
          <div className="mobile-menu__actions">
            <Button to="/login" variant="secondary" size="lg">Log in</Button>
            <Button to="/signup" size="lg">Start free</Button>
          </div>
        </nav>
      </div>
    </header>
  )
}
