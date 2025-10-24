import React, { createContext, useContext, useState, useEffect } from 'react'

const ParticleContext = createContext()

export const useParticles = () => {
  const context = useContext(ParticleContext)
  if (!context) {
    throw new Error('useParticles must be used within ParticleProvider')
  }
  return context
}

export const ParticleProvider = ({ children }) => {
  const [particlesEnabled, setParticlesEnabled] = useState(() => {
    // Load from localStorage, default to true
    const saved = localStorage.getItem('particlesEnabled')
    return saved !== null ? JSON.parse(saved) : true
  })

  useEffect(() => {
    // Save to localStorage whenever it changes
    localStorage.setItem('particlesEnabled', JSON.stringify(particlesEnabled))
  }, [particlesEnabled])

  const toggleParticles = () => {
    setParticlesEnabled(prev => !prev)
  }

  return (
    <ParticleContext.Provider value={{ particlesEnabled, toggleParticles }}>
      {children}
    </ParticleContext.Provider>
  )
}
