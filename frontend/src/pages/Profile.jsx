import { useEffect, useState } from 'react'
import { getUser, setUser } from '../utils/storage'

export default function Profile() {
  const [user, setUserState] = useState(getUser())
  const [form, setForm] = useState({ firstName: '', lastName: '', contact: '' })

  useEffect(() => {
    if (user) setForm({ firstName: user.firstName || '', lastName: user.lastName || '', contact: user.contact || '' })
  }, [user])

  const update = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const save = () => {
    const updated = { ...user, ...form }
    setUser(updated)
    setUserState(updated)
    alert('Profile updated!')
  }

  if (!user) return null

  return (
    <div>
      <h2>Profile</h2>
      <div className="form" style={{ maxWidth: 520, marginBottom: 48 }}>
        <label>First name
          <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
        </label>
        <label>Last name
          <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
        </label>
        <label>Contact
          <input value={form.contact} onChange={(e) => update('contact', e.target.value)} />
        </label>
        <button onClick={save}>Save</button>
      </div>

      <h3>Gaming Setup & Achievements</h3>
      <div className="game-grid" style={{ marginTop: 24 }}>
        <div className="game-card">
          <div className="thumb" style={{ backgroundImage: 'url(https://i.pinimg.com/736x/07/a9/2e/07a92e366310255ac71f995c4e215336.jpg)' }} />
          <div className="game-body">
            <div className="game-title">My Battle Station</div>
            <div className="game-desc">RTX 4090, Ryzen 9 7950X, 64GB RAM. Ready for anything.</div>
          </div>
        </div>
        <div className="game-card">
          <div className="thumb" style={{ backgroundImage: 'url(https://i.pinimg.com/1200x/76/f4/c1/76f4c19a466df5922af6fd5573bc7d5c.jpg)' }} />
          <div className="game-body">
            <div className="game-title">Elden Lord</div>
            <div className="game-desc">Completed Elden Ring 100% achievements.</div>
          </div>
        </div>
      </div>
    </div>
  )
}


