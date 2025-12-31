import React, { useCallback, useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import { useParticles } from '../../context/ParticleContext'

const ParticleBackground = ({ id = 'tsparticles' }) => {
  const { particlesEnabled } = useParticles()
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])


  const particlesConfig = {
    fullScreen: {
      enable: false
    },
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: ['#348fbb', '#3bc4e7']
      },
      links: {
        color: '#348fbb',
        distance: 150,
        enable: true,
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: false,
        straight: false,
        outModes: {
          default: 'bounce'
        }
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.6
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 2, max: 4 }
      }
    },
    detectRetina: true
  }

  // Don't render anything if particles are disabled
  if (!particlesEnabled) {
    return null
  }

  return (
    <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
      {init && (
        <Particles
          id={id}
          options={particlesConfig}
          className="w-full h-full"
        />
      )}
    </div>
  )
}

export default ParticleBackground
