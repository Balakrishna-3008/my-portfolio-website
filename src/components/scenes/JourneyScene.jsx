function JourneyScene({ isActive }) {
    const experiences = [
        {
            id: 1,
            current: true,
            date: 'May 2024 - Present',
            title: 'Information Security Analyst',
            company: 'Acko',
            details: [
                'Investigate phishing, fake URL, and suspicious email alerts',
                'Manage SOC tickets end-to-end',
                'Implement and monitor DLP rules',
                'Automated SSO access provisioning for users',
                'Automated ID creation from ITSM tool',
                'Automated complete offboarding process with automated ticket creation and access suspension'
            ]
        },
        {
            id: 2,
            date: 'Oct 2023 - Apr 2024',
            title: 'Cloud Engineer',
            company: 'Infologix Technologies',
            details: [
                'Supported enterprise application access',
                'Assisted with SSO provisioning workflows'
            ]
        },
        {
            id: 3,
            education: true,
            date: '2018 - 2022',
            title: 'B.E. Electronics & Communication',
            company: 'SJC Institute of Technology',
            achievement: 'CGPA: 9.1'
        }
    ]

    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="journey">
            <div className="scene-content journey-scene">
                <div className="section-marker">
                    <span className="marker-line"></span>
                    <span className="marker-text">// Career Journey</span>
                </div>
                <h2 className="section-title">
                    Professional <span className="text-gradient">Experience</span>
                </h2>

                <div className="nebula-timeline">
                    <div className="timeline-path">
                        <div className="path-glow"></div>
                    </div>

                    {experiences.map((exp) => (
                        <div
                            key={exp.id}
                            className={`timeline-station ${exp.current ? 'current' : ''} ${exp.education ? 'education' : ''}`}
                        >
                            <div className="station-marker">
                                {exp.current && <div className="marker-pulse"></div>}
                                <div className="marker-core"></div>
                            </div>
                            <div className="station-content glass-card">
                                <span className={`station-date ${exp.education ? 'education-badge' : ''}`}>
                                    {exp.date}
                                </span>
                                <h3 className="station-title">{exp.title}</h3>
                                <p className="station-company">{exp.company}</p>
                                {exp.details && (
                                    <ul className="station-details">
                                        {exp.details.map((detail, idx) => (
                                            <li key={idx}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                                {exp.achievement && (
                                    <p className="station-achievement">{exp.achievement}</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default JourneyScene
