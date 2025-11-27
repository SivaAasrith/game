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
    <div>
      <h2>My Events</h2>
      {myEvents.length === 0 ? (
        <div style={{ marginTop: 8, color: 'var(--muted)', marginBottom: 40 }}>You haven't registered for any upcoming events yet.</div>
      ) : (
        <div className="game-grid" style={{ marginBottom: 40 }}>
          {myEvents.map(ev => (
            <div key={ev.id} className="game-card">
              <div className="thumb" style={{ backgroundImage: `url(${ev.thumbnailUrl})` }} />
              <div className="game-body">
                <div className="game-title">{ev.title}</div>
                <div className="game-genre">{ev.game} • {ev.date} {ev.time}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3>Past Participations</h3>
      <div className="game-grid" style={{ marginTop: 24 }}>
        {[
          {
            id: 'past-1',
            title: 'Cyberpunk Night City Run',
            game: 'Cyberpunk 2077',
            date: '2025-09-15',
            result: 'Winner',
            thumbnailUrl: 'https://i.pinimg.com/736x/ad/ea/d2/adead29662c0c8692980b37cbc6ca805.jpg'
          },
          {
            id: 'past-2',
            title: 'Warzone Weekend',
            game: 'Call of Duty',
            date: '2025-08-20',
            result: 'Top 10',
            thumbnailUrl: 'https://i.pinimg.com/1200x/1e/7f/de/1e7fde6ab74c7b28cb99afdc7490110d.jpg'
          },
          {
            id: 'past-3',
            title: 'Apex Legends Scrims',
            game: 'Apex Legends',
            date: '2025-08-05',
            result: '2nd Place',
            thumbnailUrl: 'https://i.pinimg.com/1200x/eb/98/01/eb9801fad72bfe4c2988a851edc89767.jpg'
          }
        ].map(ev => (
          <div key={ev.id} className="game-card" style={{ opacity: 0.8 }}>
            <div className="thumb" style={{ backgroundImage: `url(${ev.thumbnailUrl})` }} />
            <div className="game-body">
              <div className="game-title">{ev.title}</div>
              <div className="game-genre">{ev.game} • {ev.date}</div>
              <div className="game-desc" style={{ marginTop: 8, fontWeight: 'bold', color: 'var(--primary)' }}>Result: {ev.result}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
