import { useEffect, useState } from 'react'
import { navItems } from '../data'

export default function Navbar({ active }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const go = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <aside className="side-nav" aria-label="Primary">
        <a className="brand-mark" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
          VD
        </a>
        <nav>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`nav-dot ${active === item.id ? 'is-active' : ''}`}
              onClick={() => go(item.id)}
              aria-label={item.label}
              title={item.label}
            >
              <span className="nav-dot__icon" aria-hidden>
                {item.icon}
              </span>
              <span className="nav-dot__label">{item.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <header className="mobile-bar">
        <a className="brand-mark" href="#home" onClick={(e) => { e.preventDefault(); go('home') }}>
          VD
        </a>
        <button
          type="button"
          className={`burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </header>

      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <nav>
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className={active === item.id ? 'is-active' : ''}
              onClick={() => go(item.id)}
            >
              <span aria-hidden>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  )
}
