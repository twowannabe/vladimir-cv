import './style.css'

const themeKey = 'vladimir-cv-theme'
const savedTheme = localStorage.getItem(themeKey)
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const initialTheme = savedTheme || systemTheme

document.documentElement.dataset.theme = initialTheme

const stackDetails = {
  AWS: 'Designing and operating production workloads using AWS primitives with a focus on reliability, security, and cost-awareness.',
  Terraform: 'Authoring and evolving Terraform modules that keep cloud infrastructure reproducible, reviewable, and versioned.',
  Kubernetes:
    'Operating Kubernetes clusters for real workloads, including manifests, Helm charts, and day-two operations like upgrades and observability.',
  ECS: 'Container orchestration on AWS ECS with task definitions, services, and networking tuned for predictable deployments.',
  S3: 'Using S3 for static assets, backups, and data lakes with lifecycle policies and sensible access models.',
  CloudFront: 'Global content delivery with CloudFront, tuned for latency, caching behavior, and security at the edge.',
  Route53: 'DNS management with Route53 including routing policies, health checks, and domain management.',
  ACM: 'Managing TLS certificates for public-facing endpoints and keeping encryption defaults sane.',
  Ansible: 'Automating server configuration with Ansible playbooks that keep hosts in a known, repeatable state.',
  nginx: 'Serving traffic through nginx with attention to performance, observability, and secure defaults.',
  systemd: 'Managing Linux services and units, ensuring processes are supervised, restartable, and observable.',
  Redis: 'Using Redis for caching, queues, and coordination primitives in distributed systems.',
  PostgreSQL: 'Running PostgreSQL as the relational backbone for applications that need correctness and durability.',
  SQLite: 'Lightweight relational storage for edge, local, or embedded workloads.',
  Observability: 'Building dashboards, metrics, and traces that help teams see what their systems are doing in production.',
  Monitoring: 'Defining actionable alerts and monitors that surface real problems instead of noise.',
  Logging: 'Structuring and shipping logs to make debugging and incident response measurably faster.',
  Automation: 'Removing repetitive work with scripts, pipelines, and tooling that encode operational knowledge.',
  'Cloud Operations':
    'Ownership of the cloud runtime: from incident response and on-call to budgeting, access control, and platform upkeep.',
  'Infrastructure as Code':
    'Encoding infrastructure as code so that environments are reproducible, testable, and easy to reason about in reviews.',
}

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
        <nav class="top-nav" aria-label="Primary">
          <a href="#summary" data-nav-target="summary">Summary</a>
          <a href="#experience" data-nav-target="experience">Experience</a>
          <a href="#stack" data-nav-target="stack">Stack</a>
          <a href="#contact" data-nav-target="contact">Contact</a>
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
          <button class="button button--ghost" type="button" id="jump-to-contact">Let&apos;s talk</button>
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
          <button class="tag-cloud__item tag-cloud__item--xl tag-pill" type="button" data-tech="AWS">AWS</button>
          <button class="tag-cloud__item tag-cloud__item--lg tag-pill" type="button" data-tech="Terraform">Terraform</button>
          <button class="tag-cloud__item tag-cloud__item--lg tag-pill" type="button" data-tech="Kubernetes">Kubernetes</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="ECS">ECS</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="S3">S3</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="CloudFront">CloudFront</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="Route53">Route53</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="ACM">ACM</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="Ansible">Ansible</button>
          <button class="tag-cloud__item tag-cloud__item--md tag-pill" type="button" data-tech="nginx">nginx</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="systemd">systemd</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Redis">Redis</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="PostgreSQL">PostgreSQL</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="SQLite">SQLite</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Observability">Observability</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Monitoring">Monitoring</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Logging">Logging</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Automation">Automation</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Cloud Operations">Cloud Operations</button>
          <button class="tag-cloud__item tag-cloud__item--sm tag-pill" type="button" data-tech="Infrastructure as Code">Infrastructure as Code</button>
        </div>
        <div class="stack-detail" aria-live="polite">
          <p class="stack-detail__placeholder">Tap a technology to see how it shows up in real work.</p>
          <div class="stack-detail__content" hidden>
            <p class="stack-detail__label" id="stack-detail-label"></p>
            <p class="stack-detail__text" id="stack-detail-text"></p>
          </div>
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
const navLinks = Array.from(document.querySelectorAll('.top-nav a[data-nav-target]'))
const sections = navLinks
  .map((link) => {
    const id = link.dataset.navTarget
    const el = id ? document.getElementById(id) : null
    return el ? { id, el } : null
  })
  .filter(Boolean)

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  localStorage.setItem(themeKey, theme)
  if (toggleValue) {
    toggleValue.textContent = theme === 'light' ? 'Light' : 'Dark'
  }
}

