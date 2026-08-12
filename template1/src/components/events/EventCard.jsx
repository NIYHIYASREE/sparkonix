import { Link } from 'react-router-dom'
import Badge from '../common/Badge.jsx'

function EventCard({ event }) {
  const colorMap = {
    Tech: 'cyan',
    'Core-ECE': 'green',
    IoT: 'purple',
    'IoT/Robotics': 'purple',
    'Non-Tech': 'gold'
  }

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6 shadow-glow transition-transform duration-300 hover:-translate-y-1 hover:border-cyan-300/40">
      <div className="mb-5 flex items-center justify-between gap-3">
        <Badge label={event.category} color={colorMap[event.category] || 'cyan'} />
        <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">{event.teamSize}</span>
      </div>
      <div className="mb-4 space-y-2">
        <h3 className="text-xl font-semibold text-slate-100">{event.name}</h3>
        <p className="text-sm text-slate-400">{event.tagline}</p>
      </div>
      <p className="mb-6 text-sm leading-6 text-slate-400">{event.description}</p>

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
    </article>
  )
}

export default EventCard
