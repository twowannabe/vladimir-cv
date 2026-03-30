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
          Cloud, platform, and automation engineer with more than a decade in IT.
          Building infrastructure that stays readable, observable, and dependable when
          products stop being small and teams need calm systems instead of extra drama.
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
          With over a decade of experience in IT, Vladimir specializes in automation, cloud
          operations, and platform work that helps engineering teams move faster without making
          production harder to understand. The emphasis is on resilient delivery paths, clean
          infrastructure ownership, and observability that supports real decisions.
        </p>
        <p>
          Public activity around Terraform drift, AWS ECS, monitoring strategy, and current-state
          DevOps shows a practical style: fewer slogans, more maintainable systems.
        </p>
      </article>

      <article class="feature feature--timeline">
        <p class="section-tag">Places of Work</p>
        <h2>Work experience and environments</h2>
        <div class="timeline">
          <div class="timeline__entry">
            <span class="timeline__index">01</span>
            <div>
              <h3>Panasonic</h3>
              <p>
                Current professional context appears to be within Panasonic. Based on the available
                workspace metadata, this is the only employer I could verify directly in-session.
              </p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">02</span>
            <div>
              <h3>Cloud and platform engineering roles</h3>
              <p>
                Public profile data clearly points to multi-year work around cloud infrastructure,
                automation, and platform reliability, even though LinkedIn’s guest view does not
                expose the full employer timeline.
              </p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">03</span>
            <div>
              <h3>Production-facing operational ownership</h3>
              <p>
                The visible profile and writing indicate hands-on involvement with delivery pipelines,
                infrastructure as code, observability, and operational improvements in real production
                environments.
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
        <h2>Tools and areas of focus</h2>
        <div class="tag-rack">
          <span>AWS</span>
          <span>Terraform</span>
          <span>ECS</span>
          <span>Kubernetes</span>
          <span>Observability</span>
          <span>Monitoring</span>
          <span>Logging</span>
          <span>Automation</span>
          <span>Cloud Operations</span>
          <span>Infrastructure as Code</span>
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
