import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="page-glow page-glow--left" aria-hidden="true"></div>
  <div class="page-glow page-glow--right" aria-hidden="true"></div>

  <main class="page">
    <header class="masthead">
      <div class="masthead__line"></div>
      <div class="masthead__row">
        <div class="masthead__brand">VK / RESUME ISSUE</div>
        <nav class="masthead__nav">
          <a href="#story">Story</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>

    <section class="cover" id="story">
      <div class="cover__left">
        <p class="section-tag">Editorial Cyberpunk / 2026</p>
        <p class="cover__meta">Podgorica, Montenegro</p>
        <h1>
          Vladimir
          <span>Kozlov</span>
        </h1>
        <p class="cover__dek">
          Cloud, platform, and automation engineer with 10+ years in IT.
          Building infrastructure that stays readable, observable, and calm
          when products stop being small.
        </p>
      </div>

      <div class="cover__right">
        <div class="cover-card cover-card--feature">
          <span class="cover-card__label">Lead Story</span>
          <h2>Platform work over buzzwords.</h2>
          <p>
            The strongest signal is practical judgment: choose the right level of
            complexity, automate it, and make it visible enough for a team to trust.
          </p>
        </div>

        <div class="cover-card-grid">
          <div class="cover-card">
            <span class="cover-card__label">Profile</span>
            <strong>10+ years in IT</strong>
          </div>
          <div class="cover-card">
            <span class="cover-card__label">Core Stack</span>
            <strong>AWS / Terraform / ECS / Kubernetes</strong>
          </div>
        </div>

        <div class="cover__actions">
          <a class="button button--primary" href="#capabilities">Read the Resume</a>
          <a class="button button--ghost" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">Open LinkedIn</a>
        </div>
      </div>
    </section>

    <section class="ribbon">
      <span>Automation without operational theater</span>
      <span>Infrastructure choices that fit the team</span>
      <span>Observability as a decision tool</span>
    </section>

    <section class="feature-grid" id="capabilities">
      <article class="feature feature--primary">
        <p class="section-tag">Perspective</p>
        <h2>Systems thinking, not tool collecting.</h2>
        <p>
          Public profile data suggests a hands-on operator working close to real runtime
          systems: delivery paths, cloud infrastructure, production behavior, and the
          guardrails teams need as services scale.
        </p>
        <p>
          This is less about hype cycles and more about making infrastructure predictable,
          maintainable, and legible under pressure.
        </p>
      </article>

      <article class="feature">
        <p class="section-tag">Strengths</p>
        <h2>Where the value shows up</h2>
        <ul class="editorial-list">
          <li>Turning manual infrastructure work into repeatable flows</li>
          <li>Keeping cloud systems operable as complexity grows</li>
          <li>Choosing architecture for team fit, not just trend fit</li>
          <li>Building monitoring around actionability</li>
        </ul>
      </article>

      <article class="feature">
        <p class="section-tag">Themes</p>
        <h2>Visible stack and public topics</h2>
        <div class="tag-rack">
          <span>AWS</span>
          <span>Terraform</span>
          <span>ECS</span>
          <span>Kubernetes</span>
          <span>Observability</span>
          <span>Monitoring</span>
          <span>Logging</span>
          <span>Automation</span>
        </div>
      </article>

      <article class="feature feature--timeline">
        <p class="section-tag">Resume Narrative</p>
        <h2>How the work reads on the page</h2>
        <div class="timeline">
          <div class="timeline__entry">
            <span class="timeline__index">01</span>
            <div>
              <h3>Cloud platform ownership</h3>
              <p>Operating production environments that need resilience, clarity, and sane defaults.</p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">02</span>
            <div>
              <h3>Automation-first delivery</h3>
              <p>Reducing repetitive operational work with infrastructure as code and repeatable deployment paths.</p>
            </div>
          </div>
          <div class="timeline__entry">
            <span class="timeline__index">03</span>
            <div>
              <h3>Production feedback loops</h3>
              <p>Using logs, metrics, and alerts to make systems easier to run and faster to debug.</p>
            </div>
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
