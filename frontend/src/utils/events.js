const EVENTS_KEY = 'events'
const REGS_KEY = 'registrations'

function read(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || JSON.stringify(fallback)) } catch { return fallback }
}
function write(key, value) {
  localStorage.setItem(key, JSON.stringify(value))
}

export function getEvents() {
  return read(EVENTS_KEY, [])
}

export function seedDefaultEvents() {
  const existing = getEvents()
  if (existing && existing.length) return existing
  const seeded = [
    {
      id: 'ev-valorant-cup',
      title: 'Valorant Community Cup',
      game: 'Valorant',
      date: '2025-10-10',
      time: '18:00',
      prizePool: '$500',
      slots: 64,
      thumbnailUrl: 'https://images.unsplash.com/photo-1605649487212-47bdab064df3?q=80&w=1200&auto=format&fit=crop',
      description: '5v5 single-elimination tournament. Bring your best team and tactics.'
    },
    {
      id: 'ev-valorant-duos',
      title: 'Valorant Duos Night',
      game: 'Valorant',
      date: '2025-10-12',
      time: '21:00',
      prizePool: '$150',
      slots: 32,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      description: '2v2 custom lobby mini-tournament.'
    },
    {
      id: 'ev-lol-showdown',
      title: 'League of Legends Showdown',
      game: 'League of Legends',
      date: '2025-10-15',
      time: '20:00',
      prizePool: '$800',
      slots: 32,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
      description: 'Draft your comp and outplay your opponents in this best-of-one bracket.'
    },
    {
      id: 'ev-lol-aram',
      title: 'LoL ARAM Bash',
      game: 'League of Legends',
      date: '2025-10-18',
      time: '19:30',
      prizePool: '$200',
      slots: 40,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
      description: 'All Random, All Mid fun bracket.'
    },
    {
      id: 'ev-fifa-weekend',
      title: 'FIFA Weekend League',
      game: 'FIFA 24',
      date: '2025-10-20',
      time: '16:00',
      prizePool: '$300',
      slots: 128,
      thumbnailUrl: 'https://images.unsplash.com/photo-1551524164-99bf9713e31e?q=80&w=1200&auto=format&fit=crop',
      description: 'Compete in rapid matches. Climb the ladder and win rewards.'
    },
    {
      id: 'ev-fifa-penalty',
      title: 'FIFA Penalty Shootout',
      game: 'FIFA 24',
      date: '2025-10-22',
      time: '17:00',
      prizePool: '$100',
      slots: 64,
      thumbnailUrl: 'https://images.unsplash.com/photo-1518081461904-9ac672c86b8b?q=80&w=1200&auto=format&fit=crop',
      description: 'Quick-fire penalties, sudden death format.'
    },
    {
      id: 'ev-elden-challenge',
      title: 'Elden Challenge Run',
      game: 'Elden Ring',
      date: '2025-10-25',
      time: '19:00',
      prizePool: '$1000',
      slots: 24,
      thumbnailUrl: 'https://images.unsplash.com/photo-1606117331085-5760e3b58520?q=80&w=1200&auto=format&fit=crop',
      description: 'Speedrun event with special modifiers. Are you brave enough?'
    },
    {
      id: 'ev-elden-nohit',
      title: 'Elden No-Hit Marathon',
      game: 'Elden Ring',
      date: '2025-10-28',
      time: '19:00',
      prizePool: '$600',
      slots: 20,
      thumbnailUrl: 'https://images.unsplash.com/photo-1606117331085-5760e3b58520?q=80&w=1200&auto=format&fit=crop',
      description: 'No-hit runs across selected bosses.'
    },
    {
      id: 'ev-cs2-open',
      title: 'CS2 Open Ladder',
      game: 'CS2',
      date: '2025-10-09',
      time: '18:30',
      prizePool: '$350',
      slots: 80,
      thumbnailUrl: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop',
      description: 'Climb the ladder, best-of-one series.'
    },
    {
      id: 'ev-fortnite-frenzy',
      title: 'Fortnite Friday Frenzy',
      game: 'Fortnite',
      date: '2025-10-11',
      time: '20:30',
      prizePool: '$400',
      slots: 100,
      thumbnailUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop',
      description: 'Solos with rotating modifiers.'
    },
    {
      id: 'ev-rocket-league',
      title: 'Rocket League 3v3 Clash',
      game: 'Rocket League',
      date: '2025-10-17',
      time: '18:00',
      prizePool: '$250',
      slots: 48,
      thumbnailUrl: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?q=80&w=1200&auto=format&fit=crop',
      description: 'High-flying car soccer tournament.'
    },
    {
      id: 'ev-dota2-skirmish',
      title: 'Dota 2 Skirmish',
      game: 'Dota 2',
      date: '2025-10-26',
      time: '19:30',
      prizePool: '$500',
      slots: 40,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop',
      description: 'Classic 5v5 tourney with bans and picks.'
    },
    {
      id: 'ev-apex-arena',
      title: 'Apex Legends Arena Clash',
      game: 'Apex Legends',
      date: '2025-10-13',
      time: '19:00',
      prizePool: '$220',
      slots: 60,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      description: 'Trio arena tournament with escalating rounds.'
    },
    {
      id: 'ev-pubg-open',
      title: 'PUBG Open Royale',
      game: 'PUBG',
      date: '2025-10-14',
      time: '18:30',
      prizePool: '$280',
      slots: 96,
      thumbnailUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
      description: 'Solo royale ladder with point system.'
    }
  ]
  write(EVENTS_KEY, seeded)
  return seeded
}

export function getEventById(eventId) {
  return getEvents().find(e => e.id === eventId)
}

export function getRegistrations() {
  return read(REGS_KEY, {})
}

export function getUserRegistrations(userId) {
  const all = getRegistrations()
  return Array.isArray(all[userId]) ? all[userId] : []
}

export function isRegistered(userId, eventId) {
  return getUserRegistrations(userId).includes(eventId)
}

export function registerForEvent(userId, eventId) {
  const all = getRegistrations()
  const current = new Set(all[userId] || [])
  current.add(eventId)
  all[userId] = Array.from(current)
  write(REGS_KEY, all)
  return all[userId]
}

export function unregisterFromEvent(userId, eventId) {
  const all = getRegistrations()
  const current = new Set(all[userId] || [])
  current.delete(eventId)
  all[userId] = Array.from(current)
  write(REGS_KEY, all)
  return all[userId]
}


