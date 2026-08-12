import { events } from '../data/events.js'

export async function getEvents() {
  return Promise.resolve(events)
}

export async function getEventById(eventId) {
  const event = events.find((item) => item.id === eventId)
  return Promise.resolve(event)
}

export async function submitRegistration(payload) {
  console.log('Mock registration payload:', payload)
  return Promise.resolve({ success: true, message: 'Registration submitted successfully.' })
}
