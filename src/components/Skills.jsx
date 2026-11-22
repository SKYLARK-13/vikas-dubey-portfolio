import { skillGroups } from '../data'
import { useInView } from '../hooks/useInView'

function SkillMeter({ name, level, active, delay }) {
  const radius = 42
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (level / 100) * circumference

  return (
    <div className="skill-meter" style={{ transitionDelay: `${delay}ms` }}>
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <circle className="skill-meter__track" cx="50" cy="50" r={radius} />
        <circle
          className="skill-meter__value"
          cx="50"
          cy="50"
          r={radius}
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: active ? offset : circumference,
          }}
        />
      </svg>
      <span className="skill-meter__pct">{level}%</span>
      <p>{name}</p>
    </div>
  )
}

export default function Skills() {
  const [ref, inView] = useInView({ threshold: 0.12 })

  return (
    <section id="skills" className="section skills" ref={ref}>
      <header className="section-head">
        <p className="eyebrow">Capabilities</p>
        <h2>
          My <span className="accent">skills</span>
        </h2>
      </header>

      <div className={`skills__groups reveal ${inView ? 'is-visible' : ''}`}>
        {skillGroups.map((group, gi) => (
          <div key={group.title} className="skill-group">
            <h3>{group.title}</h3>
            <div className="skill-meters">
              {group.skills.map((skill, si) => (
                <SkillMeter
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  active={inView}
                  delay={gi * 80 + si * 40}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
