import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { signup } from '../services/api'
import { setUser } from '../utils/storage'

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    age: '',
    contact: '',
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const update = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const payload = { ...form, age: Number(form.age) }
      const user = await signup(payload)
      setUser(user)
      navigate('/dashboard')
    } catch (err) {
      setError(err.message || 'Signup failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="form grid">
        <label>First name
          <input value={form.firstName} onChange={(e) => update('firstName', e.target.value)} required />
        </label>
        <label>Last name
          <input value={form.lastName} onChange={(e) => update('lastName', e.target.value)} required />
        </label>
        <label>Age
          <input type="number" value={form.age} onChange={(e) => update('age', e.target.value)} required />
        </label>
        <label>Contact
          <input value={form.contact} onChange={(e) => update('contact', e.target.value)} required />
        </label>
        <label>Email
          <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} required />
        </label>
        <label>Password
          <input type="password" value={form.password} onChange={(e) => update('password', e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Creating...' : 'Create account'}</button>
        {error && <div className="error">{error}</div>}
      </form>
      <p>Have an account? <Link to="/login">Login</Link></p>
    </div>
  )
}


