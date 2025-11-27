import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEventById, registerForEvent, unregisterFromEvent, isRegistered, seedDefaultEvents } from '../utils/events'
import { getUser } from '../utils/storage'

export default function EventDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [ev, setEv] = useState(null)
  const [registered, setRegistered] = useState(false)

  useEffect(() => {
    seedDefaultEvents()
    const e = getEventById(id)
    if (!e) {
      navigate('/events')
      return
    }
    setEv(e)
    const user = getUser()
    if (user) setRegistered(isRegistered(user.id || user.email, id))
  }, [id, navigate])

  if (!ev) return null

  const onToggle = () => {
    const user = getUser()
    if (!user) return
    const key = user.id || user.email
    if (registered) {
      unregisterFromEvent(key, id)
      setRegistered(false)
    } else {
      registerForEvent(key, id)
      setRegistered(true)
    }
  }

  return (
    <div>
      <div className="row">
        <h2>{ev.title}</h2>
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <div className="game-card" style={{ gridTemplateRows: '240px auto', marginTop: 12 }}>
        <div className="thumb" style={{ backgroundImage: `url(${ev.thumbnailUrl})` }} />
        <div className="game-body">
          <div className="game-genre">{ev.game} • {ev.date} {ev.time}</div>
          <div className="game-desc" style={{ height: 'auto' }}>{ev.description}</div>
          <div className="game-footer">
            <div className="rating">Prize: {ev.prizePool} • Slots: {ev.slots}</div>
            <button onClick={onToggle}>{registered ? 'Unregister' : 'Register'}</button>
          </div>
        </div>
      </div>
    </div>
  )
}


