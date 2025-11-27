import { Link, useNavigate } from 'react-router-dom'
import { getUser } from '../utils/storage'

export default function Navbar() {
  const navigate = useNavigate()
  const user = getUser()

  const handleLogout = () => {
    sessionStorage.removeItem('user')
    navigate('/login')
  }

  return (
    <nav className="nav">
      <div className="container nav-container">
        <Link to="/" className="brand">
          <span>🎮</span> GAMEFY
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/events">Events</Link>
          {user ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/my-events">My Events</Link>
              <Link to="/profile">Profile</Link>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginLeft: '16px' }}>
                <span className="user-greeting">Hi, {user.firstName}</span>
                <button onClick={handleLogout} className="btn-outline" style={{ padding: '8px 20px', fontSize: '14px' }}>Logout</button>
              </div>
            </>
          ) : (
            <Link to="/login" className="btn-primary" style={{ padding: '8px 24px' }}>SIGN IN</Link>
          )}
        </div>
      </div>
    </nav>
  )
}
