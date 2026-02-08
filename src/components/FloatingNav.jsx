function FloatingNav({ activeSection, onNavigate, sections }) {
    const navItems = [
        { id: 'hero', icon: '⬡', label: 'Home' },
        { id: 'about', icon: '◈', label: 'About' },
        { id: 'skills', icon: '✧', label: 'Skills' },
        { id: 'journey', icon: '◉', label: 'Journey' },
        { id: 'projects', icon: '⬢', label: 'Projects' },
        { id: 'connect', icon: '◎', label: 'Connect' }
    ]

    return (
        <nav className="floating-nav">
            {navItems.map((item) => (
                <div
                    key={item.id}
                    className={`nav-orb ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => onNavigate(item.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && onNavigate(item.id)}
                    aria-label={`Navigate to ${item.label}`}
                >
                    <span className="orb-icon">{item.icon}</span>
                    <span className="orb-label">{item.label}</span>
                </div>
            ))}
        </nav>
    )
}

export default FloatingNav
