import { useRef } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Demo from './components/Demo'
import CTA from './components/CTA'

function App() {
  const demoRef = useRef(null)

  const scrollToDemo = () => {
    document.querySelector('#demo')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero onStart={scrollToDemo} />
      <Features />
      <Demo ref={demoRef} />
      <CTA />
    </div>
  )
}

export default App
