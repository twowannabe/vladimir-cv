import './style.css'

const themeKey = 'vladimir-cv-theme'
const savedTheme = localStorage.getItem(themeKey)
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const initialTheme = savedTheme || systemTheme

document.documentElement.dataset.theme = initialTheme

document.querySelector('#app').innerHTML = `
  <main class="app-shell">
    <header class="top-app-bar">
      <div class="top-app-bar__brand">
        <div class="brand-mark">VK</div>
        <div>
          <p class="brand-title">Vladimir Kozlov</p>
          <p class="brand-subtitle">Senior DevOps & Cloud Engineer</p>
        </div>
      </div>

      <div class="top-app-bar__actions">
        <nav class="top-nav">
          <a href="#summary">Summary</a>
          <a href="#experience">Experience</a>
          <a href="#stack">Stack</a>
          <a href="#contact">Contact</a>
        </nav>
        <button class="theme-toggle" type="button" aria-label="Toggle dark and light theme">
          <span class="theme-toggle__icon">◐</span>
          <span class="theme-toggle__value">${initialTheme === 'light' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </header>

    <section class="hero">
      <article class="hero-card surface">
        <p class="eyebrow">Professional Profile</p>
        <h1>Building reliable cloud systems that scale without chaos.</h1>
        <p class="hero-copy">
          Senior DevOps and Cloud Engineer with 10+ years of experience designing resilient
          infrastructure, automating delivery, and scaling production systems in demanding
          environments.
        </p>

        <div class="hero-meta">
          <div class="meta-chip">
            <span class="meta-chip__label">Location</span>
            <strong>Podgorica, Montenegro</strong>
          </div>
          <div class="meta-chip">
            <span class="meta-chip__label">Core Focus</span>
            <strong>AWS, Terraform, Kubernetes, Platform Reliability</strong>
          </div>
        </div>

        <div class="hero-actions">
          <a class="button button--filled" href="#experience">Read Resume</a>
          <a class="button button--tonal" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </article>

      <aside class="hero-side">
        <article class="surface info-card">
          <p class="eyebrow">At A Glance</p>
          <ul class="plain-list">
            <li>10+ years in IT</li>
            <li>Senior remote-ready ownership</li>
            <li>Automation, cloud, observability</li>
          </ul>
        </article>

        <article class="surface info-card">
          <p class="eyebrow">Strength Signal</p>
          <p>
            Deep technical ownership, sound architectural judgment, and execution without
            hand-holding in production-facing environments.
          </p>
        </article>
      </aside>
    </section>

    <section class="metrics-row">
      <article class="surface metric-card">
        <span class="metric-card__value">AWS</span>
        <span class="metric-card__label">Primary cloud platform</span>
      </article>
      <article class="surface metric-card">
        <span class="metric-card__value">IaC</span>
        <span class="metric-card__label">Terraform-driven workflows</span>
      </article>
      <article class="surface metric-card">
        <span class="metric-card__value">K8s</span>
        <span class="metric-card__label">Container orchestration</span>
      </article>
      <article class="surface metric-card">
        <span class="metric-card__value">Obs</span>
        <span class="metric-card__label">Monitoring and logging</span>
      </article>
    </section>

    <section class="content-grid">
      <article class="surface section-card section-card--wide" id="summary">
        <p class="eyebrow">Professional Summary</p>
        <h2>Systems thinking, not tool collecting.</h2>
        <p>
          Senior DevOps and Cloud Engineer with 10+ years of experience designing resilient
          infrastructure, automating delivery, and scaling production systems in demanding
          environments. Specializes in AWS, Terraform, Kubernetes, and platform reliability,
          with a track record of turning complex operations into stable, efficient, and
          maintainable systems.
        </p>
        <p>
          Most valuable in senior remote roles where deep technical ownership, sound architectural
          judgment, and execution without hand-holding are critical.
        </p>
      </article>

      <article class="surface section-card" id="experience">
        <p class="eyebrow">Experience Profile</p>
        <h2>Work themes</h2>
        <div class="timeline">
          <div class="timeline-item">
            <span class="timeline-item__dot"></span>
            <div>
              <h3>Automation and bot development</h3>
              <p>Python projects around Telegram bots, schedulers, AI integrations, and assistant-style products.</p>
            </div>
          </div>
          <div class="timeline-item">
            <span class="timeline-item__dot"></span>
            <div>
              <h3>Backend and realtime systems</h3>
              <p>Node.js and Go services with auth, websockets, storage, payments, and production-facing backend logic.</p>
            </div>
          </div>
          <div class="timeline-item">
            <span class="timeline-item__dot"></span>
            <div>
              <h3>Infrastructure and cloud operations</h3>
              <p>Terraform, Ansible, nginx, and deployment files pointing to hands-on provisioning and day-two operations.</p>
            </div>
          </div>
        </div>
      </article>

      <article class="surface section-card">
        <p class="eyebrow">Capabilities</p>
        <h2>Where the value shows up</h2>
        <ul class="detail-list">
          <li>Turning manual infrastructure work into repeatable, auditable flows</li>
          <li>Keeping cloud systems operable as service complexity grows</li>
          <li>Choosing architecture for team fit, not just trend fit</li>
          <li>Building monitoring around actionability instead of noise</li>
          <li>Reducing configuration drift with clearer infrastructure ownership</li>
        </ul>
      </article>

      <article class="surface section-card section-card--wide" id="stack">
        <p class="eyebrow">Stack</p>
        <h2>Cloud and infrastructure focus</h2>
        <div class="tag-cloud" aria-label="Cloud and infrastructure technology cloud">
          <span class="tag-cloud__item tag-cloud__item--xl">AWS</span>
          <span class="tag-cloud__item tag-cloud__item--lg">Terraform</span>
          <span class="tag-cloud__item tag-cloud__item--lg">Kubernetes</span>
          <span class="tag-cloud__item tag-cloud__item--md">ECS</span>
          <span class="tag-cloud__item tag-cloud__item--md">S3</span>
          <span class="tag-cloud__item tag-cloud__item--md">CloudFront</span>
          <span class="tag-cloud__item tag-cloud__item--md">Route53</span>
          <span class="tag-cloud__item tag-cloud__item--md">ACM</span>
          <span class="tag-cloud__item tag-cloud__item--md">Ansible</span>
          <span class="tag-cloud__item tag-cloud__item--md">nginx</span>
          <span class="tag-cloud__item tag-cloud__item--sm">systemd</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Redis</span>
          <span class="tag-cloud__item tag-cloud__item--sm">PostgreSQL</span>
          <span class="tag-cloud__item tag-cloud__item--sm">SQLite</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Observability</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Monitoring</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Logging</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Automation</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Cloud Operations</span>
          <span class="tag-cloud__item tag-cloud__item--sm">Infrastructure as Code</span>
        </div>
      </article>

      <article class="surface section-card section-card--wide">
        <p class="eyebrow">Selected Highlights</p>
        <h2>What the work reads like in practice</h2>
        <div class="highlights-grid">
          <article class="highlight-card">
            <h3>Cloud platform ownership</h3>
            <p>Operating runtime environments that need resilience, clarity, and sane defaults.</p>
          </article>
          <article class="highlight-card">
            <h3>Automation-first delivery</h3>
            <p>Reducing repetitive operational work with infrastructure as code and repeatable deployment paths.</p>
          </article>
          <article class="highlight-card">
            <h3>Production feedback loops</h3>
            <p>Using logs, metrics, and alerts to make systems easier to run, debug, and improve.</p>
          </article>
          <article class="highlight-card">
            <h3>Cross-stack engineering</h3>
            <p>Moving comfortably between frontend delivery, backend systems, bots, and infrastructure.</p>
          </article>
        </div>
      </article>
    </section>

    <section class="surface contact-card" id="contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Best place to reach out</h2>
      </div>
      <div class="contact-links">
        <a href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">linkedin.com/in/vladimir-kozlov-5268b8a8</a>
        <a href="https://lizaisyourfriend.lol/cv/" target="_blank" rel="noreferrer">lizaisyourfriend.lol/cv</a>
      </div>
    </section>
  </main>
`

const toggle = document.querySelector('.theme-toggle')
const toggleValue = document.querySelector('.theme-toggle__value')

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(themeKey, theme)
  toggleValue.textContent = theme === 'light' ? 'Light' : 'Dark'
}

toggle.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
  applyTheme(nextTheme)
})
