import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero/Hero'
import ProblemSection from './components/Problem/ProblemSection'
import SolutionSection from './components/Solution/SolutionSection'
import ImpactSection from './components/Impact/ImpactSection'
import WaitlistSection from './components/Waitlist/WaitlistSection'
import Footer from './components/Footer/Footer'
import ParticleToggle from './components/common/ParticleToggle'
import { ParticleProvider } from './context/ParticleContext'
import { initEmailJS } from './utils/emailService'

function App() {
  useEffect(() => {
    // Initialize EmailJS on app mount
    initEmailJS()
  }, [])

  return (
    <ParticleProvider>
      <div className="app min-h-screen">
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ImpactSection />
        <WaitlistSection />
        <Footer />
        <ParticleToggle />
      </div>
    </ParticleProvider>
  )
}

export default App
