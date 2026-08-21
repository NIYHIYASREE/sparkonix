import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/layout/Footer.jsx'
import Navbar from './components/layout/Navbar.jsx'
import InteractiveWaterBackground from './components/common/InteractiveWaterBackground.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Events from './pages/Events.jsx'
import EventDetail from './pages/EventDetail.jsx'
import Gallery from './pages/Gallery.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './pages/Register.jsx'
import Team from './pages/Team.jsx'

function App() {
  const location = useLocation()

  return (
    <div className="app-shell min-h-screen text-slate-100">
      <InteractiveWaterBackground />
      <Navbar />
      <main className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/events/:eventId" element={<EventDetail />} />
            <Route path="/register/:eventId?" element={<Register />} />
            <Route path="/team" element={<Team />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

export default App
