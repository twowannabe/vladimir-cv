import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="noise" aria-hidden="true"></div>
  <div class="scanline" aria-hidden="true"></div>
  <main class="page-shell">
    <section class="hero panel">
      <div class="hero-copy">
        <p class="eyebrow">CYBERNETIC RESUME / PODGORICA NODE</p>
        <h1>Vladimir Kozlov</h1>
        <p class="lead">
          Cloud and automation engineer with 10+ years in IT, focused on resilient
          infrastructure, delivery speed, and systems that stay calm under pressure.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">Open LinkedIn</a>
          <a class="button button-secondary" href="#mission-log">View Resume</a>
        </div>
      </div>
      <aside class="hero-card">
        <div class="hero-card__row">
          <span class="label">Status</span>
          <span class="value value-online">ONLINE</span>
        </div>
        <div class="hero-card__row">
          <span class="label">Base</span>
          <span class="value">Podgorica, Montenegro</span>
        </div>
        <div class="hero-card__row">
          <span class="label">Core</span>
          <span class="value">Automation / Cloud / IaC / Observability</span>
        </div>
        <div class="hero-card__row">
          <span class="label">Signal</span>
          <span class="value">500+ LinkedIn connections</span>
        </div>
      </aside>
    </section>

    <section class="metrics-grid">
      <article class="metric panel">
        <span class="metric__value">10+</span>
        <span class="metric__label">Years in IT</span>
      </article>
      <article class="metric panel">
        <span class="metric__value">24/7</span>
        <span class="metric__label">Infrastructure mindset</span>
      </article>
      <article class="metric panel">
        <span class="metric__value">IaC</span>
        <span class="metric__label">Terraform-first operations</span>
      </article>
      <article class="metric panel">
        <span class="metric__value">AWS</span>
        <span class="metric__label">Cloud delivery focus</span>
      </article>
    </section>

    <section id="mission-log" class="content-grid">
      <article class="panel section-block section-block--wide">
        <p class="section-kicker">Mission Brief</p>
        <h2>About</h2>
        <p>
          Public profile data points to a career built around automation, cloud systems,
          and the practical side of DevOps. The emphasis is not just on shipping faster,
          but on making infrastructure understandable, observable, and maintainable for teams.
        </p>
        <p>
          Recent public writing also suggests strong hands-on interest in Terraform, AWS ECS,
          Kubernetes, logging pipelines, and monitoring strategy, with a preference for solving
          real operational drift instead of hiding it behind process.
        </p>
      </article>

      <article class="panel section-block">
        <p class="section-kicker">Specialization Stack</p>
        <h2>Focus Areas</h2>
        <ul class="chip-list">
          <li>Cloud Architecture</li>
          <li>Automation Pipelines</li>
          <li>Terraform</li>
          <li>AWS / ECS</li>
          <li>Kubernetes</li>
          <li>Observability</li>
          <li>Monitoring Strategy</li>
          <li>Reliability Engineering</li>
        </ul>
      </article>

      <article class="panel section-block">
        <p class="section-kicker">Operator Profile</p>
        <h2>Working Style</h2>
        <ul class="signal-list">
          <li>Turns infrastructure drift into explicit engineering work.</li>
          <li>Prefers systems that scale without creating team chaos.</li>
          <li>Builds delivery flows that are fast, visible, and recoverable.</li>
          <li>Balances pragmatism with strong technical standards.</li>
        </ul>
      </article>

      <article class="panel section-block section-block--wide">
        <p class="section-kicker">Experience Snapshot</p>
        <h2>What This Resume Highlights</h2>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__dot"></span>
            <div>
              <h3>Automation-led delivery</h3>
              <p>
                Designing repeatable infrastructure and deployment paths that reduce manual work
                and make engineering output more predictable.
              </p>
            </div>
          </div>
          <div class="timeline__item">
            <span class="timeline__dot"></span>
            <div>
              <h3>Cloud platform operations</h3>
              <p>
                Working close to the runtime layer: services, scaling, configuration, and the
                operational guardrails teams need in production.
              </p>
            </div>
          </div>
          <div class="timeline__item">
            <span class="timeline__dot"></span>
            <div>
              <h3>Observability and feedback loops</h3>
              <p>
                Treating logs, metrics, and alerts as part of product quality rather than as
                afterthoughts once systems are already noisy.
              </p>
            </div>
          </div>
        </div>
      </article>

      <article class="panel section-block">
        <p class="section-kicker">Public Signal</p>
        <h2>Recent Themes</h2>
        <ul class="signal-list">
          <li>Terraform drift and disciplined infrastructure ownership.</li>
          <li>ECS as a pragmatic scaling layer for smaller teams.</li>
          <li>Monitoring strategy beyond basic Prometheus and Grafana talk.</li>
          <li>Current-state DevOps thinking, not buzzword nostalgia.</li>
        </ul>
      </article>

      <article class="panel section-block">
        <p class="section-kicker">Contact Gateway</p>
        <h2>Connect</h2>
        <p>
          The cleanest contact path currently available from public data is LinkedIn.
        </p>
        <div class="contact-links">
          <a href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">LinkedIn Profile</a>
          <a href="https://lizaisyourfriend.lol/cv" target="_blank" rel="noreferrer">Live Site URL</a>
        </div>
      </article>
    </section>
  </main>
`
