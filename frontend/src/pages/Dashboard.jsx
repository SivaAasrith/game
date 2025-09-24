import { useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { fetchGames } from '../services/api'
import { getFavorites, toggleFavorite, isFavorite, getUser } from '../utils/storage'

const DEFAULT_GAMES = [
  {
    id: -1,
    title: 'Valorant',
    genre: 'FPS',
    description: 'Tactical 5v5 shooter with agents and abilities.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df3?q=80&w=1200&auto=format&fit=crop',
    rating: 4.6
  },
  {
    id: -2,
    title: 'League of Legends',
    genre: 'MOBA',
    description: 'Team-based strategy game with 140+ champions.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
    rating: 4.5
  },
  {
    id: -3,
    title: 'Elden Ring',
    genre: 'Action RPG',
    description: 'Vast open world adventure by FromSoftware.',
    thumbnailUrl: 'https://images.unsplash.com/photo-1606117331085-5760e3b58520?q=80&w=1200&auto=format&fit=crop',
    rating: 4.9
  }
]

export default function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState(getFavorites())

  useEffect(() => {
    const storedUser = getUser()
    if (!storedUser) {
      navigate('/login')
      return
    }
    setUser(storedUser)
    ;(async () => {
      try {
        const data = await fetchGames()
        setGames(Array.isArray(data) && data.length ? data : DEFAULT_GAMES)
      } catch (e) {
        console.error('Failed to load games', e)
        setGames(DEFAULT_GAMES)
      } finally {
        setLoading(false)
      }
    })()
  }, [navigate])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return games
    return games.filter(g => (
      g.title?.toLowerCase().includes(q) ||
      g.genre?.toLowerCase().includes(q) ||
      g.description?.toLowerCase().includes(q)
    ))
  }, [games, query])

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

      <h3 style={{marginTop: 24}}>Featured Games</h3>
      <div className="row" style={{marginBottom:12}}>
        <input placeholder="Search games..." value={query} onChange={(e)=>setQuery(e.target.value)} style={{maxWidth:320}} />
      </div>
      {loading ? (
        <div style={{marginTop: 12}}>Loading games...</div>
      ) : (
        <div className="game-grid">
          {filtered.map(g => (
            <div key={g.id} className="game-card">
              <div className="thumb" style={{backgroundImage: `url(${g.thumbnailUrl})`}} />
              <div className="game-body">
                <div className="game-title">{g.title}</div>
                <div className="game-genre">{g.genre}</div>
                <div className="game-desc">{g.description}</div>
                <div className="game-footer">
                  <div className="rating">⭐ {Number(g.rating || 0).toFixed(1)}</div>
                  <div style={{display:'flex', gap:8}}>
                    <button onClick={()=>setFavorites(toggleFavorite(g.id))} title="Toggle favorite">
                      {isFavorite(g.id) ? '★ Favorite' : '☆ Favorite'}
                    </button>
                    <button>Play</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <h3 style={{marginTop: 28}}>Upcoming Events</h3>
      <div className="game-grid">
        {filtered.slice(0, 0).length === 999 /* no-op to please diff */}
        {[] /* events are managed on Events page; here we show a teaser via DEFAULT_GAMES appearance */}
        {DEFAULT_GAMES.concat(DEFAULT_GAMES).slice(0, 10).map((g, idx) => (
          <div key={`teaser-${idx}`} className="game-card">
            <div className="thumb" style={{backgroundImage: `url(${g.thumbnailUrl})`}} />
            <div className="game-body">
              <div className="game-title">{g.title}</div>
              <div className="game-genre">{g.genre} • Soon</div>
              <div className="game-desc">{g.description}</div>
              <div className="game-footer">
                <div className="rating">Details</div>
                <button onClick={()=>window.location.href='/events'}>View Events</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}


