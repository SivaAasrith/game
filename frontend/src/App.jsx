import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Homepage from './pages/Homepage'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import MyEvents from './pages/MyEvents'
import Profile from './pages/Profile'
import { getUser } from './utils/storage'

function PrivateRoute({ element }) {
  const user = getUser()
  return user ? element : <Navigate to="/login" replace />
}

export default function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<PrivateRoute element={<Dashboard />} />} />
          <Route path="/events" element={<PrivateRoute element={<Events />} />} />
          <Route path="/events/:id" element={<PrivateRoute element={<EventDetails />} />} />
          <Route path="/my-events" element={<PrivateRoute element={<MyEvents />} />} />
          <Route path="/profile" element={<PrivateRoute element={<Profile />} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
