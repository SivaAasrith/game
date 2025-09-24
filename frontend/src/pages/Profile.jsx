import { useEffect, useState } from 'react'
import { getUser, setUser } from '../utils/storage'

export default function Profile() {
  const [user, setUserState] = useState(getUser())
  const [form, setForm] = useState({ firstName:'', lastName:'', contact:'' })

  useEffect(() => {
    if (user) setForm({ firstName: user.firstName || '', lastName: user.lastName || '', contact: user.contact || '' })
  }, [user])

  const update = (k,v) => setForm(f => ({...f, [k]: v}))
  const save = () => {
    const updated = { ...user, ...form }
    setUser(updated)
    setUserState(updated)
    alert('Profile updated!')
  }

  if (!user) return null

  return (
    <div className="card">
      <h2>Profile</h2>
      <div className="form" style={{maxWidth:520}}>
        <label>First name
          <input value={form.firstName} onChange={(e)=>update('firstName', e.target.value)} />
        </label>
        <label>Last name
          <input value={form.lastName} onChange={(e)=>update('lastName', e.target.value)} />
        </label>
        <label>Contact
          <input value={form.contact} onChange={(e)=>update('contact', e.target.value)} />
        </label>
        <button onClick={save}>Save</button>
      </div>
    </div>
  )
}


