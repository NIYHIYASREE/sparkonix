import { useMemo, useState } from 'react'
import EventCard from '../components/events/EventCard.jsx'
import { events } from '../data/events.js'
import Badge from '../components/common/Badge.jsx'

const categories = ['All', 'Tech', 'Non-Tech', 'IoT', 'Core-ECE', 'IoT/Robotics']

function Events() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredEvents = useMemo(() => {
    if (activeCategory === 'All') return events
    return events.filter((item) => item.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="px-6 pt-28 pb-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Event lineup</p>
          <h1 className="mt-4 text-4xl font-bold text-slate-100 sm:text-5xl">Explore all events</h1>
          <p className="mt-4 max-w-2xl text-slate-400">Filter the schedule by category and discover which events match your skills, interests, or team size.</p>
        </div>

        <div className="mb-10 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                activeCategory === category
                  ? 'border-electric bg-electric/10 text-electric'
                  : 'border-slate-800 bg-slate-950 text-slate-300 hover:border-slate-600 hover:text-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Events
