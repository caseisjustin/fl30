const API_URL = 'http://localhost:3001/users'

export async function registerUser(email: string, password: string) {
  const res = await fetch(`${API_URL}?email=${email}`)
  const existing = await res.json()

  if (existing.length > 0) {
    throw new Error('User already exists')
  }

  const createRes = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password }),
  })

  return await createRes.json()
}

export async function loginUser(email: string, password: string) {
  const res = await fetch(`${API_URL}?email=${email}&password=${password}`)
  const users = await res.json()

  if (users.length === 1) {
    return users[0]
  } else {
    throw new Error('Invalid email or password')
  }
}
