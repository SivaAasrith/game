import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { seedDefaultEvents, getEvents } from '../utils/events'

export default function Events() {
  const [query, setQuery] = useState('')
  const [events, setEvents] = useState([])

  useEffect(() => {
    setEvents(seedDefaultEvents())
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return events
    return events.filter(e => (
      e.title.toLowerCase().includes(q) ||
      e.game.toLowerCase().includes(q)
    ))
  }, [events, query])

  return (
    <div>
      <div className="row">
        <h2>Upcoming Events</h2>
        <input placeholder="Search events..." value={query} onChange={(e) => setQuery(e.target.value)} style={{ maxWidth: 320 }} />
      </div>
      <div className="game-grid">
        {filtered.map(ev => (
          <div key={ev.id} className="game-card">
            <div className="thumb" style={{ backgroundImage: `url(${ev.thumbnailUrl})` }} />
            <div className="game-body">
              <div className="game-title">{ev.title}</div>
              <div className="game-genre">{ev.game} • {ev.date} {ev.time}</div>
              <div className="game-desc">{ev.description}</div>
              <div className="game-footer">
                <div className="rating">Prize: {ev.prizePool}</div>
                <Link to={`/events/${ev.id}`}><button>View</button></Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


