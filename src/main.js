import './style.css'

const themeKey = 'vladimir-cv-theme'
const savedTheme = localStorage.getItem(themeKey)
const systemTheme = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
const initialTheme = savedTheme || systemTheme

document.documentElement.dataset.theme = initialTheme

document.querySelector('#app').innerHTML = `
  <div class="page-glow page-glow--left" aria-hidden="true"></div>
  <div class="page-glow page-glow--right" aria-hidden="true"></div>

  <main class="page">
    <header class="masthead">
      <div class="masthead__line"></div>
      <div class="masthead__row">
        <div class="masthead__brand">VK / RESUME ISSUE</div>
        <div class="masthead__controls">
          <nav class="masthead__nav">
            <a href="#story">Story</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <button class="theme-toggle" type="button" aria-label="Toggle dark and light theme">
            <span class="theme-toggle__label">Theme</span>
            <span class="theme-toggle__value">${initialTheme === 'light' ? 'Light' : 'Dark'}</span>
          </button>
        </div>
      </div>
    </header>

    <section class="cover" id="story">
      <div class="cover__left">
        <p class="section-tag">Editorial Resume / 2026</p>
        <p class="cover__meta">Podgorica, Montenegro</p>
        <h1>
          Vladimir
          <span>Kozlov</span>
        </h1>
        <p class="cover__dek">
          Senior DevOps and Cloud Engineer with 10+ years of experience designing resilient
          infrastructure, automating delivery, and scaling production systems in demanding
          environments.
        </p>
      </div>

      <div class="cover__right">
        <div class="cover-card cover-card--feature">
          <span class="cover-card__label">Profile Summary</span>
          <h2>Cloud platforms, automation, and operational clarity.</h2>
          <p>
            Public profile data points to a practitioner focused on automation, cloud systems,
            infrastructure as code, and observability. The through-line is practical judgment:
            choose the right complexity level, automate it, and make it visible enough for teams
            to trust.
          </p>
        </div>

        <div class="cover-card-grid">
          <div class="cover-card">
            <span class="cover-card__label">Experience</span>
            <strong>10+ years in IT</strong>
          </div>
          <div class="cover-card">
            <span class="cover-card__label">Core Stack</span>
            <strong>AWS / Terraform / ECS / Kubernetes</strong>
          </div>
        </div>

        <div class="cover__actions">
          <a class="button button--primary" href="#experience">Read the Resume</a>
          <a class="button button--ghost" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">Open LinkedIn</a>
        </div>
      </div>
    </section>

    <section class="ribbon">
      <span>Automation without operational theater</span>
      <span>Infrastructure choices that fit the team</span>
      <span>Observability as a decision tool</span>
    </section>

    <section class="feature-grid" id="experience">
      <article class="feature feature--primary">
        <p class="section-tag">Professional Summary</p>
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

      <article class="feature feature--timeline">
        <p class="section-tag">Experience Profile</p>
        <h2>What the repository trail says about the work</h2>
        <div class="timeline">
          <div class="timeline__entry">
            <span class="timeline__index">01</span>
            <div>
              <h3>Automation and bot development</h3>
              <p>
                Multiple Python repositories show hands-on work with Telegram bots, schedulers,
                AI integrations, webhooks, content handling, and assistant-style products.
              </p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">02</span>
            <div>
              <h3>Backend and realtime systems</h3>
              <p>
                The repositories include Node.js and Go services with authentication, websockets,
                messaging flows, payment integrations, storage, and production-facing backend logic.
              </p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">03</span>
            <div>
              <h3>Infrastructure and cloud operations</h3>
              <p>
                Terraform, Ansible, nginx, and service deployment files point to hands-on ownership
                of cloud resources, provisioning, deployment flow, and day-two operations.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article class="feature">
        <p class="section-tag">Capabilities</p>
        <h2>Where the value shows up</h2>
        <ul class="editorial-list">
          <li>Turning manual infrastructure work into repeatable, auditable flows</li>
          <li>Keeping cloud systems operable as service complexity grows</li>
          <li>Choosing architecture for team fit, not just trend fit</li>
          <li>Building monitoring around actionability instead of noise</li>
          <li>Reducing configuration drift with clearer infrastructure ownership</li>
        </ul>
      </article>

      <article class="feature">
        <p class="section-tag">Stack</p>
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

      <article class="feature feature--primary">
        <p class="section-tag">Selected Resume Highlights</p>
        <h2>What the work reads like in practice</h2>
        <div class="highlights">
          <div class="highlight">
            <h3>Cloud platform ownership</h3>
            <p>Operating and shaping runtime environments that need resilience, clarity, and sane defaults.</p>
          </div>
          <div class="highlight">
            <h3>Automation-first delivery</h3>
            <p>Reducing repetitive operational work with infrastructure as code and repeatable deployment paths.</p>
          </div>
          <div class="highlight">
            <h3>Production feedback loops</h3>
            <p>Using logs, metrics, and alerts to make systems easier to run, debug, and improve.</p>
          </div>
          <div class="highlight">
            <h3>Team-oriented infrastructure choices</h3>
            <p>Favoring systems that are maintainable by the team that owns them, not just impressive on paper.</p>
          </div>
          <div class="highlight">
            <h3>AI product integrations</h3>
            <p>Shipping applications that connect LLM APIs, media tooling, bot interfaces, and backend workflows.</p>
          </div>
          <div class="highlight">
            <h3>Cross-stack engineering</h3>
            <p>Comfortable moving between frontend delivery, backend systems, automation scripts, bots, and infrastructure.</p>
          </div>
        </div>
      </article>
    </section>

    <section class="contact-block" id="contact">
      <div class="contact-block__intro">
        <p class="section-tag">Contact</p>
        <h2>Best place to reach out</h2>
      </div>
      <div class="contact-block__links">
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
