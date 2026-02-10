function HeroScene({ isActive, profilePhoto, onNavigate }) {
    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="hero">
            <div className="scene-content hero-scene">
                <div className="hero-profile-frame">
                    <div className="profile-ring ring-outer"></div>
                    <div className="profile-ring ring-middle"></div>
                    <div className="profile-ring ring-inner"></div>
                    <div className="profile-glow"></div>
                    <img src={profilePhoto} alt="Balakrishna A" className="hero-profile-img" />
                </div>
                <div className="hero-text-content">
                    <p className="hero-greeting">
                        <span className="greeting-line"></span>
                        <span className="greeting-text">Hello, I'm</span>
                    </p>
                    <h1 className="hero-name">
                        Balakrishna <span className="name-highlight">A</span>
                    </h1>
                    <div className="hero-title-container">
                        <div className="title-shield">🛡️</div>
                        <h2 className="hero-title">Information Security Analyst</h2>
                    </div>
                    <p className="hero-tagline">
                        Securing digital ecosystems through SOC operations, phishing investigations, and intelligent automation.
                    </p>
                    <div className="hero-actions">
                        <a
                            className="btn-primary magnetic"
                            href="#connect"
                            onClick={(e) => {
                                e.preventDefault()
                                onNavigate('connect')
                            }}
                        >
                            <span>Let's Connect</span>
                            <div className="btn-glow"></div>
                        </a>
                        <a
                            className="btn-secondary magnetic"
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault()
                                onNavigate('projects')
                            }}
                        >
                            <span>View Work</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <span className="scroll-text">Explore</span>
                <div className="scroll-line"></div>
            </div>
        </section>
    )
}

export default HeroScene
