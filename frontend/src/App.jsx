import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import MyEvents from './pages/MyEvents'
import Profile from './pages/Profile'
import { getUser, clearUser } from './utils/storage'

function Header() {
  const user = getUser()
  const location = useLocation()
  return (
    <nav className="nav">
      <Link to="/" className="brand">Gaming Portal</Link>
      <div className="spacer" />
      {user ? (
        <>
          <span style={{opacity:.8}}>Hi, {user.firstName}</span>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/events">Events</Link>
          <Link to="/my-events">My Events</Link>
          <Link to="/profile">Profile</Link>
          <a href="#" onClick={(e)=>{e.preventDefault(); clearUser(); window.location.href = '/login'}}>
            Logout
          </a>
        </>
      ) : (
        location.pathname !== '/login' ? <Link to="/login">Login</Link> : <Link to="/signup">Signup</Link>
      )}
    </nav>
  )
}

function PrivateRoute({ element }) {
  const user = getUser()
  return user ? element : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
        <Route path="/events" element={<PrivateRoute element={<Events />} />} />
        <Route path="/events/:id" element={<PrivateRoute element={<EventDetails />} />} />
        <Route path="/my-events" element={<PrivateRoute element={<MyEvents />} />} />
        <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}


