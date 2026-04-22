import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Benefits from './components/Benefits/Benefits'
import Plans from './components/Plans/Plans'
import Process from './components/Process/Process'
import FAQ from './components/FAQ/FAQ'
import CTA from './components/CTA/CTA'
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Benefits />
        <Plans />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  )
}

export default App