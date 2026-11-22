import { useEffect, useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Experience from './components/Experience'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import { navItems } from './data'
import './App.css'

export default function App() {
  const [active, setActive] = useState('home')

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]?.target?.id) {
          setActive(visible[0].target.id)
        }
      },
      { rootMargin: '-35% 0px -45% 0px', threshold: [0.1, 0.35, 0.6] },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <Navbar active={active} />
      <main className="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Portfolio />
        <Contact />
        <footer className="site-footer">
          <p>© {new Date().getFullYear()} Vikas Dubey · Senior React Native Engineer</p>
        </footer>
      </main>
    </div>
  )
}
