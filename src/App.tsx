import { useEffect, useState } from 'react'
import { content, emailParts, links, type Lang } from './content'
import Gallery from './Gallery'

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem('lang')
    if (saved === 'es' || saved === 'en') return saved
  } catch {
    /* sin almacenamiento: se usa el idioma del navegador */
  }
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const sectionIds = ['about', 'projects', 'stack', 'experience', 'contact'] as const

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function RotatingBadge({ text }: { text: string }) {
  const repeated = text.repeat(2)
  return (
    <svg className="badge" viewBox="0 0 200 200" role="img" aria-label={text.replace(/·/g, ',')}>
      <defs>
        <path id="circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
      </defs>
      <circle cx="100" cy="100" r="98" className="badge-bg" />
      <g className="badge-spin">
        <text className="badge-text">
          <textPath href="#circle" textLength="480" lengthAdjust="spacing">
            {repeated}
          </textPath>
        </text>
      </g>
      <path d="M78 122l44-44M92 78h30v30" className="badge-arrow" />
    </svg>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = content[lang]
  const [active, setActive] = useState<string>('')
  const email = `${emailParts[0]}@${emailParts[1]}`

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignorado */
    }
  }, [lang])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id)
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  const tracker = t.projects.tracker
  const marquee = ['Python', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL', 'Docker', 'Linux', 'Flutter', 'Odoo', 'CI/CD']

  return (
    <>
      <a className="skip" href="#main">
        {lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>

      <header className="nav-wrap">
        <nav className="nav" aria-label="Principal">
          <a className="brand" href="#top" aria-label="imigueldev">
            <img src="/favicon.png" alt="" width="32" height="32" />
            <span>Miguel Jiménez</span>
          </a>
          <ul className="nav-links">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} aria-current={active === id ? 'true' : undefined}>
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <div className="lang" role="group" aria-label="Idioma / Language">
              {(['es', 'en'] as const).map((l) => (
                <button key={l} type="button" aria-pressed={lang === l} onClick={() => setLang(l)}>
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a className="btn btn-accent btn-sm" href="#contact">
              {t.nav.cta}
              <ArrowIcon />
            </a>
          </div>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="status">
                <span className="dot" aria-hidden="true" />
                {t.hero.status}
              </p>
              <h1>
                <span>{t.hero.title[0]}</span>
                <span className="accent">{t.hero.title[1]}</span>
                <span>{t.hero.title[2]}</span>
              </h1>
              <p className="lead">{t.hero.lead}</p>
              <div className="actions">
                <a className="btn btn-accent" href="#projects">
                  {t.hero.primary}
                  <ArrowIcon />
                </a>
                <a className="btn btn-ghost" href="#contact">
                  {t.hero.secondary}
                </a>
              </div>
            </div>
            <figure className="portrait">
              <img src="/hero.webp" alt="Miguel Jiménez Cazorla trabajando en su escritorio" width="1300" height="827" fetchPriority="high" />
              <figcaption>{t.hero.caption}</figcaption>
              <RotatingBadge text={t.hero.badge} />
            </figure>
          </div>
          <div className="marquee" aria-hidden="true">
            <div className="marquee-track">
              {[...marquee, ...marquee].map((name, i) => (
                <span key={i}>{name}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.about.title}</h2>
            </div>
            <div className="about-body">
              <div className="prose">
                {t.about.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
              <dl className="facts">
                {t.about.facts.map((f) => (
                  <div key={f.label}>
                    <dt>{f.label}</dt>
                    <dd>{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <section className="section" id="projects">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.projects.title}</h2>
              <p>{t.projects.intro}</p>
            </div>

            <article className="project">
              <div className="project-info">
                <p className="pill">{tracker.status}</p>
                <h3>{tracker.name}</h3>
                <p className="tagline">{tracker.tagline}</p>
                <p>{tracker.description}</p>
                <ul className="checks">
                  {tracker.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <ul className="tags" aria-label="Stack">
                  {tracker.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="actions">
                  <a className="btn btn-accent" href={links.repo} target="_blank" rel="noreferrer">
                    {tracker.repo}
                    <ArrowIcon />
                  </a>
                  {links.demo ? (
                    <a className="btn btn-ghost" href={links.demo} target="_blank" rel="noreferrer">
                      {tracker.demo}
                    </a>
                  ) : (
                    <span className="btn btn-ghost btn-off" aria-disabled="true">
                      {tracker.demoSoon}
                    </span>
                  )}
                </div>
                {links.demo && links.demoPass && (
                  <dl className="creds">
                    <dt>{tracker.credentials.title}</dt>
                    <dd>
                      <span>{tracker.credentials.user}</span> <code>{links.demoUser}</code>
                    </dd>
                    <dd>
                      <span>{tracker.credentials.pass}</span> <code>{links.demoPass}</code>
                    </dd>
                    <dd className="creds-note">{tracker.credentials.note}</dd>
                  </dl>
                )}
              </div>
              <Gallery shots={tracker.shots} labels={tracker.gallery} />
            </article>

            <aside className="more">
              <h3>{t.projects.more.title}</h3>
              <p>{t.projects.more.text}</p>
              <a className="btn btn-ghost btn-sm" href={links.github} target="_blank" rel="noreferrer">
                GitHub
                <ArrowIcon />
              </a>
            </aside>
          </div>
        </section>

        <section className="section" id="stack">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.stack.title}</h2>
              <p>{t.stack.intro}</p>
            </div>
            <div className="stack-grid">
              {t.stack.groups.map((g) => (
                <div className="stack-card" key={g.name}>
                  <h3>{g.name}</h3>
                  <ul className="tags">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="learning">{t.stack.learning}</p>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="wrap">
            <div className="section-head">
              <h2>{t.experience.title}</h2>
            </div>
            <ol className="timeline">
              {t.experience.work.map((w) => (
                <li key={w.company}>
                  <div className="when">
                    <time>{w.period}</time>
                    {w.place && <span>{w.place}</span>}
                  </div>
                  <div className="what">
                    <h3>
                      {w.role} <span>{w.company}</span>
                    </h3>
                    <p>{w.summary}</p>
                    {w.points.length > 0 && (
                      <ul>
                        {w.points.map((p) => (
                          <li key={p}>{p}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="trio">
              <div>
                <h3>{t.experience.educationTitle}</h3>
                <ul className="plain">
                  {t.experience.education.map((e) => (
                    <li key={e.title}>
                      <strong>{e.title}</strong>
                      <span>
                        {e.place} · {e.period}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{t.experience.certsTitle}</h3>
                <ul className="plain">
                  {t.experience.certs.map((c) => (
                    <li key={c.title}>
                      <strong>{c.title}</strong>
                      <span>
                        {c.issuer} · {c.date}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>{t.experience.languagesTitle}</h3>
                <p className="plain-p">{t.experience.languages}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <h2>{t.contact.title}</h2>
            <p>{t.contact.text}</p>
            <div className="actions">
              <a className="btn btn-accent btn-lg" href={`mailto:${email}`}>
                {t.contact.email}
                <ArrowIcon />
              </a>
              <a className="btn btn-ghost btn-lg" href={links.linkedin} target="_blank" rel="noreferrer">
                {t.contact.linkedin}
              </a>
              <a className="btn btn-ghost btn-lg" href={links.github} target="_blank" rel="noreferrer">
                {t.contact.github}
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <span>
            © {new Date().getFullYear()} {t.footer.rights}
          </span>
          <span>{t.footer.built}</span>
        </div>
      </footer>
    </>
  )
}
