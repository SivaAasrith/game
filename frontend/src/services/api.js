const API_BASE = import.meta.env.VITE_API_BASE || '/api'

const headers = {
  'Content-Type': 'application/json'
}

async function handleResponse(res) {
  if (!res.ok) {
    const text = await res.text()
    throw new Error(text || `Request failed with ${res.status}`)
  }
  return res.json()
}

export async function login({ email, password }) {
  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers,
    body: JSON.stringify({ email, password })
  })
  return handleResponse(res)
}

export async function signup(payload) {
  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload)
  })
  return handleResponse(res)
}

export async function fetchGames() {
  const res = await fetch(`${API_BASE}/games`, {
    method: 'GET',
    headers
  })
  return handleResponse(res)
}


