import { useEffect, useMemo, useState } from 'react'
import { getUser } from '../utils/storage'
import { getUserRegistrations, getEvents } from '../utils/events'

export default function MyEvents() {
  const [user, setUser] = useState(null)
  const [events, setEvents] = useState([])
  const [regs, setRegs] = useState([])

  useEffect(() => {
    const u = getUser()
    setUser(u)
    setEvents(getEvents())
    if (u) setRegs(getUserRegistrations(u.id || u.email))
  }, [])

  const myEvents = useMemo(() => {
    const setIds = new Set(regs)
    return events.filter(e => setIds.has(e.id))
  }, [events, regs])

  return (
    <div className="card">
      <h2>My Events</h2>
      {myEvents.length === 0 ? (
        <div style={{marginTop: 8, color: 'var(--muted)'}}>You haven\'t registered for any events yet.</div>
      ) : (
        <div className="game-grid">
          {myEvents.map(ev => (
            <div key={ev.id} className="game-card">
              <div className="thumb" style={{backgroundImage:`url(${ev.thumbnailUrl})`}} />
              <div className="game-body">
                <div className="game-title">{ev.title}</div>
                <div className="game-genre">{ev.game} • {ev.date} {ev.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


