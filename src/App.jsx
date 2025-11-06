import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-fuchsia-500/60 selection:text-white">
      <Navbar />
      <main className="[scrollbar-width:none] [--sb:8px]">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
