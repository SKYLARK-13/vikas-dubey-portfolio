import { experience, profile } from '../data'
import { useInView } from '../hooks/useInView'

export default function Experience() {
  const [ref, inView] = useInView()

  return (
    <section id="experience" className="section experience" ref={ref}>
      <header className="section-head">
        <p className="eyebrow">Career</p>
        <h2>
          Experience &amp; <span className="accent">education</span>
        </h2>
      </header>

      <div className={`timeline reveal ${inView ? 'is-visible' : ''}`}>
        <article className="timeline-card">
          <div className="timeline-card__meta">
            <span className="pill">{experience.period}</span>
            <span className="timeline-card__place">{experience.location}</span>
          </div>
          <h3>
            {experience.role}
            <span className="accent"> — {experience.company}</span>
          </h3>
          <ul>
            {experience.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="timeline-card timeline-card--edu">
          <div className="timeline-card__meta">
            <span className="pill">{profile.education.years}</span>
            <span className="timeline-card__place">CGPA {profile.education.cgpa}</span>
          </div>
          <h3>
            {profile.education.degree}
            <span className="accent"> — {profile.education.school}</span>
          </h3>
          <p>
            Computer Science &amp; Engineering foundation that supports deep native module
            work across Android and iOS.
          </p>
        </article>
      </div>
    </section>
  )
}
