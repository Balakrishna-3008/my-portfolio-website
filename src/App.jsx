import { useState, useEffect, useRef } from 'react'
import ParticleCanvas from './components/ParticleCanvas'
import FloatingNav from './components/FloatingNav'
import FloatingLogo from './components/FloatingLogo'
import HeroScene from './components/scenes/HeroScene'
import AboutScene from './components/scenes/AboutScene'
import SkillsScene from './components/scenes/SkillsScene'
import JourneyScene from './components/scenes/JourneyScene'
import ProjectsScene from './components/scenes/ProjectsScene'
import ConnectScene from './components/scenes/ConnectScene'
import './App.css'

// Assets
import profilePhoto from './assets/profile-photo.jpg'
import hbLogo from './assets/hb-logo.png'

function App() {
    const [activeSection, setActiveSection] = useState('hero')
    const containerRef = useRef(null)

    const sections = ['hero', 'about', 'skills', 'journey', 'projects', 'connect']

    const navigateToSection = (sectionId) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    // Update active section based on scroll position
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight / 3

            for (const section of sections) {
                const element = document.getElementById(section)
                if (element) {
                    const { offsetTop, offsetHeight } = element
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        if (activeSection !== section) {
                            setActiveSection(section)
                        }
                        break
                    }
                }
            }
        }

        // Set initial active section
        handleScroll()

        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [activeSection])

    return (
        <div className="app" ref={containerRef}>
            <ParticleCanvas />
            <FloatingLogo logo={hbLogo} />
            <FloatingNav
                activeSection={activeSection}
                onNavigate={navigateToSection}
                sections={sections}
            />

            <main className="scene-container">
                <HeroScene
                    isActive={true}
                    profilePhoto={profilePhoto}
                    onNavigate={navigateToSection}
                />
                <AboutScene
                    isActive={true}
                    profilePhoto={profilePhoto}
                />
                <SkillsScene isActive={true} />
                <JourneyScene isActive={true} />
                <ProjectsScene isActive={true} />
                <ConnectScene isActive={true} />
            </main>
        </div>
    )
}

export default App
