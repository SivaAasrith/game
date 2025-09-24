const USER_KEY = 'user'
const FAV_KEY = 'favorites'

export function getUser() {
  try { return JSON.parse(localStorage.getItem(USER_KEY) || 'null') } catch { return null }
}

export function setUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function clearUser() {
  localStorage.removeItem(USER_KEY)
}

export function getFavorites() {
  try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]') } catch { return [] }
}

export function toggleFavorite(gameId) {
  const current = new Set(getFavorites())
  if (current.has(gameId)) current.delete(gameId)
  else current.add(gameId)
  localStorage.setItem(FAV_KEY, JSON.stringify(Array.from(current)))
  return Array.from(current)
}

export function isFavorite(gameId) {
  const current = getFavorites()
  return current.includes(gameId)
}


