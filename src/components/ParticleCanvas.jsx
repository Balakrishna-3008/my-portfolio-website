import { useEffect, useRef } from 'react'

function ParticleCanvas() {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationId
        let time = 0
        let mouse = { x: null, y: null }
        let dataStreams = []
        let orbs = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            createElements()
        }

        const createElements = () => {
            // Create flowing data streams (vertical cyber lines)
            dataStreams = []
            const streamCount = Math.floor(canvas.width / 80)
            for (let i = 0; i < streamCount; i++) {
                dataStreams.push({
                    x: Math.random() * canvas.width,
                    segments: Array.from({ length: Math.floor(Math.random() * 8 + 4) }, () => ({
                        y: Math.random() * canvas.height,
                        speed: Math.random() * 1.5 + 0.5,
                        length: Math.random() * 60 + 20,
                        opacity: Math.random() * 0.3 + 0.1
                    }))
                })
            }

            // Create floating energy orbs
            orbs = []
            const orbCount = 6
            for (let i = 0; i < orbCount; i++) {
                orbs.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    radius: Math.random() * 150 + 100,
                    hue: i % 2 === 0 ? 190 : 195, // Cyan or Teal
                    speedX: (Math.random() - 0.5) * 0.3,
                    speedY: (Math.random() - 0.5) * 0.3,
                    phase: Math.random() * Math.PI * 2
                })
            }
        }

        const drawAuroraMesh = () => {
            // Create flowing aurora gradient mesh
            const gradient = ctx.createRadialGradient(
                canvas.width * 0.3, canvas.height * 0.2, 0,
                canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.8
            )

            const shift = Math.sin(time * 0.0005) * 0.5 + 0.5
            gradient.addColorStop(0, `rgba(0, 212, 255, ${0.03 + shift * 0.02})`)
            gradient.addColorStop(0.3, `rgba(123, 44, 191, ${0.02 + shift * 0.01})`)
            gradient.addColorStop(0.6, `rgba(177, 74, 237, ${0.02})`)
            gradient.addColorStop(1, 'transparent')

            ctx.fillStyle = gradient
            ctx.fillRect(0, 0, canvas.width, canvas.height)

            // Second aurora layer
            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.7 + Math.sin(time * 0.0003) * 100,
                canvas.height * 0.6 + Math.cos(time * 0.0004) * 50,
                0,
                canvas.width * 0.7, canvas.height * 0.6, canvas.width * 0.6
            )
            gradient2.addColorStop(0, `rgba(0, 180, 255, ${0.04})`)
            gradient2.addColorStop(0.5, `rgba(100, 0, 200, ${0.02})`)
            gradient2.addColorStop(1, 'transparent')

            ctx.fillStyle = gradient2
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        }

        const drawFloatingOrbs = () => {
            orbs.forEach((orb) => {
                // Mouse repulsion
                if (mouse.x && mouse.y) {
                    const dx = mouse.x - orb.x
                    const dy = mouse.y - orb.y
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    if (distance < 300) {
                        const force = (300 - distance) / 300
                        orb.x -= dx * force * 0.01
                        orb.y -= dy * force * 0.01
                    }
                }

                // Update position with floating motion
                orb.x += orb.speedX + Math.sin(time * 0.001 + orb.phase) * 0.3
                orb.y += orb.speedY + Math.cos(time * 0.0008 + orb.phase) * 0.2

                // Wrap around
                if (orb.x < -orb.radius) orb.x = canvas.width + orb.radius
                if (orb.x > canvas.width + orb.radius) orb.x = -orb.radius
                if (orb.y < -orb.radius) orb.y = canvas.height + orb.radius
                if (orb.y > canvas.height + orb.radius) orb.y = -orb.radius

                // Draw orb with glow
                const pulse = Math.sin(time * 0.002 + orb.phase) * 0.3 + 0.7
                const gradient = ctx.createRadialGradient(
                    orb.x, orb.y, 0,
                    orb.x, orb.y, orb.radius * pulse
                )
                gradient.addColorStop(0, `hsla(${orb.hue}, 100%, 60%, 0.15)`)
                gradient.addColorStop(0.4, `hsla(${orb.hue}, 100%, 50%, 0.05)`)
                gradient.addColorStop(1, 'transparent')

                ctx.fillStyle = gradient
                ctx.beginPath()
                ctx.arc(orb.x, orb.y, orb.radius * pulse, 0, Math.PI * 2)
                ctx.fill()
            })
        }

        const drawDataStreams = () => {
            dataStreams.forEach((stream) => {
                stream.segments.forEach((seg) => {
                    // Update y position
                    seg.y += seg.speed
                    if (seg.y > canvas.height + seg.length) {
                        seg.y = -seg.length
                    }

                    // Draw gradient line
                    const gradient = ctx.createLinearGradient(
                        stream.x, seg.y,
                        stream.x, seg.y + seg.length
                    )
                    gradient.addColorStop(0, 'transparent')
                    gradient.addColorStop(0.3, `rgba(0, 212, 255, ${seg.opacity})`)
                    gradient.addColorStop(0.7, `rgba(0, 212, 255, ${seg.opacity * 0.5})`)
                    gradient.addColorStop(1, 'transparent')

                    ctx.strokeStyle = gradient
                    ctx.lineWidth = 1
                    ctx.beginPath()
                    ctx.moveTo(stream.x, seg.y)
                    ctx.lineTo(stream.x, seg.y + seg.length)
                    ctx.stroke()
                })
            })
        }

        const drawGridMesh = () => {
            // Subtle perspective grid
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.03)'
            ctx.lineWidth = 1

            const gridSize = 80
            const horizonY = canvas.height * 0.4

            // Horizontal lines with perspective
            for (let i = 0; i < 15; i++) {
                const y = horizonY + Math.pow(i, 1.5) * 25
                if (y > canvas.height) break

                const alpha = 0.02 - (i * 0.001)
                if (alpha <= 0) continue

                ctx.strokeStyle = `rgba(0, 212, 255, ${alpha})`
                ctx.beginPath()
                ctx.moveTo(0, y)
                ctx.lineTo(canvas.width, y)
                ctx.stroke()
            }
        }

        const drawHexagonPattern = () => {
            // Floating hexagon accents
            const hexCount = 5
            ctx.strokeStyle = 'rgba(0, 212, 255, 0.05)'
            ctx.lineWidth = 1

            for (let i = 0; i < hexCount; i++) {
                const x = (canvas.width / hexCount) * i + canvas.width / hexCount / 2
                const y = canvas.height * 0.3 + Math.sin(time * 0.001 + i) * 30
                const size = 40 + Math.sin(time * 0.002 + i * 0.5) * 10

                ctx.beginPath()
                for (let j = 0; j < 6; j++) {
                    const angle = (j * Math.PI) / 3 - Math.PI / 6
                    const px = x + Math.cos(angle) * size
                    const py = y + Math.sin(angle) * size
                    if (j === 0) ctx.moveTo(px, py)
                    else ctx.lineTo(px, py)
                }
                ctx.closePath()
                ctx.stroke()
            }
        }

        const animate = () => {
            time++
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // Layer 1: Aurora mesh background
            drawAuroraMesh()

            // Layer 2: Subtle grid
            drawGridMesh()

            // Layer 3: Data streams (cyber effect)
            drawDataStreams()

            // Layer 4: Floating energy orbs
            drawFloatingOrbs()

            // Layer 5: Hexagon accents
            drawHexagonPattern()

            animationId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            mouse.x = e.clientX
            mouse.y = e.clientY
        }

        const handleMouseLeave = () => {
            mouse.x = null
            mouse.y = null
        }

        resize()
        animate()

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        window.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            cancelAnimationFrame(animationId)
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            window.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0
            }}
        />
    )
}

export default ParticleCanvas
