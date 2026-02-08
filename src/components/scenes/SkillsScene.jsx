function SkillsScene({ isActive }) {
    const skills = [
        {
            id: 'security',
            icon: '🛡️',
            label: 'Security Ops',
            primary: true,
            details: [
                'SOC Incident Response',
                'Phishing & Email Analysis',
                'Malware & URL Investigation',
                'DLP Management',
                'Endpoint Management'
            ]
        },
        {
            id: 'cloud',
            icon: '☁️',
            label: 'Cloud',
            details: ['AWS', 'GCP']
        },
        {
            id: 'identity',
            icon: '🔐',
            label: 'Identity',
            details: ['G Suite Admin', 'JumpCloud', 'SSO Workflows']
        },
        {
            id: 'tools',
            icon: '🔧',
            label: 'Security Tools',
            details: ['CloudSEK', 'Trend Micro', 'Zscaler', 'Burp Suite', 'Splunk/SIEM', 'CrowdStrike EDR', 'Cortex XSOAR']
        }
    ]

    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="skills">
            <div className="scene-content skills-scene">
                <div className="section-marker">
                    <span className="marker-line"></span>
                    <span className="marker-text">// My Expertise</span>
                </div>
                <h2 className="section-title">
                    Technical <span className="text-gradient">Skills</span>
                </h2>

                <div className="constellation-container">
                    {skills.map((skill) => (
                        <div
                            key={skill.id}
                            className={`skill-node ${skill.primary ? 'primary-node' : ''}`}
                            data-skill={skill.id}
                        >
                            <div className="node-ring"></div>
                            <div className="node-core">
                                <span className="node-icon">{skill.icon}</span>
                                <span className="node-label">{skill.label}</span>
                            </div>
                            <div className="skill-details">
                                <ul>
                                    {skill.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}

                    <svg className="constellation-lines" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <line className="star-line" x1="50" y1="15" x2="20" y2="45" />
                        <line className="star-line" x1="50" y1="15" x2="80" y2="45" />
                        <line className="star-line" x1="50" y1="15" x2="50" y2="75" />
                        <line className="star-line" x1="20" y1="45" x2="35" y2="75" />
                        <line className="star-line" x1="80" y1="45" x2="65" y2="75" />
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default SkillsScene
