import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import CircuitBackground from '../components/common/CircuitBackground.jsx'
import Button from '../components/common/Button.jsx'
import useCountdown from '../hooks/useCountdown.js'
import { events } from '../data/events.js'

function Home() {
  const countdown = useCountdown('2026-09-11T10:00:00')
  const featured = events.slice(0, 3)

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 lg:px-8">
      <CircuitBackground />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 rounded-full bg-white/5 px-4 py-3 ring-1 ring-cyan-400/20 shadow-glow w-fit">
              <img src="/assets/college-logo.png" alt="Anna University" className="h-8 w-auto" />
              <div className="text-xs uppercase tracking-[0.3em] text-cyan-200">
                <p className="font-semibold">Anna University, TN</p>
                <p className="text-slate-400">UCE, Tindivanam</p>
              </div>
            </div>
            <div className="max-w-2xl space-y-5">
              <h1 className="text-5xl font-black tracking-[-0.04em] text-slate-100 sm:text-6xl">
                NEXTRON '26
              </h1>
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                A circuit-inspired, futuristic ECE symposium celebrating innovation, robotics, IoT and tech creativity at University College of Engineering, Tindivanam.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button as="link" to="/events" variant="primary" className="min-w-[160px]">
                  Explore Events
                </Button>
                <Button as="link" to="/about" variant="ghost" className="min-w-[160px] border border-slate-700 text-slate-100 hover:text-electric">
                  About NEXTRON
                </Button>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="rounded-[2rem] border border-cyan-400/10 bg-slate-900/80 p-8 shadow-glow"
          >
            <div className="text-sm uppercase tracking-[0.24em] text-cyan-200">Countdown to Opening</div>
            <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {['days', 'hours', 'minutes', 'seconds'].map((key) => (
                <div key={key} className="rounded-3xl bg-slate-950/90 p-4 text-center ring-1 ring-white/10">
                  <div className="text-4xl font-semibold text-slate-100">{countdown[key]}</div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-slate-500">{key}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[0.9fr_0.8fr]">
          <section className="space-y-5 rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">Highlights</p>
                <h2 className="mt-3 text-3xl font-semibold text-slate-100">NEXTRON at a glance</h2>
              </div>
              <Button variant="secondary">10 events live</Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-5 text-center ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Events</p>
                <p className="mt-3 text-3xl font-semibold text-slate-100">10</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 text-center ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Participants</p>
                <p className="mt-3 text-3xl font-semibold text-slate-100">150+</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5 text-center ring-1 ring-white/10">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Prize pool</p>
                <p className="mt-3 text-3xl font-semibold text-slate-100">₹30K+</p>
              </div>
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Featured events</p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-100">Top picks</h2>
              </div>
            </div>
            <div className="space-y-4">
              {featured.map((event) => (
                <div key={event.id} className="rounded-3xl border border-slate-800/70 bg-[#09121f] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-sm text-slate-400">{event.category}</p>
                      <h3 className="mt-2 text-xl font-semibold text-slate-100">{event.name}</h3>
                    </div>
                    <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs uppercase tracking-[0.24em] text-slate-400">{event.teamSize}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-400">{event.tagline}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default Home
