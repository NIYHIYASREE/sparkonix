import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getEventById, getEvents } from '../services/api.js'
import Badge from '../components/common/Badge.jsx'
import Button from '../components/common/Button.jsx'

function EventDetail() {
  const { eventId } = useParams()
  const [event, setEvent] = useState(null)
  const [related, setRelated] = useState([])

  useEffect(() => {
    async function load() {
      const data = await getEventById(eventId)
      const all = await getEvents()
      setEvent(data)
      setRelated(all.filter((item) => item.id !== eventId).slice(0, 3))
    }
    load()
  }, [eventId])

  if (!event) {
    return (
      <section className="px-6 pt-28 pb-20 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-slate-400">Loading event details…</div>
      </section>
    )
  }

  const categoryColor = {
    Technical: 'cyan',
    'Non-Technical': 'gold'
  }

  return (
    <section className="px-6 pt-28 pb-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <div className="mb-6 flex flex-wrap items-center gap-4">
              <Badge label={event.category} color={categoryColor[event.category] || 'cyan'} />
              <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs text-slate-300">{event.teamSize}</span>
            </div>
            <h1 className="text-4xl font-bold text-slate-100">{event.name}</h1>
            <p className="mt-4 text-slate-400">{event.description}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-500">Venue</p>
                <p className="mt-2 text-base text-slate-100">{event.venue}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-500">Date</p>
                <p className="mt-2 text-base text-slate-100">{event.date}</p>
              </div>
              <div className="rounded-3xl bg-slate-900/80 p-5">
                <p className="text-sm text-slate-500">Time</p>
                <p className="mt-2 text-base text-slate-100">{event.time}</p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
              <h2 className="text-2xl font-semibold text-slate-100">Event rules</h2>
              <ul className="mt-5 space-y-3 text-slate-400">
                {event.rules.map((rule) => (
                  <li key={rule} className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-2.5 w-2.5 rounded-full bg-electric" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            <aside className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
              <h2 className="text-2xl font-semibold text-slate-100">Quick actions</h2>
              <div className="mt-6 space-y-4">
                <Button as="link" to={`/register/${event.id}`} variant="primary" className="w-full py-4">
                Register Now
              </Button>
                <div className="rounded-3xl bg-slate-900/80 p-5">
                  <p className="text-sm text-slate-500">Prize</p>
                  <p className="mt-2 text-lg font-semibold text-slate-100">{event.prize}</p>
                </div>
              </div>
            </aside>
          </div>

          <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">Coordinators</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {(event.coordinators.length ? event.coordinators : ['To be announced']).map((name) => (
                <div key={name} className="rounded-3xl bg-slate-900/80 p-6">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Student Coordinator</p>
                  <p className="mt-3 font-semibold text-slate-100">{name}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-[2rem] border border-slate-800/80 bg-slate-950/80 p-8 shadow-glow">
            <h2 className="text-2xl font-semibold text-slate-100">Related events</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {related.map((item) => (
                <Link
                  key={item.id}
                  to={`/events/${item.id}`}
                  className="rounded-3xl bg-slate-900/70 p-5 transition hover:border-slate-700/90 hover:bg-slate-900/90"
                >
                  <p className="text-sm text-slate-400">{item.category}</p>
                  <p className="mt-3 text-lg font-semibold text-slate-100">{item.name}</p>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default EventDetail
