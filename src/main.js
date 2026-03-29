import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="ambient ambient-a" aria-hidden="true"></div>
  <div class="ambient ambient-b" aria-hidden="true"></div>
  <div class="grain" aria-hidden="true"></div>

  <main class="shell">
    <section class="hero">
      <div class="hero__topline">
        <span>Vladimir Kozlov</span>
        <span>Cloud / DevOps / Platform</span>
        <span>Podgorica, Montenegro</span>
      </div>

      <div class="hero__body">
        <div class="hero__copy panel panel--hero">
          <p class="kicker">Resume Signal / 2026 Edition</p>
          <h1>
            CYBERPUNK
            <span>but make it editorial.</span>
          </h1>
          <p class="lead">
            Infrastructure, automation, and cloud systems with a cleaner visual language:
            bold type, atmospheric depth, and a resume that feels like a product launch.
          </p>

          <div class="hero__actions">
            <a class="button button--primary" href="#resume">Open Resume</a>
            <a class="button button--ghost" href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <aside class="hero__stats">
          <article class="panel stat-card stat-card--accent">
            <span class="stat-card__label">Experience</span>
            <strong>10+ years</strong>
            <p>IT systems, cloud operations, automation, delivery.</p>
          </article>

          <article class="panel stat-card">
            <span class="stat-card__label">Primary Signal</span>
            <strong>AWS / IaC / Observability</strong>
            <p>Platforms designed to stay readable, reliable, and scalable.</p>
          </article>

          <article class="panel stat-card">
            <span class="stat-card__label">Public Presence</span>
            <strong>500+ connections</strong>
            <p>LinkedIn profile with visible writing on Terraform, ECS, monitoring, and DevOps.</p>
          </article>
        </aside>
      </div>
    </section>

    <section class="ticker" aria-label="Core themes">
      <div class="ticker__track">
        <span>Terraform Drift</span>
        <span>AWS ECS</span>
        <span>Monitoring Strategy</span>
        <span>Cloud Automation</span>
        <span>Platform Reliability</span>
        <span>Kubernetes</span>
        <span>Infrastructure as Code</span>
        <span>Terraform Drift</span>
        <span>AWS ECS</span>
        <span>Monitoring Strategy</span>
      </div>
    </section>

    <section id="resume" class="bento">
      <article class="panel bento-card bento-card--xl">
        <p class="kicker">About</p>
        <h2>Built for teams that want less chaos and more leverage.</h2>
        <p>
          The public profile suggests a hands-on engineer who treats automation as a force multiplier,
          not a slogan. The through-line is practical platform work: improving delivery, reducing drift,
          and making production systems easier to reason about.
        </p>
        <p>
          Instead of presenting DevOps as pure tooling, this resume frames it as systems thinking:
          infrastructure that scales with the product and with the team operating it.
        </p>
      </article>

      <article class="panel bento-card">
        <p class="kicker">Focus</p>
        <h2>What I optimize for</h2>
        <ul class="stack-list">
          <li>Automation that removes repetitive operational load</li>
          <li>Cloud setups that stay maintainable as complexity grows</li>
          <li>Monitoring that reflects real production behavior</li>
          <li>Infrastructure choices that fit the team, not just the trend</li>
        </ul>
      </article>

      <article class="panel bento-card bento-card--accent">
        <p class="kicker">Style</p>
        <h2>Operator profile</h2>
        <ul class="bullet-list">
          <li>Pragmatic over theatrical</li>
          <li>Strong on infrastructure clarity</li>
          <li>Comfortable close to runtime systems</li>
          <li>Bias toward observable delivery pipelines</li>
        </ul>
      </article>

      <article class="panel bento-card">
        <p class="kicker">Stack</p>
        <h2>Publicly visible themes</h2>
        <div class="tag-cloud">
          <span>AWS</span>
          <span>Terraform</span>
          <span>ECS</span>
          <span>Kubernetes</span>
          <span>Observability</span>
          <span>Logging</span>
          <span>Monitoring</span>
          <span>Automation</span>
          <span>DevOps</span>
          <span>Platform</span>
        </div>
      </article>

      <article class="panel bento-card bento-card--wide">
        <p class="kicker">Experience Narrative</p>
        <h2>Resume in motion</h2>
        <div class="timeline">
          <div class="timeline__entry">
            <span class="timeline__index">01</span>
            <div>
              <h3>Cloud systems and platform ownership</h3>
              <p>Operating production environments with attention to scale, resilience, and sane defaults.</p>
            </div>
          </div>

          <div class="timeline__entry">
            <span class="timeline__index">02</span>
            <div>
              <h3>Automation-first delivery</h3>
              <p>Replacing manual infrastructure work with repeatable pipelines and clearer operational flow.</p>
            </div>
          </div>

          <div class="timeline__entry">
            <span class="timeline__index">03</span>
            <div>
              <h3>Observability as product quality</h3>
              <p>Using metrics, logs, and alerting as decision tools rather than decorative checkboxes.</p>
            </div>
          </div>
        </div>
      </article>

      <article class="panel bento-card">
        <p class="kicker">Contact</p>
        <h2>Best entry point</h2>
        <div class="contact-block">
          <a href="https://www.linkedin.com/in/vladimir-kozlov-5268b8a8/" target="_blank" rel="noreferrer">linkedin.com/in/vladimir-kozlov-5268b8a8</a>
          <a href="https://lizaisyourfriend.lol/cv/" target="_blank" rel="noreferrer">lizaisyourfriend.lol/cv</a>
        </div>
      </article>
    </section>
  </main>
`
