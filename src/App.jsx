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
    const [isTransitioning, setIsTransitioning] = useState(false)
    const containerRef = useRef(null)

    const sections = ['hero', 'about', 'skills', 'journey', 'projects', 'connect']

    const navigateToSection = (sectionId) => {
        if (isTransitioning || sectionId === activeSection) return

        setIsTransitioning(true)

        // Smooth transition
        setTimeout(() => {
            setActiveSection(sectionId)
            setTimeout(() => {
                setIsTransitioning(false)
            }, 600)
        }, 300)
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e) => {
            const currentIndex = sections.indexOf(activeSection)

            if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
                if (currentIndex < sections.length - 1) {
                    navigateToSection(sections[currentIndex + 1])
                }
            } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
                if (currentIndex > 0) {
                    navigateToSection(sections[currentIndex - 1])
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [activeSection, isTransitioning])

    // Wheel navigation with debounce
    useEffect(() => {
        let wheelTimeout = null

        const handleWheel = (e) => {
            if (wheelTimeout) return

            wheelTimeout = setTimeout(() => {
                wheelTimeout = null
            }, 1000)

            const currentIndex = sections.indexOf(activeSection)

            if (e.deltaY > 0 && currentIndex < sections.length - 1) {
                navigateToSection(sections[currentIndex + 1])
            } else if (e.deltaY < 0 && currentIndex > 0) {
                navigateToSection(sections[currentIndex - 1])
            }
        }

        window.addEventListener('wheel', handleWheel, { passive: true })
        return () => window.removeEventListener('wheel', handleWheel)
    }, [activeSection, isTransitioning])

    return (
        <div className="app" ref={containerRef}>
            <ParticleCanvas />
            <FloatingLogo logo={hbLogo} />
            <FloatingNav
                activeSection={activeSection}
                onNavigate={navigateToSection}
                sections={sections}
            />

            <main className={`scene-container ${isTransitioning ? 'transitioning' : ''}`}>
                <HeroScene
                    isActive={activeSection === 'hero'}
                    profilePhoto={profilePhoto}
                    onNavigate={navigateToSection}
                />
                <AboutScene
                    isActive={activeSection === 'about'}
                    profilePhoto={profilePhoto}
                />
                <SkillsScene isActive={activeSection === 'skills'} />
                <JourneyScene isActive={activeSection === 'journey'} />
                <ProjectsScene isActive={activeSection === 'projects'} />
                <ConnectScene isActive={activeSection === 'connect'} />
            </main>
        </div>
    )
}

export default App
