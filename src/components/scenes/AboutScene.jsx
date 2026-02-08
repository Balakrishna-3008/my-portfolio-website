function AboutScene({ isActive, profilePhoto }) {
    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="about">
            <div className="scene-content about-scene">
                <div className="section-marker">
                    <span className="marker-line"></span>
                    <span className="marker-text">// About Me</span>
                </div>
                <div className="about-layout">
                    <div className="about-visual">
                        <div className="about-frame">
                            <div className="frame-corner tl"></div>
                            <div className="frame-corner tr"></div>
                            <div className="frame-corner bl"></div>
                            <div className="frame-corner br"></div>
                            <img src={profilePhoto} alt="Balakrishna A" className="about-img" />
                        </div>
                    </div>
                    <div className="about-content">
                        <h2 className="about-title">
                            Professional <span className="text-gradient">Summary</span>
                        </h2>
                        <div className="about-cards">
                            <div className="glass-card">
                                <p>
                                    Information Security Analyst with hands-on experience in <strong>SOC operations</strong>, <strong>phishing investigations</strong>, <strong>email security</strong>, security tooling, and operational security automation.
                                </p>
                            </div>
                            <div className="glass-card">
                                <p>
                                    Passionate about <strong>cloud security</strong> and <strong>web application security</strong>, actively strengthening skills through hands-on labs and real-world simulations.
                                </p>
                            </div>
                            <div className="glass-card highlight-card">
                                <div className="card-icon">🎯</div>
                                <div className="card-content">
                                    <h4>Career Goal</h4>
                                    <p>Cloud Security Engineer / Detection Engineer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutScene
