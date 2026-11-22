import { profile } from '../data'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="hero__media" aria-hidden="true">
        <div className="hero__glow" />
        <div className="hero__frame">
          <img
            src={profile.portrait}
            alt=""
            className="hero__photo"
            width={420}
            height={560}
          />
        </div>
      </div>

      <div className="hero__copy">
        <p className="eyebrow animate-in" style={{ '--d': '0ms' }}>
          Indore · Remote-friendly
        </p>
        <h1 className="animate-in" style={{ '--d': '80ms' }}>
          I&apos;m <span className="accent">{profile.name}.</span>
          <br />
          {profile.title}
        </h1>
        <p className="lead animate-in" style={{ '--d': '160ms' }}>
          Building production React Native apps &amp; SDKs — VoIP, native modules,
          and store-ready releases for MSG91 and Giddh.
        </p>
        <div className="hero__actions animate-in" style={{ '--d': '240ms' }}>
          <a className="btn btn--primary" href="#portfolio">
            View portfolio
          </a>
          <a className="btn btn--ghost" href={profile.resumeUrl} download>
            Download CV
          </a>
        </div>
      </div>
    </section>
  )
}
