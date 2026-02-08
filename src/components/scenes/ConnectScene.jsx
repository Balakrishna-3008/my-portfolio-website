function ConnectScene({ isActive }) {
    const contacts = [
        {
            id: 'email',
            icon: '📧',
            text: 'balakrishna144a@gmail.com',
            href: 'mailto:balakrishna144a@gmail.com'
        },
        {
            id: 'phone',
            icon: '📱',
            text: '+91 9380083269',
            href: 'tel:+919380083269'
        },
        {
            id: 'linkedin',
            icon: '💼',
            text: 'LinkedIn Profile',
            href: 'https://www.linkedin.com/in/balakrishna-a-391674214',
            external: true
        }
    ]

    return (
        <section className={`scene ${isActive ? 'active' : ''}`} id="connect">
            <div className="scene-content connect-scene">
                <div className="section-marker">
                    <span className="marker-line"></span>
                    <span className="marker-text">// Get In Touch</span>
                </div>
                <h2 className="section-title">
                    Let's <span className="text-gradient">Connect</span>
                </h2>

                <div className="contact-orbs">
                    {contacts.map((contact) => (
                        <a
                            key={contact.id}
                            href={contact.href}
                            className="contact-orb magnetic"
                            target={contact.external ? '_blank' : undefined}
                            rel={contact.external ? 'noopener noreferrer' : undefined}
                        >
                            <div className="orb-glow"></div>
                            <span className="orb-icon-large">{contact.icon}</span>
                            <span className="orb-text">{contact.text}</span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ConnectScene
