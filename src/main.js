import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="backdrop backdrop--a" aria-hidden="true"></div>
  <div class="backdrop backdrop--b" aria-hidden="true"></div>
  <div class="grid-glow" aria-hidden="true"></div>

  <main class="site-shell">
    <header class="topbar">
      <div class="brand">Vladimir Kozlov</div>
      <nav class="topnav">
        <a href="#profile">Profile</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>

    <section class="hero" id="profile">
      <div class="hero__main panel">
        <p class="eyebrow">Cyberpunk Resume</p>
        <h1>Cloud systems with a human operating manual.</h1>
        <p class="hero__lede">
          Senior infrastructure and automation profile with 10+ years in IT. Focused on
          cloud platforms, delivery flows, observability, and infrastructure that stays
          understandable when systems get big.
        </p>

        <div class="hero__meta">
          <div>
            <span class="meta-label">Location</span>
            <strong>Podgorica, Montenegro</strong>
          </div>
          <div>
            <span class="meta-label">Core Stack</span>
            <strong>AWS, Terraform, ECS, Kubernetes</strong>
          </div>
        </div>

        <div class="hero__actions">
          <a class="button button--primary" href="#experience">Explore Resume</a>
          <a class="button button--secondary" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>

      <aside class="hero__side">
        <article class="signal-card panel">
          <span class="signal-card__kicker">Profile Signal</span>
          <strong>10+ years in IT</strong>
          <p>Automation, cloud operations, infrastructure as code, and platform reliability.</p>
        </article>

        <article class="signal-card panel">
          <span class="signal-card__kicker">Public Themes</span>
          <ul class="signal-list">
            <li>Terraform drift</li>
            <li>AWS ECS pragmatism</li>
            <li>Monitoring strategy</li>
            <li>Current-state DevOps</li>
          </ul>
        </article>
      </aside>
    </section>

    <section class="strip panel">
      <div>Infrastructure that scales with the team</div>
      <div>Automation without operational chaos</div>
      <div>Observability as a real engineering tool</div>
    </section>

    <section class="layout" id="experience">
      <article class="panel story story--wide">
        <p class="eyebrow">About</p>
        <h2>Platform work over buzzwords.</h2>
        <p>
          The public profile points to a practitioner who works close to real systems:
          delivery pipelines, cloud infrastructure, runtime behavior, and the guardrails
          teams need once products leave the comfort of small scale.
        </p>
        <p>
          The strongest signal is practical judgment. Not “use every trendy tool”, but
          “pick the right level of complexity, automate it, and make it visible.”
        </p>
      </article>

      <article class="panel story">
        <p class="eyebrow">Strengths</p>
        <h2>Where value shows up</h2>
        <ul class="detail-list">
          <li>Turning manual infrastructure work into repeatable flows</li>
          <li>Keeping cloud systems operable as services grow</li>
          <li>Choosing team-fit architecture instead of hype-fit architecture</li>
          <li>Building monitoring around decision-making, not decoration</li>
        </ul>
      </article>

      <article class="panel story">
        <p class="eyebrow">Tooling</p>
        <h2>Visible stack</h2>
        <div class="pill-grid">
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

      <article class="panel story story--wide">
        <p class="eyebrow">Experience Narrative</p>
        <h2>How the work reads</h2>
        <div class="timeline">
          <div class="timeline__item">
            <span class="timeline__index">01</span>
            <div>
              <h3>Cloud platform ownership</h3>
              <p>Operating and shaping runtime environments that need resilience, clarity, and sane defaults.</p>
            </div>
          </div>
          <div class="timeline__item">
            <span class="timeline__index">02</span>
            <div>
              <h3>Automation-first delivery</h3>
              <p>Reducing repetitive operational work with infrastructure as code and repeatable deployment paths.</p>
            </div>
          </div>
          <div class="timeline__item">
            <span class="timeline__index">03</span>
            <div>
              <h3>Production feedback loops</h3>
              <p>Using logging, metrics, and alerts to make systems easier to run and teams quicker to react.</p>
            </div>
          </div>
        </div>
      </article>
    </section>

    <section class="contact panel" id="contact">
      <div>
        <p class="eyebrow">Contact</p>
        <h2>Best place to reach out</h2>
      </div>
      <div class="contact__links">
        <a href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">linkedin.com/in/vladimir-kozlov-5268b8a8</a>
        <a href="https://lizaisyourfriend.lol/cv/" target="_blank" rel="noreferrer">lizaisyourfriend.lol/cv</a>
      </div>
    </section>
  </main>
`
