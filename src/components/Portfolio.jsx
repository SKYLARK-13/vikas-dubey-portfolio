import { projects } from '../data'
import { useInView } from '../hooks/useInView'

export default function Portfolio() {
  const [ref, inView] = useInView({ threshold: 0.08 })

  return (
    <section id="portfolio" className="section portfolio" ref={ref}>
      <header className="section-head">
        <p className="eyebrow">Work</p>
        <h2>
          My <span className="accent">portfolio</span>
        </h2>
        <p className="section-head__sub">
          Production apps and SDKs — every card links to npm, pub.dev, or the stores.
        </p>
      </header>

      <div className={`project-grid reveal ${inView ? 'is-visible' : ''}`}>
        {projects.map((project, i) => (
          <article
            key={project.id}
            className="project-card"
            style={{
              transitionDelay: `${i * 70}ms`,
              '--card-accent': project.accent,
            }}
          >
            <div className="project-card__visual" aria-hidden="true">
              <span className="project-card__emoji">{project.emoji}</span>
              <span className="project-card__type">{project.type}</span>
              <div className="project-card__device">
                <div className="project-card__screen" />
              </div>
            </div>
            <div className="project-card__body">
              <h3>{project.name}</h3>
              <p>{project.blurb}</p>
              <div className="tag-row">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="link-row">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="store-link"
                  >
                    {link.label}
                    <span aria-hidden>↗</span>
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
