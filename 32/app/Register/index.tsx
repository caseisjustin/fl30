'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { registerUser } from '@/api/auth'

const Register = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await registerUser(email, password)
      router.push('/login')
    } catch (err: any) {
      setError(err.message)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
      <button type="submit">Register</button>
    </form>
  )
}

export default Register