import { personalInfos, profile, stats } from '../data'
import { useInView } from '../hooks/useInView'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className="section about" ref={ref}>
      <header className="section-head">
        <p className="eyebrow">About</p>
        <h2>
          About <span className="accent">me</span>
        </h2>
      </header>

      <div className={`about__grid reveal ${inView ? 'is-visible' : ''}`}>
        <div className="about__intro">
          <h3>Personal infos</h3>
          <p className="about__summary">{profile.summary}</p>
          <ul className="info-list">
            {personalInfos.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noreferrer">
                    {item.value}
                  </a>
                ) : (
                  <strong>{item.value}</strong>
                )}
              </li>
            ))}
          </ul>
          <a className="btn btn--primary" href={profile.resumeUrl} download>
            Download resume
          </a>
        </div>

        <div className="stats-grid">
          {stats.map((stat, i) => (
            <article
              key={stat.label}
              className="stat-card"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <p className="stat-card__value">
                {stat.value.replace(/%$/, '')}
                {stat.value.endsWith('%') ? (
                  <span className="accent">%</span>
                ) : (
                  <span className="accent">+</span>
                )}
              </p>
              <p className="stat-card__label">{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
