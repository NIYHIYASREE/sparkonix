import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Events', path: '/events' },
  { label: 'Team', path: '/team' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' }
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
        scrolled ? 'backdrop-blur-xl bg-slate-950/90 border-slate-800/80 shadow-glow' : 'bg-transparent border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/college-logo.png" alt="Anna University Logo" className="h-10 w-auto" />
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-cyan-300 uppercase tracking-[0.2em]">NEXTRON '26</span>
            <span className="hidden text-xs text-slate-400 sm:block">University College of Engineering, Tindivanam</span>
            <span className="text-xs text-slate-400 sm:hidden">UCE Tindivanam</span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-sm transition-colors duration-200 ${
                  isActive ? 'text-cyan-200' : 'text-slate-300 hover:text-cyan-200'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="relative z-50 rounded-xl border border-slate-700/80 bg-slate-900/80 p-2 text-cyan-200 transition hover:border-cyan-300/60 md:hidden"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <motion.nav
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-cyan-400/10 bg-slate-950/95 px-6 py-5 shadow-glow md:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm transition ${isActive ? 'bg-cyan-400/10 text-cyan-200' : 'text-slate-300 hover:bg-slate-900 hover:text-cyan-200'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}

export default Navbar
