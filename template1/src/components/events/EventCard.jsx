import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Badge from '../common/Badge.jsx'

function EventCard({ event, index = 0 }) {
  const colorMap = {
    Technical: 'cyan',
    'Non-Technical': 'gold'
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-glow transition-colors duration-300 hover:border-cyan-300/40"
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-28 w-28 rounded-full border border-cyan-300/20 transition-transform duration-500 group-hover:scale-150" />
      <div className="mb-5 flex items-center justify-between gap-3">
        <Badge label={event.category} color={colorMap[event.category] || 'cyan'} />
        <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">{event.teamSize}</span>
      </div>
      <div className="mb-4 space-y-2">
        <h3 className="text-xl font-semibold text-slate-100">{event.name}</h3>
        <p className="text-sm text-slate-400">{event.tagline}</p>
      </div>
      <p className="mb-6 text-sm leading-6 text-slate-400">{event.description}</p>

      <div className="mb-6 border-t border-slate-800/80 pt-4">
        <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Coordinators</p>
        <p className="mt-2 text-sm text-slate-200">{event.coordinators.length ? event.coordinators.join(' · ') : 'To be announced'}</p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link to={`/events/${event.id}`} className="text-sm font-semibold text-cyan-200 hover:text-cyan-100">
          View Details
        </Link>
        <Link
          to={`/register/${event.id}`}
          className="inline-flex items-center justify-center rounded-full bg-electric px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Register
        </Link>
      </div>
    </motion.article>
  )
}

export default EventCard
