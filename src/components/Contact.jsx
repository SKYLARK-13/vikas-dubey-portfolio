import { useState } from 'react'
import { profile } from '../data'
import { useInView } from '../hooks/useInView'

export default function Contact() {
  const [ref, inView] = useInView()
  const [status, setStatus] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = String(data.get('name') || '').trim()
    const email = String(data.get('email') || '').trim()
    const subject = String(data.get('subject') || '').trim()
    const message = String(data.get('message') || '').trim()

    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      message,
    ].join('\n')

    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject || 'Portfolio inquiry')}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setStatus('Opening your email client…')
  }

  return (
    <section id="contact" className="section contact" ref={ref}>
      <header className="section-head">
        <p className="eyebrow">Connect</p>
        <h2>
          Get in <span className="accent">touch</span>
        </h2>
      </header>

      <div className={`contact__grid reveal ${inView ? 'is-visible' : ''}`}>
        <div className="contact__intro">
          <h3>Don&apos;t be shy!</h3>
          <p>
            Feel free to reach out about Senior React Native roles, SDK consulting,
            or mobile architecture. I&apos;m always open to discussing new projects
            and opportunities.
          </p>

          <ul className="contact-channels">
            <li>
              <span className="channel-icon" aria-hidden>✉</span>
              <div>
                <small>Mail me</small>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
            </li>
            <li>
              <span className="channel-icon" aria-hidden>☎</span>
              <div>
                <small>Call me</small>
                <a href={`tel:${profile.phone.replace(/-/g, '')}`}>{profile.phone}</a>
              </div>
            </li>
            <li>
              <span className="channel-icon" aria-hidden>in</span>
              <div>
                <small>LinkedIn</small>
                <a href={profile.linkedin} target="_blank" rel="noreferrer">
                  vikas-dubey
                </a>
              </div>
            </li>
          </ul>
        </div>

        <form className="contact-form" onSubmit={onSubmit}>
          <div className="form-row">
            <label>
              <span className="sr-only">Your name</span>
              <input name="name" type="text" placeholder="Your name" required autoComplete="name" />
            </label>
            <label>
              <span className="sr-only">Your email</span>
              <input name="email" type="email" placeholder="Your email" required autoComplete="email" />
            </label>
          </div>
          <label>
            <span className="sr-only">Subject</span>
            <input name="subject" type="text" placeholder="Your subject" required />
          </label>
          <label>
            <span className="sr-only">Message</span>
            <textarea name="message" rows={6} placeholder="Your message" required />
          </label>
          <button type="submit" className="btn btn--primary">
            Send message
          </button>
          {status ? <p className="form-status" role="status">{status}</p> : null}
        </form>
      </div>
    </section>
  )
}
