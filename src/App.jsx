import './App.css'

function App() {
  return (
    <div className="portfolio">
      {/* Header Section */}
      <header className="header">
        <div className="container">
          <h1>Shun Hoshioka</h1>
          <p className="tagline">Salesforce Engineer | Full Stack Developer</p>
        </div>
      </header>

      {/* About Section */}
      <section className="section about">
        <div className="container">
          <h2>About Me</h2>
          <p>
            Salesforceエンジニアとして3年目に突入。フルスタック開発が可能で、
            Apex、Visualforce、React、Azure OpenAI連携など幅広い技術に対応できます。
            副業案件を通じて、さらなる技術的成長を目指しています。
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section skills">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Salesforce</h3>
              <ul>
                <li>Apex</li>
                <li>Visualforce</li>
                <li>Lightning Web Components</li>
                <li>Salesforce API Integration</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Frontend</h3>
              <ul>
                <li>React</li>
                <li>HTML/CSS/JavaScript</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>REST API</li>
                <li>Python (Data Analysis)</li>
              </ul>
            </div>
            <div className="skill-category">
              <h3>Tools & Others</h3>
              <ul>
                <li>Git/GitHub</li>
                <li>VS Code</li>
                <li>Azure OpenAI</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section projects">
        <div className="container">
          <h2>Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Coming Soon</h3>
              <p>現在、ポートフォリオプロジェクトを開発中です。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section contact">
        <div className="container">
          <h2>Contact</h2>
          <p>GitHub: <a href="https://github.com/S-Hoshioka" target="_blank" rel="noopener noreferrer">@S-Hoshioka</a></p>
          <p>副業案件のご相談、お気軽にお問い合わせください。</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Shun Hoshioka. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