if (toggle) {
  toggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light'
    applyTheme(nextTheme)
  })
}

navLinks.forEach((link) => {
  const targetId = link.dataset.navTarget
  if (!targetId) return
  const target = document.getElementById(targetId)
  if (!target) return

  link.addEventListener('click', (event) => {
    event.preventDefault()
    const rect = target.getBoundingClientRect()
    const offset = 96
    const absoluteTop = window.scrollY + rect.top - offset
    window.scrollTo({ top: absoluteTop, behavior: 'smooth' })
  })
})

let activeSectionId = null
const scrollOffset = 120

function updateActiveNav() {
  const scrollPosition = window.scrollY

  let currentId = null
  sections.forEach(({ id, el }) => {
    const top = el.offsetTop
    if (scrollPosition + scrollOffset >= top) {
      currentId = id
    }
  })

  if (!currentId || currentId === activeSectionId) return
  activeSectionId = currentId

  navLinks.forEach((link) => {
    if (link.dataset.navTarget === currentId) {
      link.classList.add('is-active')
      link.setAttribute('aria-current', 'page')
    } else {
      link.classList.remove('is-active')
      link.removeAttribute('aria-current')
    }
  })
}

window.addEventListener('scroll', () => {
  window.requestAnimationFrame(updateActiveNav)
})

updateActiveNav()

const jumpToContact = document.getElementById('jump-to-contact')
const contactSection = document.getElementById('contact')
if (jumpToContact && contactSection) {
  jumpToContact.addEventListener('click', () => {
    const rect = contactSection.getBoundingClientRect()
    const offset = 96
    const absoluteTop = window.scrollY + rect.top - offset
    window.scrollTo({ top: absoluteTop, behavior: 'smooth' })
  })
}

const stackDetailRoot = document.querySelector('.stack-detail')
const stackDetailLabel = document.getElementById('stack-detail-label')
const stackDetailText = document.getElementById('stack-detail-text')
const stackDetailContent = document.querySelector('.stack-detail__content')
const stackDetailPlaceholder = document.querySelector('.stack-detail__placeholder')
const techButtons = Array.from(document.querySelectorAll('.tag-pill[data-tech]'))

let activeTech = null

function showTechDetail(techName) {
  const description = stackDetails[techName]
  if (!description || !stackDetailRoot || !stackDetailLabel || !stackDetailText || !stackDetailContent) return

  activeTech = techName
  techButtons.forEach((btn) => {
    if (btn.dataset.tech === techName) {
      btn.classList.add('tag-pill--active')
      btn.setAttribute('aria-pressed', 'true')
    } else {
      btn.classList.remove('tag-pill--active')
      btn.setAttribute('aria-pressed', 'false')
    }
  })

  stackDetailRoot.classList.add('stack-detail--active')
  stackDetailLabel.textContent = techName
  stackDetailText.textContent = description
  stackDetailContent.hidden = false
  if (stackDetailPlaceholder) {
    stackDetailPlaceholder.hidden = true
  }
}

techButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const techName = btn.dataset.tech
    if (!techName) return
    if (activeTech === techName) {
      activeTech = null
      btn.classList.remove('tag-pill--active')
      btn.setAttribute('aria-pressed', 'false')
      if (stackDetailRoot && stackDetailContent && stackDetailPlaceholder) {
        stackDetailRoot.classList.remove('stack-detail--active')
        stackDetailContent.hidden = true
        stackDetailPlaceholder.hidden = false
      }
      return
    }
    showTechDetail(techName)
  })
})
