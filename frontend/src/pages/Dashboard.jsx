import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('user')
    if (!stored) {
      navigate('/login')
      return
    }
    setUser(JSON.parse(stored))
  }, [navigate])

  const logout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  if (!user) return null

  return (
    <div className="card">
      <div className="row">
        <h2>Welcome, {user.firstName} {user.lastName}</h2>
        <button onClick={logout}>Logout</button>
      </div>
      <div className="stats">
        <div className="stat"><span>Tournaments</span><strong>{user.tournamentsPlayed}</strong></div>
        <div className="stat"><span>Wins</span><strong>{user.wins}</strong></div>
        <div className="stat"><span>Points</span><strong>{user.points}</strong></div>
      </div>
      <div className="meta">
        <div><strong>Email:</strong> {user.email}</div>
        <div><strong>Contact:</strong> {user.contact}</div>
        <div><strong>Age:</strong> {user.age}</div>
      </div>
    </div>
  )
}


