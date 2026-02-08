function ProjectsScene({ isActive }) {
    const projects = [
        {
            id: 1,
            icon: '🔍',
            title: 'Domain Analyzer Tool',
            description: 'Built a comprehensive tool to analyze domain reputation, legitimacy, and phishing indicators for SOC investigations.',
            tech: ['Domain Analysis', 'Threat Intel'],
            link: 'https://soc-domain-intel.web.app/'
        },
        {
            id: 2,
            icon: '🎣',
            title: 'Phishing Awareness Campaign',
            description: 'Built a phishing awareness campaign using Gupshup to educate employees about identifying suspicious emails and social engineering tactics.',
            tech: ['Gupshup', 'Security Training']
        },
        {
            id: 3,
            icon: '🔐',
            title: 'SSO Access Automation',
            description: 'Automated SSO application access through ticketing workflows using Apps Script and APIs.',
            tech: ['Apps Script', 'REST APIs']
        }
    ]

    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="projects">
            <div className="scene-content projects-scene">
                <div className="section-marker">
                    <span className="marker-line"></span>
                    <span className="marker-text">// Featured Work</span>
                </div>
                <h2 className="section-title">
                    Featured <span className="text-gradient">Projects</span>
                </h2>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card holographic magnetic">
                            <div className="card-reflection"></div>
                            <div className="project-icon-container">
                                <span className="project-icon">{project.icon}</span>
                                <div className="icon-glow"></div>
                            </div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>
                            <div className="project-stack">
                                {project.tech.map((tech, idx) => (
                                    <span key={idx} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            {project.link && (
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="project-link"
                                >
                                    <span>View Live</span>
                                    <span className="link-arrow">→</span>
                                </a>
                            )}
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ProjectsScene
